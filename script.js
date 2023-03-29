function caul(){
    const peso = document.getElementById('peso').value;
    const altu = document.getElementById('altura').value;
    const imc = peso/(altu*altu);
    

    if(imc < 18.5){
        document.getElementById("resultado").textContent = `Seu iMC é: ${imc.toFixed(2)}  sua faixa é: Magro`;
    }
    if(imc >= 18.5 && imc <= 24.9){
        document.getElementById("resultado").textContent = `Seu iMC é: ${imc.toFixed(2)}  sua faixa é: Saudável`;  
    }
    if(imc >= 25 && imc <= 29.9){
        document.getElementById("resultado").textContent = `Seu iMC é: ${imc.toFixed(2)}  sua faixa é: Sobrepeso`;  
    }
    if(imc >= 30 && imc <= 34.9){
        document.getElementById("resultado").textContent = `Seu iMC é: ${imc.toFixed(2)}  sua faixa é: Obesidade grau I`;  
    }
    if(imc >= 35 && imc <= 39.9){
        document.getElementById("resultado").textContent = `Seu iMC é: ${imc.toFixed(2)}  sua faixa é: Obesidade grau II`;  
    }
    if(imc >= 40){
        document.getElementById("resultado").textContent = `Seu iMC é: ${imc.toFixed(2)}  sua faixa é: Obesidade grau III`;  
    }
}
