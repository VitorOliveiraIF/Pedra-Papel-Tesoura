const btn_pedra = document.querySelector('.btn_pedra');
const btn_papel = document.querySelector('.btn_papel');
const btn_tesoura = document.querySelector('.btn_tesoura');

const resultado_emp = document.querySelector('.rosto_normal');
const resultado_der = document.querySelector('.rosto_triste');
const resultado_vit = document.querySelector('.rosto_feliz');


var escolha = 0;
var escolha_cpu = 0;
var resultado = 0;
var resBot = 0;

btn_pedra.addEventListener('click', async () => {
    escolha = 1;
    console.log("a escolha foi pedra!");
    escolha_cpu = escolha_CPU();
    console.log("Escolha da CPU:", escolha_cpu); // Adicionado log de depuração
    resBot = duelo(escolha, escolha_cpu);
    mostrarImagemResultado(resBot);
});

btn_papel.addEventListener('click', async () => {
    escolha = 2;
    console.log("a escolha foi papel!");
    escolha_cpu = escolha_CPU();
    console.log("Escolha da CPU:", escolha_cpu); // Adicionado log de depuração
    resBot = duelo(escolha, escolha_cpu);
    mostrarImagemResultado(resBot);
});


btn_tesoura.addEventListener('click', async () => {
    escolha = 3;
    console.log("a escolha foi tesoura!");
    escolha_cpu = escolha_CPU();
    resBot = duelo(escolha, escolha_cpu)
    mostrarImagemResultado(resBot)
});

function escolha_CPU(){
    escolha_cpu = Math.floor(Math.random() * 3) + 1;
    if(escolha_cpu == 1){
    console.log("A escolha da cpu foi: Pedra");
    }
    if(escolha_cpu == 2){
    console.log("A escolha da cpu foi: Papel");
    }
    if(escolha_cpu == 3){
    console.log("A escolha da cpu foi: Tesoura");
    }
    return escolha_cpu
}

function duelo(escolha, escolha_cpu){

    if (escolha == 1) {
        if (escolha_cpu == 1) {
            console.log("Pedra com Pedra: Empate");
            resultado = 1;
        } else if (escolha_cpu == 2) {
            console.log("Pedra com Papel: Derrota");
            resultado = 2;
        } else {
            console.log("Pedra com Tesoura: Vitória");
            resultado = 3;
        }
    } else if (escolha == 2) {
        if (escolha_cpu == 1) {
            console.log("Papel com Pedra: Vitória");
            resultado = 3;
        } else if (escolha_cpu == 2) {
            console.log("Papel com Papel: Empate");
            resultado = 1;
        } else {
            console.log("Papel com Tesoura: Derrota");
            resultado = 2;
        }
    } else if (escolha == 3) {
        if (escolha_cpu == 1) {
            console.log("Tesoura com Pedra: Derrota");
            resultado = 2;
        } else if (escolha_cpu == 2) {
            console.log("Tesoura com Papel: Vitória");
            resultado = 3;
        } else {
            console.log("Tesoura com Tesoura: Empate");
            resultado = 1;
        }

  
    }

          return resultado;
    
}

function mostrarImagemResultado(resultado) {
    if (resultado === 1) {
        resultado_emp.style.display = "block";
        resultado_der.style.display = "none";
        resultado_vit.style.display = "none";
    } else if (resultado === 2) {
        resultado_emp.style.display = "none";
        resultado_der.style.display = "block";
        resultado_vit.style.display = "none";
    } else if (resultado === 3) {
        resultado_emp.style.display = "none";
        resultado_der.style.display = "none";
        resultado_vit.style.display = "block";
    }
}
