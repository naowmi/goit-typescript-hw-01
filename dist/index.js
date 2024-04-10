import { concatenation } from './concatenation';
const button = document.querySelector('button');
const input = document.querySelector('input');
console.log(button);
if (button && input) {
    button.addEventListener('click', () => {
        console.log(input);
        concatenation('hello!', input.value);
    });
}
//# sourceMappingURL=index.js.map