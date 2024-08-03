import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('.input');
const button = document.querySelector('.button');
const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');
const loader = document.querySelector('.loader');

// form.addEventListener('submit', checkFormIsEmpty);

// function checkFormIsEmpty(event) {
//   event.preventDefault();

//   const search = input.value.trim();

//   if (search === '' || search.length < 3) {
//     iziToast.warning({
//       title: '❌',
//       message: 'Будь ласка, введіть відповідний пошуковий запит!',
//       messageColor: 'white',
//       backgroundColor: 'red',
//       position: 'topRight',
//     });
//     return;
//   }
// }

form.addEventListener('submit', event => {
  event.preventDefault();

  const search = input.value.trim();

  if (search === '' || search.length < 3) {
    iziToast.show({
      title: '❌',
      message: 'Будь ласка, введіть відповідний пошуковий запит!',
      messageColor: 'white',
      backgroundColor: 'red',
      position: 'topRight',
    });
  }
});
