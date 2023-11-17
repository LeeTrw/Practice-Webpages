const keyActions = {
    'A': { action: 'clap', element: document.querySelector('.keyA') },
    'S': { action: 'hihat', element: document.querySelector('.keyS') },
    'D': { action: 'kick', element: document.querySelector('.keyD') },
    'F': { action: 'openhat', element: document.querySelector('.keyF') },
    'G': { action: 'boom', element: document.querySelector('.keyG') },
    'H': { action: 'ride', element: document.querySelector('.keyH') },
    'J': { action: 'snare', element: document.querySelector('.keyJ') },
    'K': { action: 'tom', element: document.querySelector('.keyK') },
    'L': { action: 'tink', element: document.querySelector('.keyL') },
  };
  
  function playAndSound(key) {
    const { action, element } = keyActions[key];
    if (element) {
      element.classList.add('playing');
      setTimeout(function() {
        element.classList.remove('playing');
      }, 100);
    }
    if (action) {
        let audio = new Audio('resources/sounds/' + action + '.wav');
        audio.play();
    }
  }
  
  document.addEventListener('keydown', function(event) {
    const key = event.key.toUpperCase(); // change all keys to uppercase
    playAndSound(key);
  });
  