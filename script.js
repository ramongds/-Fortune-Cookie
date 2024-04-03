const luckList = [
    "A vida é uma viagem, não um destino final.",
    "Faça o que você pode, com o que você tem, onde você está.",
    "O maior prazer na vida é fazer o que as pessoas dizem que você não pode fazer.",
    "Você nunca é velho demais para definir outra meta ou sonhar um novo sonho.",
    "Acredite que você pode e você está meio caminho andado.",
    "Grandes coisas nunca vêm de zonas de conforto.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "A vida é curta. Sorria enquanto você ainda tem dentes.",
    "O que você pensa, você se torna.",
    "Não espere, o tempo nunca será o certo.",
    "Seja a mudança que você deseja ver no mundo.",
    "O sucesso é a chave para a felicidade.",
    "Quando a vida lhe der limões, faça uma limonada.",
    "A sorte favorece a mente preparada.",
    "A vida é 10% do que acontece com você e 90% como você reage a isso.",
    "Quanto mais você se preocupar com o que os outros pensam, menos tempo você terá para alcançar seus objetivos.",
    "Grandes mentes discutem ideias; mentes médias discutem eventos; mentes pequenas discutem pessoas.",
    "A única maneira de fazer um grande trabalho é amar o que você faz.",
    "A persistência é o caminho do êxito.",
    "Seja a mudança que você deseja ver no mundo.",
    "Você nunca sabe que resultados virão da sua ação. Mas se você não fizer nada, não existirão resultados.",
    "Se você quer ser feliz, seja.",
    "O sucesso não é o final, o fracasso não é fatal: é a coragem de continuar que conta.",
    "A vida é o que acontece quando você está ocupado fazendo outros planos.",
    "Quanto maior o obstáculo, maior a glória em superá-lo.",
    "Quando você se sentir como desistir, lembre-se por que você começou.",
    "Acredite em você mesmo e tudo será possível.",
    "Não tenha medo de desistir do bom para ir atrás do ótimo.",
    "O fracasso é a oportunidade de começar de novo, mas desta vez de forma mais inteligente.",
    "Não é sobre quanto tempo você tem, mas como você usa isso."
];

let randomic = Math.round(Math.random() * 29);
const luck = document.querySelector("#luck")
let luckRole = luck.querySelector("h2")
let screen1 = document.querySelector(".screen1")
let screen2 = document.querySelector(".screen2")

const buttonCookie = document.querySelector("#cookie")
buttonCookie.addEventListener("click", openCookie)

const buttonAnotheCookie = document.querySelector("#anotherCookie")
buttonAnotheCookie.addEventListener("click", anotheCookie)

function openCookie(){
    toggleScreen()
    luckRole.innerHTML =`${luckList[randomic]}`
}


function anotheCookie(){
    toggleScreen()
}


function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
    randomic = Math.round(Math.random() * 29);
}

