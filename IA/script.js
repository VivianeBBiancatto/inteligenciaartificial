const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você pretende cursar um curso de graduação?",
        alternativas: [
            {
                texto: "Sim",
                afirmaçao: "afirmacao"
            },
            {texto: "Não",
                afirmaçao: "afirmacao"

            }
           
         ]
    },
    {
        enunciado: "Gosta de estudar?",
        alternativas: 
        [

             {
                texto: "Sim",
                afirmaçao: "afirmacao"
            },
            {texto: "Não",
                afirmaçao: "afirmacao"

            }
        ]
    },
    {
        enunciado: "Pretende continuar aprendendo sobre programação?",
        alternativas: 
        [
            {
                texto: "Sim",
                afirmaçao: "afirmacao"
            },
            {texto: "Não",
                afirmaçao: "afirmacao"

            }
        ]
    },
    {
        enunciado: "Vai continuar morando em Pérola nos próximos ano?",
        alternativas: [
            {
                texto: "Sim",
                afirmaçao: "afirmacao"
            },
            {texto: "Não",
                afirmaçao: "afirmacao"

            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual>= perguntas.length){
        mostraResultado();
        return;

    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
        mostraAlternativas();    
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botãoAlternativas = document.createElement("button");
        botãoAlternativas.textContent = alternativa.texto;
        botãoAlternativas.addEventListener (click, ()=> respostaSelecionada (alternativa));
        caixaAlternativas.appendChild(botãoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada.afirmacoes;
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
            
}
 function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

 }
mostraPergunta();

