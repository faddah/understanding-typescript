const paragraph = document.querySelector('p');
const userInputElement = document.getElementById('user-input');
const InputFieldFunc = () => {
    if (userInputElement)
        userInputElement.value = "Hi there!";
    userInputElement.addEventListener('keyup', (event) => {
        userInputElement.value ? paragraph.textContent = userInputElement.value : paragraph.textContent = "";
    });
};
export default InputFieldFunc;
//# sourceMappingURL=inputField.js.map