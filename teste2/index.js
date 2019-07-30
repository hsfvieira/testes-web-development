let dados = [
    {nome: "Henrique", sobrenome: "Vieira"},
    {nome: "Fioreli", sobrenome: "Santos"} 
]

function carregar() {
    let html = ""
    for(i = 0; i < dados.length; i++) {
        html += carregarValoresExistentes(i, dados[i].nome, dados[i].sobrenome)
    }
    html += carregarLinhaEmBranco()
    document.getElementById("corpoTabela").innerHTML = html

    function carregarValoresExistentes(index, nome, sobrenome) {
        let html = ""
        html += `<tr id="${index}">`
        html += `<td><input type="text" value="${index}" disabled></td>`
        html += `<td><input type="text" value="${nome}"></td>`
        html += `<td><input type="text" value="${sobrenome}"></td>`
        html += `<td><button onClick="excluir(${index})">Excluir</button></td>`
        html += "</tr>"
        return html
    }

    function carregarLinhaEmBranco() {
        let html = ""
        html += `<tr id="${dados.length}">`
        html += `<td><input type="text" value="${dados.length}" disabled></td>` 
        html += `<td><input type="text" id="nome${dados.length}"></td>`
        html += `<td><input type="text" id="sobrenome${dados.length}"></td>`
        html += "</tr>"
        return html
    }

}

function adicionar() {
    dados.push({
        nome: capturarInformacao(`nome${dados.length}`),
        sobrenome: capturarInformacao(`sobrenome${dados.length}`)
    })
    carregar()

    function capturarInformacao(campo) {
        return document.getElementById(campo).value
    }
}

function excluir(index) {
    dados.splice(index, 1)
    carregar()
}

document.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        event.preventDefault()
        adicionar()
    }
})

carregar()