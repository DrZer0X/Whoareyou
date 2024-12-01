var locker = document.querySelector('.locker');



if (locker.id === "01"){
   var chave = 'prisioneiro';
}
if (locker.id === "02"){
  var  chave= 'presa';
}
if (locker.id === "03"){
  var  chave= 'a tormenta';
}


  
locker.addEventListener('keyup', (e)=> {
    if (e.key === "Enter") { {
        if (locker.value.toLowerCase() === chave) {
            locker.style.borderColor = 'lime'
            locker.style.Color = 'lime'
            locker.style.color = 'lime'
           entrar()
           
        }
        if(locker.value.toLowerCase() === 'queda inevitavel em portas vazias') {
          const link = document.createElement("a");
        link.href = "souce/Eu-estou-aqui.mp3"; // Path to your MP3 file
        link.target = "_blank"; // Open in a new tab
        link.click(); // Simulate a click to open the link
        
          
        }
        else {
            locker.classList.add ("shake");
            setTimeout(() => {
                locker.classList.remove ("shake");
              }, 700); 
            
            //window.alert('Acess Denied')
        }   
        function entrar(){
            if (chave === 'prisioneiro') {
                document.location.href = 'bunny.html';
            } 
            if(chave === 'presa'){
                document.location.href = 'destiny.html';
            }
            if(chave === 'a tormenta'){
              document.location.href = 'darkTruth.html';
          }
        }
    }
}  
});

var bunny

let clicked_divs = 0;
function on_click(clicked_id){
bunny = document.getElementById(clicked_id);
clicked_divs++;
bunny.style.display= "none";
if (clicked_divs === 1) {
  document.querySelector("#p1").style.display= "block";
}
if (clicked_divs === 2) {
  document.querySelector("#p2").style.display= "block";
}
if (clicked_divs === 3) {
  document.querySelector("#p3").style.display= "block";
}
if (clicked_divs === 4) {
  document.querySelector("#p4").style.display= "block";
}
if (clicked_divs === 5) {
  document.querySelector("#p5").style.display= "block";
}
if (clicked_divs === 6) {
  document.querySelector("#p6").style.display= "block";
  document.querySelector(".pag2").style.backgroundImage= "url(souce/Bg2.png)";
  document.querySelector('#div7').style.display= "block";    
  document.querySelector('#div8').style.display= "block";     
  document.querySelector('#div9').style.display= "block";      
          
}
}

function on_click2(clicked_id){
if(document.getElementById(clicked_id) === document.getElementById('div8')){
  window.alert('Miguel: Uma semana de sofrimento, e você ainda reclama da dificuldade? você não viu nada...');
}
  if(document.getElementById(clicked_id) === document.getElementById('div7')){
    window.alert('Shaco: Agora você me vê, e agora não vê mais!');
    document.getElementById('div7').style.display= 'none';
  }
    if(document.getElementById(clicked_id) === document.getElementById('div9')){
      window.alert('Vini: Caralho cleiton... ta mó escuro aqui...');
  }
}
    const luaDiv = document.getElementById("lua");
    const torreDiv = document.getElementById("torre");
    const forcaDiv = document.getElementById("forca");
    const messageParagraph = document.getElementById("message");

    luaDiv.addEventListener("mouseover", () => {
      messageParagraph.textContent = "A luz da lua é traiçoeira, um véu prateado que esconde mais do que revela. O Guardião, eterno vigia de uma porta sem nome, sente o frio dessa luz em sua pele. A porta o chama, sussurra segredos que ele não pode entender. Ele guarda algo que nunca viu, protege um segredo que nunca ouviu. A cada noite, ele questiona se a porta realmente existe ou se é apenas uma ilusão projetada pela Casa. Ele teme que, ao abrir a porta, ela seja um espelho que revela seu verdadeiro rosto: vazio, oco, perdido. Mas o maior medo do Guardião não é abrir a porta, mas descobrir que sempre esteve aberta e que ele, na verdade, não guardava nada além de si mesmo.";
    });
    torreDiv.addEventListener("mouseover", () => {
      messageParagraph.textContent = "No horizonte, ergue-se uma torre sem começo, suas bases flutuando como se sustentadas por um sonho. Ela desafia os céus, tocando as estrelas como uma mão que anseia alcançar algo inalcançável. Mas seu criador, o Sonhador, não viu os sinais na tempestade que se aproximava. O relâmpago rompe os céus, uma linha de luz que divide o impossível do inevitável. O Sonhador cai, não pela força do raio, mas pelo peso de sua própria fé nas alturas. No chão, onde as pedras se transformam em cinzas, ele descobre que a torre era sua alma, e o céu, seu erro fatal. Restam apenas os ecos de sua ambição e a queda eterna na escuridão que ele próprio construiu.";

    });
    forcaDiv.addEventListener("mouseover", () => {
      messageParagraph.textContent = "Ele está suspenso, mas não pelo pescoço, e sim pelo peso das escolhas que se recusou a fazer. De um lado, o abismo; do outro, a promessa de algo mais, algo que ele nunca entendeu. O Enforcado observa os mundos que se desdobram ao seu redor, vendo tudo com clareza dolorosa e, ainda assim, incapaz de agir. Cada batida do relógio é uma sentença. Ele não morre por uma corda, mas pelo fio invisível do tempo que nunca para. A dúvida o prende, pois em seu coração, ele acredita que qualquer escolha levará à ruína. E assim, ele permanece, vivendo no espaço entre o possível e o real, enquanto o fim se aproxima como uma sombra que nunca desaparece.";
    });

    luaDiv.addEventListener("mouseout", () => {description()});
    torreDiv.addEventListener("mouseout", () => {description()});
    forcaDiv.addEventListener("mouseout", () => {description()});
    function description(){
      messageParagraph.textContent = "Aqui, as verdades não contadas sussurram como ventos entre as paredes da Casa. Cada carta revela o que é, o que foi, e o que ainda será. Mas cuidado: o futuro é um espelho quebrado, e as peças podem ferir.";
    }      
