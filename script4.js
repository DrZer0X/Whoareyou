let hiddenElementsCount = 0;

function handleClick(elementId) {
  const targetElement = document.getElementById(elementId);
  hiddenElementsCount++;
  targetElement.style.display = "none";

  if (hiddenElementsCount === 1) {
    document.getElementById('dtruth').style.backgroundImage = "url('souce/mirror/mirror2.png')";
  }
  if (hiddenElementsCount === 2) {
    document.getElementById('dtruth').style.backgroundImage = "url('souce/mirror/mirror3.png')";
  }
  if (hiddenElementsCount === 3) {
    document.getElementById('dtruth').style.backgroundImage = "url('souce/mirror/mirror4.png')";
  }
  if (hiddenElementsCount === 4) {
    document.getElementById('dtruth').style.backgroundImage = "url('souce/mirror/mirror5.png')";
  }
  if (hiddenElementsCount === 5) {
    document.getElementById('dtruth').style.backgroundImage = "url('souce/mirror/mirror6.png')";
    setTimeout(() => {document.getElementById('dtruth').style.backgroundImage = "url('souce/mirror/mirror7.png')";} , 900);
  }
}