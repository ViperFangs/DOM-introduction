 let ballon = document.getElementById('ballon');
let para = document.querySelector('p');

function currentBallonSize(){
    let currentSize = window.getComputedStyle(ballon, null).getPropertyValue('font-size');
    return parseFloat(currentSize);
  }
  
  function ballonFunction(event){
    if(currentBallonSize() >= 56){
      ballon.textContent= '💥';
    para.textContent = 'You have Popped the ballon :(';
      window.removeEventListener('input');
    }
  
    if(event.keyCode == 38){
      event.preventDefault();
      let fontSize = currentBallonSize(); 
      ballon.style.fontSize = (fontSize + 10) + 'px';
    }
  
    if(event.keyCode == 40){
      event.preventDefault();
      let fontSize = currentBallonSize(); 
      ballon.style.fontSize = (fontSize - 10) + 'px';
    }
  }
  
  window.addEventListener('keydown', ballonFunction);