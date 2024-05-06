const paragraph: HTMLParagraphElement | null = document.querySelector('p')!;
const userInputElement: HTMLInputElement | null = document.getElementById('user-input')! as HTMLInputElement;

const InputFieldFunc = () => {
	if (userInputElement) userInputElement.value = "Hi there!";
	userInputElement.addEventListener('keyup', (event: KeyboardEvent) => {
		userInputElement.value ? paragraph.textContent = userInputElement.value : paragraph.textContent = ""
	});
}

export default InputFieldFunc;



