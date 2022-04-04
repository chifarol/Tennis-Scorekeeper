const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const declare = document.querySelector('#declare');
const max = document.querySelector('#max');
const addP1 = document.querySelector('#addP1');
const addP2 = document.querySelector('#addP2');
const reset = document.querySelector('#reset');
let curScoreP1 = 0;
let curScoreP2 = 0;
let maxValue = max.value;
max.addEventListener('change', function () {
    maxValue = max.value;
    p2.innerText = curScoreP2;
    p2.classList.remove('win', 'lose');
    p1.innerText = curScoreP1;
    p1.classList.remove('win', 'lose');
    declare.innerText = '';
}

)

addP1.addEventListener('click', function () {

    if (curScoreP2 != maxValue) {
        curScoreP1 += 1;
        if (curScoreP1 < maxValue) {
            p1.innerText = curScoreP1;
        }
        else if (curScoreP1 == maxValue) {
            p1.innerText = curScoreP1;
            declareFunc();
        }
    }
})


addP2.addEventListener('click', function () {

    if (curScoreP1 != maxValue) {
        curScoreP2 += 1;
        if (curScoreP2 < maxValue) {
            p2.innerText = curScoreP2;
        }
        else if (curScoreP2 == maxValue) {
            p2.innerText = curScoreP2;
            declareFunc();
        }
    }

});

function declareFunc() {
    if (curScoreP1 > curScoreP2) {
        declare.innerText = "P1 Wins";
        p1.classList.add('win');
        p2.classList.add('lose');

    }
    else if (curScoreP2 > curScoreP1) {
        declare.innerText = "P2 Wins"
        p2.classList.add('win');
        p1.classList.add('lose');
    }
}

reset.addEventListener('click', function () {
    curScoreP2 = 0;
    p2.innerText = curScoreP2;
    p2.classList.remove('win', 'lose');
    curScoreP1 = 0;
    p1.innerText = curScoreP1;
    p1.classList.remove('win', 'lose');
    declare.innerText = '';

})
