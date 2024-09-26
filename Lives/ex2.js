class PicachuPokemon{
    nome;
    forca;
    defesa;
    familia;
    id;
    constructor(nome,forca,defesa,familia, id){
      this.nome = nome;
      this.forca = forca;
      this.defesa = defesa;
      this.familia = familia;
      this.id = id;
    }
    
    atacar(){
      throw new Error("Metodo atacar() é obrigatorio!")
    }
    
}
// herança
class DittoPokemon extends PicachuPokemon{
  habilidade;
  constructor(nome,forca,defesa,familia, id, habilidade){
      super(nome,forca,defesa,familia, id);
      this.habilidade = habilidade;
      
    }
    // polimofismo
  atacar(){
    return `Pokemon ${this.nome} ataca com fogo!`
  }
}

const clonePicachu = new DittoPokemon("Picachu",89,75,"Clone",48499,"Capacidade de clonagem")
console.log(clonePicachu);
console.log(clonePicachu.atacar()); 

function atacarAgora(pokmon){
  console.log(pokmon.atacar()); 
}

atacarAgora(clonePicachu)
