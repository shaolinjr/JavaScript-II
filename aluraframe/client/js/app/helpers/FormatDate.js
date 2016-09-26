class FormatDate {
  constructor() {
    throw new Error ("Esta classe não pode ser instanciada.")
  }
// podemos usar as funções com a notação static, assim não precisamos criar uma instância da classe toda vez que
// quisermos acessar os métodos dessa classe

  static textToDate (text){
    // usando técnica de Fail fast pra pegar erro de data
    if (!/\d{4}-\d{2}-\d{2}/.test(text)){
      throw new Error("Formato de data inválido. Deve estar: yyyy-mm-ddd")
    }
    return new Date(...text.split("-").map(
      function(item, index){
        if (index == 1){
          return item - 1;
        }
        return item;
      })
    );

    // segunda opção de modificar o mês, podemos usar o novo tipo de função, chamado Arrow Functions
    // map((item, index) => item - index % 2)
  }

  static dateToText (date){
    // usando templateString pra melhorar a escrita do código:
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    // return date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
  }
}
