# Electron auto updater example

<p align="center">
  <img src="screen.png" width="348" alt="Logo"/>
</p>

**Windows** and **OS X** minimal Electron applications with auto updates implemented (based on the [electron-quick-start](https://github.com/electron/electron-quick-start)).

## Try it
The latest version of this example is `1.0.2`. So, you can download the [`1.0.1`](https://github.com/matiastucci/electron-auto-updater-example/releases/tag/1.0.1) one and see how the app finds the new version and downloads it 🎉

## Powered by
- **Building process:** [`electron-builder`](https://github.com/electron-userland/electron-builder) (if you're using OS X, you'll need to [sign the app](https://github.com/electron-userland/electron-builder/wiki/Code-Signing))
- **Auto updates server:** [`nuts`](https://github.com/GitbookIO/nuts)

## Use it

```bash
# Clone this repository
git clone https://github.com/matiastucci/electron-auto-updater-example
# Go into the repository
cd electron-auto-updater-example
# Install dependencies
npm install
# Run the app
npm run dev
# Build the app
npm run build
```
