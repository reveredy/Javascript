//DOM
//DOM é todo o html que fica dentro de uma página

function VerificarEntrada(){
    const nomeConvidado = document.getElementById("nomeConvidado").value;
    console.log("Nome do convidado: " + nomeConvidado);
    const convidadosCristian = ['Amanda', 'Tairini', 'Anna', 'Carlos', 'Zaida', 'Deia', 'Andrea'];

    if(convidadosCristian.includes(nomeConvidado)){
        document.getElementById('permissaoDeEntrada').innerText='Você pode entrar!';
    }else{
        document.getElementById('permissaoDeEntrada').innerText="Você não pode entrar!"
    }
}