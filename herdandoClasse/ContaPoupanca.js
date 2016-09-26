class ContaPoupanca extends Conta {
  constructor(saldo) {
    super(saldo);
  }

  atualiza (taxa){
    this._saldo =  2 * taxa + this.saldo;
  }
}
