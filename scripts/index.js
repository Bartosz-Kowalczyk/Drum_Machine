window.addEventListener('keydown', function(event) {
    const audio = document.querySelector(`audio[data-key='${event.code}']`);
    const key = document.querySelector(`.drum_pad[data-key='${event.code}']`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('active')
});


function play () {
    const key = this.dataset.key;
    const audio = document.querySelector(`audio[data-key='${key}']`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    this.classList.add('active');
};


function class_remove(event) {
    if(event.propertyName !== 'transform') return;
    this.classList.remove('active');
}

const keys = document.querySelectorAll('.drum_pad');
keys.forEach(key => key.addEventListener('transitionend', class_remove));
keys.forEach(key => key.addEventListener('click', play));