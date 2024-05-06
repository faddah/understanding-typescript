var paragraph = document.querySelector('p');
var userInputElement = document.getElementById('user-input');
var InputFieldFunc = function () {
    if (userInputElement)
        userInputElement.value = "Hi there!";
    userInputElement.addEventListener('keyup', function (event) {
        userInputElement.value ? paragraph.textContent = userInputElement.value : paragraph.textContent = "";
    });
};
export default InputFieldFunc;
//# sourceMappingURL=inputField.js.map