import './Signup.css';
import {useState} from 'react';
import axios from 'axios';
import Button from './styled-components/Button';
import styled from 'styled-components';

function Signup() {

    const [signupData, setSignupData] = useState({username : '', email : '', password : '', confirmPassword : ''});

    const [validationData, setValidationData] = useState({hasErrors : false, isSubmitted : false, isUsernameEmpty : false, isEmailEmpty : false, isPasswordEmpty : false, isConfirmPasswordEmpty : false, doPasswordMatch : false});

    const [isUsernameEmpty, setIsUsernameEmpty] = useState(false);
    const [submitMsg, setSubmitMsg] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [hasErrors, setHasErrors] = useState(false);
    
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
    
    const [isConfirmPasswordEmpty, setIsConfirmPasswordEmpty] = useState(false);
    const [doPasswordMatch, setDoPasswordMatch] = useState(false);
        
    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };
 
    const onUsernameChange = (e) => {
        setSignupData(prevState => ({
            ...prevState,
            username : e.target.value
        }));
    };

    const onEmailChange = (e) => {
        setSignupData(prevState => ({
            ...prevState,
            email : e.target.value
        }));
    };

    const onPasswordChange = (e) => {
        setSignupData(prevState => ({
            ...prevState,
            password : e.target.value
        }));
    }

    const onConfirmPasswordChange = (e) => {
        setSignupData(prevState => ({
            ...prevState,
            confirmPassword : e.target.value
        }));
    }

    const onSignup = (e) => {
        e.preventDefault();
        let ok = true;

        setValidationData(prevState => ({
            ...prevState,
            isUsernameEmpty : !signupData.username
        }));

        setValidationData(prevState => ({
            ...prevState,
            isEmailEmpty : !signupData.email
        }));

        setValidationData(prevState => ({
            ...prevState,
            isPasswordEmpty : !signupData.password
        }));

        setValidationData(prevState => ({
            ...prevState,
            isConfirmPasswordEmpty : !signupData.confirmPassword
        }));

        setValidationData(prevState => ({
            ...prevState,
            doPasswordMatch : signupData.password !== signupData.confirmPassword
        }));

        if (signupData.username 
            && signupData.email
            && signupData.password 
            && signupData.confirmPassword
            && signupData.password === signupData.confirmPassword) {
                signup(signupData);
            }
    };

    const signup = (signupData) => {
        let postData = {
            username: signupData.username,
            email : signupData.email,
            password: signupData.password
        };

        axios.post(
            'https://akademia108.pl/api/social-app/user/signup', 
            postData, 
            axiosConfig)
        .then((res) => {
            console.log("RESPONSE RECEIVED: ", res);

            if (res.data.signedup) {

                setValidationData(prevState => ({
                    ...prevState,
                    submitMsg : `${signupData.username} created`,
                    isSubmitted : true
                }));
                setSignupData({username : '', email : '', password : '', confirmPassword : ''});
            } else {

                setValidationData(prevState => ({
                    ...prevState,
                    submitMsg : `${signupData.username} or ${signupData.email} already has an account`,
                    hasErrors : true
                }));
            }
        })
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        })
    };

    return (
        <SignupForm className="Signup-form" onSubmit={onSignup}>
            <InfoParagraph visible={validationData.isSubmitted}>{validationData.submitMsg}</InfoParagraph>
            <ErrorParagraph visible={validationData.hasErrors}>{validationData.submitMsg}</ErrorParagraph>
            <ErrorParagraph visible={validationData.isUsernameEmpty}>Username can't be empty</ErrorParagraph>
            <Input type="text" placeholder="username" value={signupData.username} onChange={onUsernameChange}/>

            <ErrorParagraph visible={validationData.isEmailEmpty}>Email can't be empty</ErrorParagraph>
            <Input type="email" placeholder="email" value={signupData.email} onChange={onEmailChange}/>

            <ErrorParagraph visible={validationData.isPasswordEmpty}>Password can't be empty</ErrorParagraph>
            <Input type="password" placeholder="password" value={signupData.password} onChange={onPasswordChange}/>

            <ErrorParagraph visible={validationData.isConfirmPasswordEmpty}>Password can't be empty</ErrorParagraph>
            <ErrorParagraph visible={validationData.doPasswordMatch}>Passwords don't match</ErrorParagraph>
            <Input type="password" placeholder="confirm password" value={signupData.confirmPassword} onChange={onConfirmPasswordChange}/>

            <Button>Submit</Button>
        </SignupForm>
    );
}

const SignupForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
`;

const InfoParagraph = styled.p`
    color: green;
    display: ${props => (props.visible ? 'block' : 'none')};
`;

const ErrorParagraph = styled.p`
    color: red;
    display: ${props => (props.visible ? 'block' : 'none')};
`;

const Input = styled.input`
    margin: 10px;
`;

export default Signup;