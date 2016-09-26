class ListaNegociacoes {
  constructor(armadilha) {
    this._negociacoes = [];
    this._armadilha  = armadilha;

  }

  // adiciona uma negociação à lista de negociações
  addNegociacao (negociacao) {
    this._negociacoes.push(negociacao);
    // metodo para atualizar;
    this._armadilha(this);
  }

  // retorna a lista de negociações
  get negociacoes(){
    return [].concat(this._negociacoes);
  }

  esvazia (){
    this._negociacoes = [];
    this._armadilha(this);
  }
}
