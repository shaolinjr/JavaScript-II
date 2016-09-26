class NegociacaoCtrl {

  // pega os campos do formulário e instancia a classe que receberá as negociações
  constructor(){
    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $("#valor");
    this._listaNegociacoes = new ListaNegociacoes(model => this._negociacoesView.update(model));
    // instanciando a view e passando o id da div que irá receber os elementos da view
    this._negociacoesView = new NegociacoesView($("#negociacoes-view"));

    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView($('#mensagem-view')); // -> ID de renderização da mensagem
    this._mensagemView.update(this._mensagem);
  }

  // adiciona a negociação com base na classe Negociacao e adiciona no array de negociações
  adiciona(event){
    event.preventDefault();
    // usamos o FormatDate para settar o formato da data da forma como nós precisamos
    let data = FormatDate.textToDate(this._inputData.value);
    let diaMesAno = FormatDate.dateToText(data);
    // nova instância da negociação
    let negociacao = new Negociacao (data, this._inputQuantidade.value, this._inputValor.value);
    this._listaNegociacoes.addNegociacao(negociacao);

    this._mensagem.texto = "Sua negociação foi cadastrada com sucesso!";
    this._limpaFormulario();
    this._negociacoesView.update(this._listaNegociacoes);

    console.log(this._listaNegociacoes.negociacoes);

  }

  apaga (){
    // Apagamos a lista
    this._listaNegociacoes.esvazia();
    // Atualizamos a view com as mudanças da lista
    this._negociacoesView.update(this._listaNegociacoes);
    this._mensagem.texto = "Lista de negociações apagadas com sucesso";
    this._mensagemView.update(this._mensagem);

  }

  _limpaFormulario (){
    this._inputData.value = "";
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;
    // set focus to date field
    this._inputData.focus();
  }
}
