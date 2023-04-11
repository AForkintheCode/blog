const loginFormHandler = async (event) => {
    event.preventDefault();

const edit = document.querySelector('#edit').value.trim();
const del = document.querySelector('#delete').value.trim();

}

document
  .querySelector('.login-form')
  .addEventListener('edit', loginFormHandler);

document
.querySelector('.login-form')
.addEventListener('delete', loginFormHandler);