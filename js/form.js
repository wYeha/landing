// модуль формы
const initForm = () => {
  const form = document.getElementById('form-el')
  const formSubmitBtn = document.getElementById('form-submit-btn')
  const formAgreeCb = document.getElementById('form-agree-cb')
  const requiredInputs = form.querySelectorAll('input[required]')

  // функция для валидации формы
  const checkFormValidity = () => {
    let isFormValid = true

    // проверка всех обязательных полей
    requiredInputs.forEach(input => {
      if (!input.value.trim()) {
        isFormValid = false
      }
    })

    // проверка чекбокса согласия
    if (!formAgreeCb.checked) {
      isFormValid = false
    }

    formSubmitBtn.disabled = !isFormValid

    return isFormValid
  }

  // обработчики на все обязательные поля
  requiredInputs.forEach(input => {
    input.addEventListener('input', checkFormValidity)
    input.addEventListener('blur', checkFormValidity)
  })

  // обработчик на чекбокс согласия
  formAgreeCb.addEventListener('change', checkFormValidity)

  // установка начальной доступности кнопки сабмита формы
  checkFormValidity()
}

document.addEventListener('DOMContentLoaded', initForm)