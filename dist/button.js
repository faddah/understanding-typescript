var buttons = document.querySelectorAll('.aButton');
var buttonClick = function () {
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            console.log('We clicked a Button!!');
        });
    });
};
export { buttonClick };
//# sourceMappingURL=button.js.map