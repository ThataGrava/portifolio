function animacaoAparecerDescricao(classe) {
    var descricao = document.querySelector(`.${classe.className} .descricao`)
    descricao.style.animation = "animacaoAparecerDescricao 3s forwards";
    console.log(descricao)
}

function animacaoDesaparecerDescricao(classe) {
    var descricao = document.querySelector(`.${classe.className} .descricao`)
    descricao.style.animation = "animacaoDesaparecerDescricao 3s forwards";
    
}