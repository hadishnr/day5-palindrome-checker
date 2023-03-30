const input = document.querySelector('.input-text');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

const palindrome = () => {
  const str = input.value.toLowerCase();

  const reversedStr = str.split('').reverse().join('');

  if (reversedStr === str) {
    result.innerHTML = `${str.toUpperCase()} is a palindrome`;
  } else {
    result.innerHTML = `${str.toUpperCase()}Not a palindrome`;
  }
};

btn.addEventListener('click', palindrome);
