// Criando modelo de mensagem para exibir para o usuário

class Mensagem {

  constructor(texto='') {
    this._texto = texto;
  }

  get mensagemTexto(){
    return this._texto;
  }

  set texto(texto){
    this._texto = texto;
  }
}
