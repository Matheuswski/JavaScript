//EXECUTAR MASCARAS
//difine o objeto e chama a função
function mascara(o,f){
    objeto=o
    funcao=f
    setTimeout("executaMascara()",1)
}

function executaMascara(){
    objeto.value=funcao(objeto.value)
}

function mesclarApenasLetras(texto) {
    return texto.replace(/[^a-zA-Z]/g, "");
  }

  function mesclarApenasLetras2(texto) {
    return texto.replace(/[^a-zA-ZÀ-ÿ]/g, "");
  }
  

//mascaras
//telefone
function Telefone(variavel){
    variavel=variavel.replace(/\D/,"")
    variavel=variavel.replace(/^(\d\d)(\d)/g,"($1) $2") // ADICIONA PARENTESES EM VOLTA DOS DOIS PRIMEIROS DIGITOS
    variavel=variavel.replace(/(\d{4})(\d)/,"$1-$2") // ADICIONA HIFEM ENTRE O QUARTO E QUINTO DIGITO
    return variavel
}

//CNPJ
function cnpjEmpre(variavel) {
    variavel = variavel.replace(/\D/g, ''); // Remove caracteres não numéricos
    variavel = variavel.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,"$1.$2.$3/$4-$5");
    return variavel
  }


//CEP
function cep(variavel){
    variavel=variavel.replace(/\D/,"")//remove caracteres não numericos
    variavel=variavel.replace(/(\d{2})(\d)/,"$1.$2") // ADICIONA PONTO ENTRE O TERCEIRO E O QUARTO
    variavel=variavel.replace(/(\d{3})(\d)/,"$1-$2") // ADICIONA PONTO ENTRE O SEXTO E O SETIMO
    return variavel
}


