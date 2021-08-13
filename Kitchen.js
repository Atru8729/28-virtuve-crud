class Kitchen {
    constructor(chefName) {
        this.chefName = chefName;
        this.list = {};
    }

    intro() {
        console.log(`Sveiki atvyke i ${this.chefName} virtuve!`);
    }

    nupirkta(productName, amount) {
        if (productName in this.list) {
            this.list[productName] += amount;
        } else {
            this.list[productName] = amount;
        }
    }

    turimiProduktai() {
        let number = 0;
        for (const productName in this.list) {
            console.log(`${++number}) ${this.formatName(productName)}: ${this.list[productName]}`);
        }
    }

    sunaudota(productName, amount) {
        this.list[productName] -= amount;
        if (this.list[productName] < 0) {
            this.list[productName] = 0;
        }
    }

    sugedesProduktas(productName) {
        delete this.list[productName];
    }

    formatName(str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }
}

module.exports = Kitchen;

// class Kitchen {
//     constructor(virejoName) {
//         this.list = [];
//         this.virejoName = virejoName;
//     }
//     intro() {
//         console.log(`Sveiki atvyke i ${this.virejoName} virtuve!`);
//     }
//     nupirkta(pavadinimas, kiekis) {
//         let krepselis = { pavadinimas, kiekis, nesugedes: true }
//         this.list.push(krepselis);
//         console.log(krepselis);
//     }
//     turimiProduktai() {
//         for (let i = 0; i < this.list.length; i++) {
//             const produktas = this.list[i];
//             if (produktas.nesugedes) {

//                 console.log(`${i + 1}) ${list.pavadinimas}: ${list.kiekis}`);
//                 const naujasPavadinimas = this.isDidziosiosRaides(list.pavadinimas);
//             }
//         }
//     }
//     isDidziosiosRaides(tekstas) {
//         let atsakymas = '';
//         //reikia rasti 1 raide
//         //rasti likusias raides
//         //1 rasta raide versti i didziaja
//         //didziaja raide sujungti su likusiomis raidemis
//         return atsakymas;
//     }

//     sunaudota(naudojamasProduktas, naudojamasKiekis) {
//         for (let i = 0; i < this.list.length; i++) {
//             const krepselis = this.list[i];

//             if (naudojamasProduktas === krepselis.pavadinimas) {
//                 krepselis.kiekis -= naudojamasKiekis;
//                 break;
//             }
//         }

//     }

//     sugedesProduktas(pavadinimas) {
//         const updatedProduktaiList = [];

//         for (let i = 0; i < this.list.length; i++) {
//             if (i !== index) {
//                 updatedProduktaiList.push(this.list[i]);
//             }
//         }
//         this.list = updatedProduktaiList;
//     }


// }

// module.exports = Kitchen;