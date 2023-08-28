function playSound(e) {

    const audio = document.querySelector(`audio[data-key="${e.code}"]`)
    const key = document.querySelector(`.key[data-key="${e.code}"]`)

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing')
}

function removeEffect(e) {
    const key = document.querySelector(`.key[data-key="${e.code}"]`)
    if (!key) return;
    key.classList.remove('playing')
}

window.addEventListener('keydown', playSound)
window.addEventListener('keyup', removeEffect)