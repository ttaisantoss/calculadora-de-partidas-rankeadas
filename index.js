let nivel = "";
let saldoVitorias = "";

function calcularRankeadas (vitorias, derrotas) {
    saldoVitorias = vitorias - derrotas;

    switch (true) {
        case (saldoVitorias >= 101):
            nivel = "Imortal";
            break
    
        case (saldoVitorias >= 91 && saldoVitorias <= 100):
            nivel = "Lendário";
            break
    
        case (saldoVitorias >= 81 && saldoVitorias <= 90):
            nivel = "Diamante";
            break
    
        case (saldoVitorias >= 51 && saldoVitorias <= 80):
            nivel = "Ouro";
            break
    
        case (saldoVitorias >= 21 && saldoVitorias <= 50):
            nivel = "Prata";
            break
    
        case (saldoVitorias >= 11 && saldoVitorias <= 20):
            nivel = "Bronze";
            break
    
        case (saldoVitorias < 10):
            nivel = "Ferro";
            break
    
        default:
            nivel = "Saldo de vitórias inválido.";
        }

    console.log(`O Herói tem saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`)
}

calcularRankeadas (30, 12);







