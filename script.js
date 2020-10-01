var controler;

function play() {
    controler = setInterval(timer, 1000);
}

function timer() {
    var hours = eval(document.getElementById("hours").value);
    var minuts = eval(document.getElementById("minuts").value);
    var seconds = eval(document.getElementById("seconds").value);

    if (minuts == 60) {
        document.getElementById('hours').value = hours + 1;
        document.getElementById("minuts").value = 00;
    }

    if (seconds == 60) {
        document.getElementById("minuts").value = minuts + 1;
        document.getElementById("seconds").value = 00;
    }

    var seconds = eval(document.getElementById('seconds').value);
    document.getElementById('seconds').value = seconds + 1;

}

function pause() {
    clearInterval(controler);
}

function stop() {
    clearInterval(controler);
    document.getElementById("hours").value = 0;
    document.getElementById("minuts").value = 0;
    document.getElementById("seconds").value = 0;

}