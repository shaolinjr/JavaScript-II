class MensagemView extends View{

  constructor(elementoDOM) {
    super(elementoDOM); //-> Aqui passamos o elemento do DOM para o método constructor da classe pai (View)
  }

  template(modelo) {
    if (modelo.mensagemTexto){
      return `<p class="alert alert-info">${modelo.mensagemTexto}</p>`;
    }else {
      return `<p></p>`;
    }
  }

}

// Basicamente o que acontece nesse tipo de estrutura:
/*
  - Eu tenho que receber o elemento do DOM onde a view vai ser colocada;
  - Eu tenho que criar o template (HTML) para ser colocado dentro do elemento que pegamos;
  - Temos que passar o conteúdo da classe de Mensagem para o template e renderizar da forma como queremos


*/
