    function restartAudio() {
        var audio = document.getElementById('audio');
        audio.currentTime = 0;
        audio.play();
    }
    const checkbox = document.getElementById('toggle-checkbox');
    const title = document.getElementById('title');
    const signInLabel = document.getElementById('signInLabel');
    const signUpLabel = document.getElementById('signUpLabel');

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            title.textContent = "Create an Account";
            signInLabel.classList.remove('active');
            signUpLabel.classList.add('active');
        } else {
            title.textContent = "Welcome Back";
            signUpLabel.classList.remove('active');
            signInLabel.classList.add('active');
        }
    });