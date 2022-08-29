var botaoAdiciona = document.querySelector("#buscar-pacientes");

botaoAdiciona.addEventListener("click", function(){
    console.log("buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes1111")

    xhr.addEventListener("load", function(){

        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            console.log(xhr.responseText);
    
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente)
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });

    xhr.send();
});