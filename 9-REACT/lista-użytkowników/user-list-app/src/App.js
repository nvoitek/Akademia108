import './App.css';
import AddUser from './AddUser';
import UserList from './UserList';
import React, { useState } from 'react';

function App() {

  const [newUser, setNewUser] = useState('');
  const [isMsgVisible, setIsMsgVisible] = useState(false);
  const [users, setUsers] = useState(["Marek", "Józek", "Teresa"]);

  const onChange = (e) => {
    setIsMsgVisible(false);
    setNewUser(e.target.value);
  }

  const onAdd = () => {
    if (users.includes(newUser)){
      setIsMsgVisible(true);
    } else {
      setIsMsgVisible(false);
      setUsers([...users, newUser]);
      setNewUser('');
    }
  }

  const onDelete = (user) => {
    return function() {
      let newList = users.filter(item => item !== user);
      setUsers(newList);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          User's list
        </h1>
      </header>
      <p className={"WarningMsg" + (isMsgVisible ? " visible" : " hidden")} >User {newUser} already exists</p>
      <AddUser userName={newUser} onUserNameChanged={onChange} onAddUser={onAdd}/>
      <UserList users={users} onUserDeleted={onDelete}/>
    </div>
  );
}

export default App;