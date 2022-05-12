let weekDay = "terça-feira"
if (weekDay == "segunda-feira" || weekDay == "terça-feira" || weekDay == "quarta-feira" || weekDay == "quinta-feira" || weekDay == "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
}
else if (weekDay == "sábado" || weekDay == "domingo") {
    console.log("FINALMENTE, descanso merecido UwU")
}

let situacaoCandidato = "lista"
switch(situacaoCandidato) {
    case "aprovado":
        console.log("Parabéns, você foi aprovada(o)!");
        break;
    case "lista":
        console.log("Você está na nossa lista de espera");
        break;
    case "reprovado":
        console.log("Você foi reprovada(o)");
        break;
    default:
        console.log("não se aplica");
}