//validation
export function validation() {
  const form1 = document.getElementById('form-1');
  const form2 = document.getElementById('form-2');

  const formAddError = (input) => {
    input.parentElement.classList.add('error');
    input.classList.add('error');
  };
  const formRemoveError = (input) => {
    input.parentElement.classList.remove('error');
    input.classList.remove('error');
  };

  const formValidate = (form) => {
    let error = 0;

    let formReq = form.querySelectorAll('.req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);
      if (input.value === '') {
        formAddError(input);
        error++;
      }
    }
    return error;
  };

  const formError = (error) => {
    if (error === 0) {
      alert('Форма отправлена');
    } else {
      alert('Заполните все поля');
    }
  };

  const formSend1 = (e) => {
    e.preventDefault();
    let error = formValidate(form1);
    formError(error);
  };

  const formSend2 = (e) => {
    e.preventDefault();
    let error = formValidate(form2);
    formError(error);
  };

  form1.addEventListener('submit', formSend1);
  form2.addEventListener('submit', formSend2);
}
