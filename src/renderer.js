const electron = require('electron')
const ipcRenderer = electron.ipcRenderer

ipcRenderer.on('console', (event, consoleMsg) => {
  console.log(consoleMsg)
})

ipcRenderer.on('message', (event, msg) => {
  showMessage(msg)
})

function showMessage (message) {
  const messagesContainer = document.querySelector('.messages-container')
  const alertContainer = document.createElement('div')
  alertContainer.classList.add('alert', 'alert-info', 'alert-info-message', 'animated', 'fadeIn')
  alertContainer.innerHTML = message
  messagesContainer.insertBefore(alertContainer, messagesContainer.firstChild)

  setTimeout(() => {
    alertContainer.classList.remove('fadeIn')
    alertContainer.classList.add('fadeOut')
  }, 4000)
}
