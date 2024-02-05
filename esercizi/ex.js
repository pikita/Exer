



class Tabella{
    nomiColonne;
    data;

    constructor(nomiColonne, data){
        this.nomiColonne = nomiColonne;
        this.data = data;
        this.generaTabella();
    }

    generaTabella(){
        const tabella = document.createElement("table")
        tabella.appendChild(this.generaColonne())
        tabella.appendChild(this.generaRighe())
        document.getElementById("my-table").appendChild(tabella)
    }
    generaColonne(){
        //console.log(this.nomiColonne)
        
        const thead = document.createElement("thead");
        this.nomiColonne.forEach((element) => {
             console.log(element)
             const th = document.createElement("th")
             const testo = document.createTextNode(element)
             th.appendChild(testo)
             thead.appendChild(th)
        });
        return thead
    }

    generaRighe(){

        const tbody = document.createElement("tbody")
        this.data.forEach(riga => {
            const tr = document.createElement("tr")
            Object.keys(riga).forEach(key => {
                const cella = document.createElement("td")
                const testo = document.createTextNode(riga[key])
                cella.appendChild(testo)
                tr.appendChild(cella)
            })
            tbody.appendChild(tr)
        })
        return tbody
    }
}


const nomiColonne1 = [
    "id",
    "nome",
    "cognome",
    "email",
    "codice fiscale",
    "indirizzo"
  ];
  const data1 = [
    {
      id: 1,
      nome: "luca",
      cognome: "rossi",
      email: "lucarossi@gmaail.it",
      codiceFiscale: "kdrwde32f93x109m",
      indirizzo: "via torino",
    },
    {
      id: 2,
      nome: "gago",
      cognome: "albi",
      email: "balbi@gmaail.it",
      codiceFiscale: "dsahhuhuiag",
      indirizzo: "via le mani dal panino",
    },
    {
      id: 3,
      nome: "gigio",
      cognome: "triolo",
      email: "triolino@gmaail.it",
      codiceFiscale: "triolino2f93x109m",
      indirizzo: "via trattiolino",
    },
    {
      id: 4,
      nome: "giornano",
      cognome: "explotano",
      email: "explotanoi@gmaail.it",
      codiceFiscale: "kdsafdfe93x109m",
      indirizzo: "via pentola",
    },
  ];

  const tabella1 = new Tabella(nomiColonne1, data1)
  //const tabella2 = new Tabella(["asd","dsafas"], data1)
  
 /* console.log(nomiColonne1)  */








  
