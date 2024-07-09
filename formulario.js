function enviarInformacoes() {
    let nomeUser = document.getElementById("nomeUser").value
    let cpfUser = document.getElementById("cpf").value
    let emailUser = document.getElementById("email").value
    let passwordUser = document.getElementById("password").value

    let generoUsuario = document.querySelector("input[name='genero']:checked").value


    alert("Seu nome é: " + nomeUser +  
         "\n\nSeu CPF é: "+ cpfUser + 
         "\n\nSeu email é: "+ emailUser + 
         "\n\nSua senha é: "+ passwordUser + 
         "\n\nE você escolheu a opção de gênero: "+ generoUsuario + 
         "\n\nLogin concluido! ;D")

         window.location.href="segundaPagina.html"
}
