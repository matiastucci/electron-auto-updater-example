const electron = require('electron')
const ipcRenderer = electron.ipcRenderer

let lastMsgId = 0

window.quitAndInstall = function () {
  electron.remote.autoUpdater.quitAndInstall()
}

ipcRenderer.on('console', (event, consoleMsg) => {
  console.log(consoleMsg)
})

ipcRenderer.on('message', (event, data) => {
  showMessage(data.msg, data.hide, data.replaceAll)
})

function showMessage(message, hide = true, replaceAll = false) {
  const messagesContainer = document.querySelector('.messages-container')
  const msgId = lastMsgId++ + 1
  const msgTemplate = `<div id="${msgId}" class="alert alert-info alert-info-message animated fadeIn">${message}</div>`

  if (replaceAll) {
    messagesContainer.innerHTML = msgTemplate
  } else {
    messagesContainer.insertAdjacentHTML('afterbegin', msgTemplate)
  }

  if (hide) {
    setTimeout(() => {
      const msgEl = document.getElementById(msgId)
      msgEl.classList.remove('fadeIn')
      msgEl.classList.add('fadeOut')
    }, 4000)
  }
}
