const electron = require('electron')
const ipcRenderer = electron.ipcRenderer

ipcRenderer.on('message', (event, msg) => {
  showMessage(msg)
})

function showMessage (message) {
  const alertContainer = document.querySelector('.alert-info-message')
  alertContainer.classList.remove('fadeOut')
  alertContainer.classList.add('fadeIn')
  alertContainer.innerHTML = message

  setTimeout(() => {
    alertContainer.classList.remove('fadeIn')
    alertContainer.classList.add('fadeOut')
  }, 3000)
}
