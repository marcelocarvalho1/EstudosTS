// let nome = "marcelo";
// let idade = 12;
// let maiorIdade = false;

// let a = 5;
// let b = 10;

// function somar(a: number, b: number) {
//   return a + b;
// }

// console.log(somar(a, b));
//_____________________________________________________________________________

// let a: (number | string)[] = [1,2,3, "marcelo"];

// console.log(a);
//_____________________________________________________________________________

// type TipoArray = (number | "treina")[];

// let a: TipoArray = [1, 2, 3, "treina"];

// let b: TipoArray = [1, 2, 3, "treina", "treina"];

// console.log(a);

// type Animal = {
//   nome: string;
//   idade?: number;
// };

// let cachorro: Animal;

// cachorro = {
//   nome: "petz",
//   idade: 10,
// };

// console.log(cachorro);
//_____________________________________________________________________________
//ENUM
// enum produtoStatus {
//   Ativo = 1,
//   Inativo = 2,
//   EmFalta = 3,
// }
// function checarProdutosStatus(status: number) {
//   switch (status) {
//     case produtoStatus.Ativo:
//       console.log("Produto ativo");
//       break;
//     case produtoStatus.Inativo:
//       console.log("Produto inativo");
//       break;
//     case produtoStatus.EmFalta:
//       console.log("Produto em falta");
//       break;
//   }
// }
// checarProdutosStatus(produtoStatus.Ativo);
//________________________________________________________________

//INTERFACES

interface IAnimal {
  nome: string;
  idade: number;
  estaVivo: boolean;

  nascer(): void;
  crescer(): void;
  morre(): void;
}
class Animal implements IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;


    constructor(nome: string, idade: number, estaVivo: boolean) {
        this.nome = nome;
        this.idade = 0;
        this.estaVivo = false;
    }
    nascer() {
        this.estaVivo = true;
        return console.log(`O ${this.nome} nasceu`);
      };
      crescer() {
        this.idade++;
        return console.log(`O ${this.nome} cresceu e agora tem ${this.idade} anos`);
      };
      morre() {
        this.estaVivo = false;
        return console.log(`O ${this.nome} morreu`);
      };
}


let cachorro = new Animal("Rex", 0, true);

cachorro.nascer();
cachorro.crescer();
cachorro.crescer();
cachorro.morre();