// Usamos o _ nos atributos para estabelecer a convenção de que atributos que possuem um underline antes do nome\
// só podem ser acessados por métodos dentro da própria classe, ou seja, eles se tornam atributos/varíaveis, privadas

class Negociacao {
  constructor(data, quantidade, valor) {
    this._data = new Date(data.getTime());
    this._quantidade = quantidade;
    this._valor = valor;

    Object.freeze(this);
  }

  get volume (){
    return this._quantidade * this._valor;
  }

  get data (){
    return new Date(this._data.getTime());
  }
  get quantidade (){
    return this._quantidade;
  }
  get valor () {
    return this._valor;
  }

}
