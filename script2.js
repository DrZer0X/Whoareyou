var bunny

let clicked_divs = 0;
function on_click(clicked_id){
bunny = document.getElementById(clicked_id);
clicked_divs++;
bunny.style.display= "none";
if (clicked_divs === 1) {
  document.querySelector("#p1").style.display= "block";
   setTimeout(() => { document.querySelector("#p1").style.opacity= "1";
    }, 100);
}
if (clicked_divs === 2) {
  document.querySelector("#p2").style.display= "block";
   setTimeout(() => { document.querySelector("#p2").style.opacity= "1";
    }, 100);
}
if (clicked_divs === 3) {
  document.querySelector("#p3").style.display= "block";
  setTimeout(() => { document.querySelector("#p3").style.opacity= "1";
  }, 100);  
}
if (clicked_divs === 4) {
  document.querySelector("#p4").style.display= "block";
   setTimeout(() => { document.querySelector("#p4").style.opacity= "1";
    }, 100);
}
if (clicked_divs === 5) {
  document.querySelector("#p5").style.display= "block";
   setTimeout(() => { document.querySelector("#p5").style.opacity= "1";
    }, 100);
}
if (clicked_divs === 6) {
  document.querySelector("#p6").style.display= "block";

   setTimeout(() => { document.querySelector("#p6").style.opacity= "1";  
  document.querySelector(".pag2").style.backgroundImage= "url(souce/Bg2.png)";
  document.querySelector('#div7').style.display= "block";    
  document.querySelector('#div8').style.display= "block";     
  document.querySelector('#div9').style.display= "block";      
  }, 100);
}
}

function on_click2(clicked_id){
if(document.getElementById(clicked_id) === document.getElementById('div8')){
  window.alert('Miguel: Uma semana de sofrimento, e você ainda reclama da dificuldade? você não viu nada...');
}
  if(document.getElementById(clicked_id) === document.getElementById('div7')){
    window.alert('Shaco: Agora você me vê, e agora não vê mais!');
    document.getElementById('div7').style.opacity= '0';
    setTimeout(() => {
    document.getElementById('div7').style.display= 'none';
   }, 700);
  }
    if(document.getElementById(clicked_id) === document.getElementById('div9')){
      window.alert('Vini: Caralho cleiton... ta mó escuro aqui...');
    }
}