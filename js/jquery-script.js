//efeito de esconder formulário de cadastro

$(document).ready(function(){

    $("#botao-cadastrar").click(function(){

        $("#form-cadastrar").slideToggle("slow")
        $("#section-login").hide("slow")
        $("botao-cadastrar").hide();


    });

});