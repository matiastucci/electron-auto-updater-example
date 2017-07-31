const electron = require('electron')
const ipcRenderer = electron.ipcRenderer

let lastMsgId = 0

window.quitAndInstall = function () {
  electron.remote.autoUpdater.quitAndInstall()
}

ipcRenderer.on('console', (event, consoleMsg) => {
  console.log(consoleMsg)
})

ipcRenderer.once('update-downloaded', () => {
  const msgTemplate = '<p style="margin: 0;">🤘 Update downloaded - <a onclick="quitAndInstall()">Restart</a></p>'
  showMessage('', msgTemplate, false)
})

ipcRenderer.on('message', (event, msg) => {
  showMessage(msg)
})

function showMessage(message, innerHTML = '', hide = true) {
  const messagesContainer = document.querySelector('.messages-container')
  const msgId = lastMsgId++ + 1
  const msgTemplate = `<div id="${msgId}" class="alert alert-info alert-info-message animated fadeIn">${innerHTML || message}</div>`
  const test = messagesContainer.insertAdjacentHTML('afterbegin', msgTemplate)
  if (hide) {
    setTimeout(() => {
      const msgEl = document.getElementById(msgId)
      msgEl.classList.remove('fadeIn')
      msgEl.classList.add('fadeOut')
    }, 4000)
  }
}
