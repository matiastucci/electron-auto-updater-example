const electron = require('electron')
const os = require('os')
const autoUpdater = electron.autoUpdater
const appVersion = require('../../package.json').version

let updateFeed = ''
let initialized = false
const platform = `${os.platform()}_${os.arch()}`
const nutsURL = 'https://electron-autoupdater-starter-server.now.sh'

if (os.platform() === 'darwin') {
  updateFeed = `${nutsURL}/update/${platform}/${appVersion}`
} else if (os.platform() === 'win32') {
  updateFeed = `${nutsURL}/update/win32/${appVersion}`
}

function init(mainWindow) {
  mainWindow.webContents.send('console', `App version: ${appVersion}`)

  if (initialized || !updateFeed || process.env.NODE_ENV === 'development') { return }

  initialized = true

  autoUpdater.setFeedURL(updateFeed)

  autoUpdater.on('error', (ev, err) => {
    mainWindow.webContents.send('message', err)
  })

  autoUpdater.once('checking-for-update', (ev, err) => {
    mainWindow.webContents.send('message', '🔎 Checking for updates')
  })

  autoUpdater.once('update-available', (ev, err) => {
    mainWindow.webContents.send('message', '🎉 Update available')
  })

  autoUpdater.once('update-not-available', (ev, err) => {
    mainWindow.webContents.send('message', '👎 Update not available')
  })

  autoUpdater.once('update-downloaded', (ev, err) => {
    mainWindow.webContents.send('message', '🤘 Update downloaded')
  })

  autoUpdater.checkForUpdates()
}

module.exports = {
  init
}
