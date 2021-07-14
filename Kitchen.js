class Kitchen {
    constructor(virejoName) {
        this.list = [];
        this.virejoName = virejoName;
    }
    intro() {
        console.log(`Sveiki atvyke i ${this.virejoName} virtuve!`);
    }
    nupirkta(pavadinimas, kiekis) {
        let krepselis = { pavadinimas, kiekis }
        this.list.push(krepselis);
        console.log(krepselis);
    }
    turimiProduktai() {
        for (let i = 0; i < this.list.length; i++) {
            const list = this.list[i];
            const naujasPavadinimas = this.isDidziosiosRaides(list.pavadinimas);
            console.log(`${i + 1}) ${list.pavadinimas}: ${list.kiekis}`);
        }
    }
    isDidziosiosRaides(tekstas) {
        let atsakymas = '';
        //reikia rasti 1 raide
        //rasti likusias raides
        //1 rasta raide versti i didziaja
        //didziaja raide sujungti su likusiomis raidemis
        return atsakymas;
    }

    sunaudota(pavadinimas, sunaudotasKiekis) {
        for (let i = 0; i < this.list.length; i++) {
            const sunaudotasKiekis = this.list[i];
            console.log(pavadinimas, sunaudotasKiekis);
            // if (pavadinimas === ) {

            // }

        }
    }
    sugedesProduktas() {

    }

}

module.exports = Kitchen;