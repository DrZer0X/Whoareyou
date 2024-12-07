const luaDiv = document.getElementById("lua");
const torreDiv = document.getElementById("torre");
const forcaDiv = document.getElementById("forca");
const juldgeDiv = document.getElementById("judge");
const messageParagraph = document.getElementById("message");
const clueParagraph = document.getElementById("clue");

luaDiv.addEventListener("mouseover", () => {
  messageParagraph.textContent = "A luz da lua é traiçoeira, um véu prateado que esconde mais do que revela. O Guardião, eterno vigia de uma porta sem nome, sente o frio dessa luz em sua pele. A porta o chama, sussurra segredos que ele não pode entender. Ele guarda algo que nunca viu, protege um segredo que nunca ouviu. A cada noite, ele questiona se a porta realmente existe ou se é apenas uma ilusão projetada pela Casa. Ele teme que, ao abrir a porta, ela seja um espelho que revela seu verdadeiro rosto: vazio, oco, perdido. Mas o maior medo do Guardião não é abrir a porta, mas descobrir que sempre esteve aberta e que ele, na verdade, não guardava nada além de si mesmo.";

  clueParagraph.textContent= "O que a porta esconde?"
});

torreDiv.addEventListener("mouseover", () => {
  messageParagraph.textContent = "No horizonte, ergue-se uma torre sem começo, suas bases flutuando como se sustentadas por um sonho. Ela desafia os céus, tocando as estrelas como uma mão que anseia alcançar algo inalcançável. Mas seu criador, o Sonhador, não viu os sinais na tempestade que se aproximava. O relâmpago rompe os céus, uma linha de luz que divide o impossível do inevitável. O Sonhador cai, não pela força do raio, mas pelo peso de sua própria fé nas alturas. No chão, onde as pedras se transformam em cinzas, ele descobre que a torre era sua alma, e o céu, seu erro fatal. Restam apenas os ecos de sua ambição e a queda eterna na escuridão que ele próprio construiu.";
  
  clueParagraph.textContent= "O que destruiu a torre?"
});
forcaDiv.addEventListener("mouseover", () => {
  messageParagraph.textContent = "Ele está suspenso, mas não pelo pescoço, e sim pelo peso das escolhas que se recusou a fazer. De um lado, o abismo; do outro, a promessa de algo mais, algo que ele nunca entendeu. O Enforcado observa os mundos que se desdobram ao seu redor, vendo tudo com clareza dolorosa e, ainda assim, incapaz de agir. Cada batida do relógio é uma sentença. Ele não morre por uma corda, mas pelo fio invisível do tempo que nunca para. A dúvida o prende, pois em seu coração, ele acredita que qualquer escolha levará à ruína. E assim, ele permanece, vivendo no espaço entre o possível e o real, enquanto o fim se aproxima como uma sombra que nunca desaparece.";

  clueParagraph.textContent= "O que resta entre as escolhas?"
});
juldgeDiv.addEventListener("mouseover", () => {
  messageParagraph.textContent = "A Casa observa, mas não com olhos; ela ouve, mas não com ouvidos. Seus corredores são veias, suas portas, cicatrizes que guardam histórias. Sob o Julgamento, cada passo ressoa como uma confissão. As vozes que ecoam não pertencem ao presente, mas ao passado e ao futuro, entrelaçadas como fios de uma tapeçaria incompleta. Aqueles que a desafiam são vistos, suas almas desnudadas pela luz de um olhar sem rosto. Mas o Julgamento não condena; ele simplesmente revela. Na luz, todos os pecados dançam, todas as escolhas queimam. Não há onde se esconder da Casa, pois ela não apenas guarda, mas também é guardada. Na escuridão de seus corredores, o Julgamento sussurra uma verdade inescapável: ninguém sai ileso de suas escolhas, e ninguém é esquecido."

  clueParagraph.textContent= "O que separa os caminhos?"
});
luaDiv.addEventListener("mouseout", () => {description()});
torreDiv.addEventListener("mouseout", () => {description()});
forcaDiv.addEventListener("mouseout", () => {description()});
juldgeDiv.addEventListener("mouseout", () => {description()});
function description(){
  messageParagraph.textContent = "Aqui, as verdades não contadas sussurram como ventos entre as paredes da Casa. Cada carta revela o que é, o que foi, e o que ainda será. Mas cuidado: o futuro é um espelho quebrado, e as peças podem ferir.";

  clueParagraph.textContent= ""
}