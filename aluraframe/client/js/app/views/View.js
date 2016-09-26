class View {

  constructor(elementoDOM) {
    this._elemento = elementoDOM;
  }

  template () {
    throw new Error ("Método template deve ser implementado");
  }

  update (model){
    this._elemento.innerHTML = this.template(model)
  }
}
