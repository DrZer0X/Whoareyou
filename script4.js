let hiddenElementsCount = 0;
const audio1 = new Audio('souce/audio/matryoshka1.mp3');  // Replace with your audio file path
const audio3 = new Audio('souce/audio/matryoshka2.mp3');  // Replace with your audio file path
const audio5 = new Audio('souce/audio/matryoshka3.mp3');  // Replace with your audio file path

function handleClick(elementId) {
  const targetElement = document.getElementById(elementId);
  hiddenElementsCount++;
  
  targetElement.style.opacity= 0;
        setTimeout(() => {
            targetElement.style.display = "none";   
        }, 100);

  if (hiddenElementsCount === 1) {
    document.getElementById('dtruth').style.backgroundImage = "url('souce/mirror/mirror2.png')";
    audio1.play(); // Play audio when count is 1
    setTimeout(() => {
        document.getElementById('shard3').style.display= 'block'
        setTimeout(() => {document.getElementById('shard3').style.opacity= '1';}, 100);
      }, 8500);
  }
  
  if (hiddenElementsCount === 2) {
    document.getElementById('dtruth').style.backgroundImage = "url('souce/mirror/mirror4.png')";
    audio3.play(); // Play audio when count is 3
    setTimeout(() => {
        document.getElementById('shard5').style.display= 'block'
        setTimeout(() => {document.getElementById('shard5').style.opacity= '1';}, 100);
      }, 12000);
  }
  
  if (hiddenElementsCount === 3) {
    document.getElementById('dtruth').style.backgroundImage = "url('souce/mirror/mirror6.png')";
    
    setTimeout(() => {
        document.getElementById('dtruth').style.transition = 'background-image 5s ease-in-out';
      document.getElementById('dtruth').style.backgroundImage = "url('souce/mirror/mirror7.png')";
    }, 3500);
    audio5.play(); // Play audio when count is 5
  }
}