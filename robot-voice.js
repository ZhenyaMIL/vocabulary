let voices;
let voiceActingButton = document.querySelectorAll('.voice-acting');

if (speechSynthesis) {
  speechSynthesis.onvoiceschanged = function () {
    voices = speechSynthesis.getVoices();

    voiceActingButton.forEach(button => {
      button.addEventListener('click', function(event){
        let text = event.currentTarget.parentNode.querySelector('p.english').textContent;
        let svgIcon = event.currentTarget;
        let voice = getVoiceFromName("Google UK English Female");

        svgIcon.classList.add('active');

        setTimeout(() => {
          svgIcon.classList.remove('active');
        },1000)

        say(text, voice);
      })
    });


  };
}

function getVoiceFromName(name) {
  let foundVoice = null;

  voices.forEach(function (voice) {
    if (voice.name === name) {
      foundVoice = voice;
    }
  });

  return foundVoice;
}

function say(text, voice) {
  let speech = new SpeechSynthesisUtterance(text);
  speech.voice = voice;
  speechSynthesis.speak(speech);
}