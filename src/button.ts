const buttons: NodeListOf<Element> = document.querySelectorAll('.aButton');

const buttonClick = (): void => {
	buttons.forEach(button => {
		button.addEventListener('click', () => {
			console.log('We clicked a Button!!');
		});
	});
};

export { buttonClick };

