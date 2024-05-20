const buttons = document.querySelectorAll('.aButton');
const buttonClick = () => {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('We clicked a Button!!');
        });
    });
};
export { buttonClick };
//# sourceMappingURL=button.js.map