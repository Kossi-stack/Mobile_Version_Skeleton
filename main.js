const mobileMenu = document.getElementById('menu');
const closeIcon = document.getElementById('close-menu');
const openIcon = document.getElementById('fontawesome-icon');

function menuClose() {
  mobileMenu.style.left = '-110%';
}

function menuOpen() {
  mobileMenu.style.left = '0';
}

document.querySelectorAll('.menuList').forEach((item) => {
  item.addEventListener('click', () => {
    mobileMenu.style.left = '-110%';
  });
});

closeIcon.addEventListener('click', menuClose);
openIcon.addEventListener('click', menuOpen);


const formValidation = document.querySelector('#form');
const emailControl = document.querySelector('#email-address');

const alertMessage = document.createElement('p');
alertMessage.classList.add('error-Message');
alertMessage.textContent = 'Your email should only contain lowercase letters.';

const errorEmail = document.querySelector('.email-msg');
errorEmail.appendChild(alertMessage);

function validationFunct (e) {
  if (emailControl.value !== emailControl.value.toLowerCase()) {
    errorEmail.style.display = 'block';
    e.preventDefault();
  } else {
    errorEmail.style.display = 'none';
  }
}

formValidation.addEventListener('submit', validationFunct);
