(function () {
    let screen = document.querySelector('.screen')
    let buttons = document.querySelectorAll('.btn')
    let clear = document.querySelector('.btn-clear')
    let equal = document.querySelector('.button-equal')
    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener('click', function (e) {
        if (screen.value == "") {
            screen.value = "please Enter a value";
        } else {
            screen.value = eval(screen.value);
        }
    })
    clear.addEventListener('click', function (e) {
        screen.value = "";
    })

})();
