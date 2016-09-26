class NegociacoesView extends View{

  constructor(viewElement) {
    super(viewElement);
  }

  template(model) {
    return `
      <table class="table table-hover table-bordered">

        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>

        <tbody>
          ${model.negociacoes.map(function(item){
            return `
            <tr>
              <td>${FormatDate.dateToText(item.data)}</td>
              <td>${item.quantidade}</td>
              <td>${item.valor}</td>
              <td>${item.volume}</td>
            </tr>`
          }).join('')}
        </tbody>

        <tfoot>
          <td colspan="3"></td>
          <td>${
              model.negociacoes.reduce(function(total, item){
                return total + item.volume;
              },0.0)
          }</td>
        </tfoot>

      </table>`;
  }
}

// a view tem que se atualizar de acordo com os itens que vão sendo adicionados pelo formulario
