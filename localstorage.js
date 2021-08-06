const userFullName = document.getElementById('names');
const userEmail = document.getElementById('email-address');
const userMessage = document.getElementById('subject');

function setLocal () {
  const localName = localStorage.getItem('names');
  const localemail = localStorage.getItem('email-address');
  const localText = localStorage.getItem('subject');
  document.getElementById('names').value = localName;
  document.getElementById('email-address').value = localemail;
  document.getElementById('subject').value = localText;
}

function populateForm () {
  localStorage.setItem('name', document.getElementById('names').value);
  localStorage.setItem('email-address', document.getElementById('email-address').value);
  localStorage.setItem('subject', document.getElementById('subject').value);
  setLocal();
}

if (localStorage.getItem('names')) {
  populateForm();
} else {
 setLocal();
}

userFullName.onchange = populateForm;
userEmail.onchange = populateForm;
userMessage.onchange = populateForm;