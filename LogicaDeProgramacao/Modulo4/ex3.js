// Implemente a classe Conta

class Conta {
    constructor() {
        this.valores = [];
    }

    adicionarTotais(valorestr) {
      
      let valorEmNumero = Number.parseInt(valorestr)
      this.valores.push(valorEmNumero)
    }
    
    obterQuantidadeDeValores(){
     return  this.valores.length
    }
    obterTotal(){
      return this.valores.reduce((total, valor)=>{
        return total += valor
      },0)
    }
    obterMedia(){
      let totalValores =  this.valores.length
      
      let somaValores = this.valores.reduce((total, valor)=>{
        return total += valor
      },0)
      return somaValores/ totalValores
    }
}

// ---- Modifique apenas o código que está acima desta linha ----
document.write(`
<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
    <h2>App Dividir Conta</h2>   
    <form id="dv-form-total">
        <label for="component-name">Seu total pago</label><br><br>
        <input type="number" placeholder="Total pago" id="dv-total" autocomplete="off"><br><br>
        <input type="submit" value="Adicionar" />
    </form>

    <div>
        <h2>Sua conta</h2>
        <table border="1">
            <thead>
                <tr>
                    <th width="50%">Descrição</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody id="tbody">
            </tbody>
        </table>
    </div>
</div>
`);

const dvFormulario = document.querySelector("#dv-form-total");
const dvTotal = document.querySelector("#dv-total");
const tbody = document.querySelector("#tbody");

const conta = new Conta();

function formatar() {
    tbody.innerHTML = "";
    conta.valores.forEach(function (valor) {
        tbody.insertAdjacentHTML("beforeend", `<tr>
            <td>SubTotal</td>
            <td>${valor}</td>
        </tr>`);
    });
     tbody.insertAdjacentHTML("beforeend", `<tr class="separator"></tr>
        <tr>
            <th>Total</th>
            <td>${conta.obterTotal()}</td>
        </tr>
        <tr>
            <th>Quantidade de pessoas</th>
            <td>${conta.obterQuantidadeDeValores()}</td>
        </tr>
        <tr>
            <th>Valor por pessoa</th>
            <td>${conta.obterMedia()}</td>
        </tr>`);
}

dvFormulario.addEventListener("submit", event => {
    event.preventDefault();

    conta.adicionarTotais(dvTotal.value);
    formatar();
    dvTotal.value = "";
});