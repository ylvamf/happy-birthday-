function showLove() {
    document.getElementById('message2').style.display = 'block';
    document.getElementById('gif').style.display = 'block';
    document.getElementById('audio').style.display = 'block';

    for (let i = 0; i < 50; i++) {
        let heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }
}