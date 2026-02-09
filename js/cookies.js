// инициализация модуля всплывашки с куками
const initCookiesPopup = () => {
  // находим нужные элементы кнопок и всплывашки с куками
  const rejectCookiesBtn = document.getElementById('cookies-reject')
  const acceptCookiesBtn = document.getElementById('cookies-accept')
  const cookiesBlock = document.querySelector('.cookies')
  const visibleClass = 'visible'

  // проверяем, что все элементы найдены
  if (!rejectCookiesBtn || !acceptCookiesBtn || !cookiesBlock) {
    console.warn('Не найдены элементы')
    return
  }

  // проверяем, не был ли уже сделан выбор
  const cookiesChoice = localStorage.getItem('cookiesChoice')

  //можно закомментить для теста
  if (cookiesChoice) {
    return // если выбор уже был сделан, не показываем попап
  }

  // функция закрытия всплывашки куков
  const closeCookiesPopup = () => {
    cookiesBlock.classList.remove(visibleClass)
  }

  const showCookiesPopup = () => {
    cookiesBlock.classList.add(visibleClass)
  }

  // отмена куков
  const reject = () => {
    // функционал при отмене кукисов

    localStorage.setItem('cookiesChoice', 'rejected')
    closeCookiesPopup()
  }

  // принятие куков
  const accept = () => {
    // функционал при принятии кукисов

    localStorage.setItem('cookiesChoice', 'accepted')
    closeCookiesPopup()
  }

  // навешиваем ивенты на кнопки с куками
  rejectCookiesBtn.addEventListener('click', reject)
  acceptCookiesBtn.addEventListener('click', accept)

  // показываем попап через 1 секунду после загрузки дома
  setTimeout(() => {
    showCookiesPopup()
  }, 1000)
}

document.addEventListener('DOMContentLoaded', initCookiesPopup)