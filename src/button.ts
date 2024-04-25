const buttons: NodeListOf<Element> = document.querySelectorAll('.aButton');

buttons.forEach(button => {
	button.addEventListener('click', () => {
		console.log('We clicked a Button!!');
	});
});