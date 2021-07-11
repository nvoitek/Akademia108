var obliczBtn = document.getElementById("oblicz");

class Pracownik {
    constructor(name, time) {
        this.name = name;
        this.time = time;
    }
}

let top3Pracownicy = [
    new Pracownik("", 0),
    new Pracownik("", 0),
    new Pracownik("", 0)
];

obliczBtn.onclick = function() {
    let pracownicy = document.querySelectorAll("div[id^='pracownik']");

    for (let pracownik of pracownicy) {
        let czasPracy = pracownik.querySelector(".czas").value;
        
        if (czasPracy < 160) {
            pracownik.style.backgroundColor = "red";
        }

        if (+czasPracy > +top3Pracownicy[0].time) {
            top3Pracownicy[2] = top3Pracownicy[1];
            top3Pracownicy[1] = top3Pracownicy[0];
            top3Pracownicy[0] = new Pracownik(pracownik.querySelector(".pracownik").innerText, czasPracy);
        } else if (+czasPracy > +top3Pracownicy[1].time) {
            top3Pracownicy[2] = top3Pracownicy[1];
            
            top3Pracownicy[1] = new Pracownik(pracownik.querySelector(".pracownik").innerText, czasPracy);
        } else if (+czasPracy > +top3Pracownicy[2].time) {
            top3Pracownicy[2] = new Pracownik(pracownik.querySelector(".pracownik").innerText, czasPracy);
        }

        let czasPracyBezPremii = czasPracy > 160 ? 160 : czasPracy;
        let czasPracyZPremia = czasPracy > 160 ? czasPracy - 160 : 0;

        let stawka = pracownik.querySelector(".stawka").value;

        let wyplata = czasPracyBezPremii * stawka + czasPracyZPremia * stawka * 2;
        pracownik.querySelector(".wyplata").innerText = wyplata;
    }

    document.getElementById("najlepsi-pracownicy").innerText = `${top3Pracownicy[0].name}, ${top3Pracownicy[1].name}, ${top3Pracownicy[2].name}`;
}