var id;
var layer_1 = document.getElementById('layer_1')
var layer_2 = document.getElementById('layer_2')
var layer_3 = document.getElementById('layer_3')
var title = document.getElementById('title');

var selector = document.getElementById('selector');
var elements = document.getElementById('items').querySelectorAll('div');
var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');

for(let i = 0; i < elements.length; i++){
  elements[i].addEventListener('click', function(){
    if(i == 0){
      selector.style.marginLeft = "0";
      c4.style.visibility = 'visible';
      c4.style.opacity = 1;
      
      c5.style.visibility = 'hidden';
      c5.style.opacity = 0;
      
      c6.style.visibility = 'hidden';
      c6.style.opacity = 0;
    } 
    if(i == 1){
      selector.style.marginLeft = "calc(100% / 3)";
      c5.style.visibility = 'visible';
      c5.style.opacity = 1;
      
      c4.style.visibility = 'hidden';
      c4.style.opacity = 0;
      
      c6.style.visibility = 'hidden';
      c6.style.opacity = 0;
    }
    if(i == 2){
      selector.style.marginLeft = "calc(100% - calc(100% / 3))";
      c6.style.visibility = 'visible';
      c6.style.opacity = 1;
      
      c4.style.visibility = 'hidden';
      c4.style.opacity = 0;
      
      c5.style.visibility = 'hidden';
      c5.style.opacity = 0;
    }
    
  })
}

var audio = document.getElementById('audio');

function playAudio(){
  audio.play();
}

function stopAudio(){
  audio.pause()
  audio.currentTime = 0
}

window.addEventListener('scroll', () => {
  let value = window.scrollY;

  layer_1.style.top = value * 0.2 + 'px';
  layer_2.style.top = value * 0.3 + 'px';
  layer_3.style.top = value * 0.7 + 'px';
  if(value < 1000){
    title.style.top = value * 1.1 + 210 + 'px';
  }else{
    title.style.top = 0 + 'px';
  }
})



