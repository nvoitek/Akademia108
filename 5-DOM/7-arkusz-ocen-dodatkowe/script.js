var obliczBtn = document.getElementById("oblicz");

class Student {
    constructor(name, grades) {
        this.name = name;
        this.grades = grades;
    }

    calculateAvg() {
        let cnt = 0;
        let avg = 0;
        for (let grade of this.grades) {
            avg += grade.value;
            cnt ++;
        }
        return (avg/cnt).toFixed(2);
    }

    hasNdst() {
        for (let grade of this.grades) {
            if (grade.value == 1) return true;
        }
        return false;
    }
}

obliczBtn.onclick = function() {
    for (let student of document.querySelectorAll("div[id^='uczen']")) {
        let stName = student.querySelector(".uczen").innerText;
        let stBonus = student.querySelector(".zajecia-dodatkowe").value.split(', ');
        let stGrades = [];
        student.querySelectorAll("input[type='number']")
            .forEach(element => {
                stGrades.push({
                    key: element.className,
                    value: element.value < 6 ? (
                        stBonus.includes(element.className) ?
                            +element.value + 0.5 :
                            +element.value
                        ) : 6
                })
        });

        st = new Student(stName, stGrades);
        let stAvg = st.calculateAvg();
        let stHasNdst = st.hasNdst();
        
        student.querySelector(".srednia").innerText = stAvg;

        if (stAvg >= 4.75) { // można porównywać float bo dokładność ograniczona do 2 miejsca po przecinku
            student.style.backgroundColor = "green";
        }
        
        if (stHasNdst) {
            student.style.backgroundColor = (student.style.backgroundColor == "green") ? "yellow" : "red";
        }
    }
}