
function launchConfetti() {
  for (let i = 0; i < 100; i++) {
      createConfetti();
  }
}

function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * window.innerWidth + 'px';
  confetti.style.top = Math.random() * window.innerHeight + 'px';
  confetti.style.backgroundColor = getRandomColor();
  if((Math.random()*2)%2==0)
    confetti.style.borderRadius('7px')
  document.body.appendChild(confetti);

  setTimeout(() => {
      confetti.remove();
  }, 2000);
}

function getRandomColor() {
  const colors = ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'];
  return colors[Math.floor(Math.random() * colors.length)];
}

chrome.runtime.onMessage.addListener(function(render,sender,sendResponse){
    if(render.message==="got accepted mate")
        {
          launchConfetti();
        }
})

