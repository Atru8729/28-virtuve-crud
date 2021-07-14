class Kitchen {
    constructor(virejoName) {
        this.produktuSarasas = [];
        this.virejoName = virejoName;
    }
    intro() {
        console.log(`Sveiki atvyke i ${this.virejoName} virtuve!`);
    }
    nupirkta(produktas, kiekis) {
        let krepselis = { produktas, kiekis }
        this.produktuSarasas.push(krepselis);
        console.log(krepselis);
    }
    turimiProduktai() {

    }
    sunaudota() {

    }
    sugedesProduktas() {

    }

}

module.exports = Kitchen;