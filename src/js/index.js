// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const formElement = document.getElementById('form');
const errorElement = document.querySelectorAll('.error');
const inputsElement = document.querySelectorAll('input[type=text]');

const printError = index => {
  errorElement[index - 1].textContent = 'VACIO';
};

const hideError = index => {
  errorElement[index].textContent = '';
};

const validateForm = () => {
  inputsElement.forEach((input, index) => {
    if (input.value === '') {
      index > 2 ? printError(index - 1) : printError(index);
    } else hideError(index);
  });
};

console.log(validateForm);

formElement.addEventListener('submit', event => {
  event.preventDefault();
  validateForm();
});
