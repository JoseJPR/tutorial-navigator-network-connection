<h1 align="center">Tutorial JavaScript Navigator Network Connection</h1>

<p align="center">📡<strong>Check with JavaScript</strong> the status of the <strong>network connection</strong> from your web application and show the user a personalized message.</p>

<p align="center">
  <a title="MIT License" href="LICENSE.md">
    <img src="https://img.shields.io/github/license/gridsome/gridsome.svg?style=flat-square&label=License&colorB=6cc24a">
  </a>
  <a title="Twitter: JoseJ_PR" href="https://twitter.com/JoseJ_PR">
    <img src="https://img.shields.io/twitter/url?color=1991DA&label=Twitter%20%40JoseJ_PR&logo=twitter&logoColor=FFFFFF&style=flat-square&url=https%3A%2F%2Ftwitter.com%2FJoseJ_PR">
  </a>  
  <a title="Github: Sponsors" href="https://github.com/sponsors/JoseJPR">
    <img src="https://img.shields.io/twitter/url?color=032f62&label=Github%20Sponsors%20%40JoseJPR&logo=github&logoColor=FFFFFF&style=flat-square&url=https%3A%2F%2Fgithub.com%2Fsponsors%2FJoseJPR">
  </a>
  <br />
  <br />
</p>

![JavaScript The Network Information](assets/screen.gif)

## 📐 How to work with this project

### 1️⃣ Installation

```bash
npm i
```

### 2️⃣ Run

```bash
npm run start
```

### 3️⃣ Usage

Open: http://localhost:3000

## 🎮 How to include and work with this library in your project?

### 1️⃣ Include the library in your project.
Copy the "check-connection.js" file into your project.

### 2️⃣ Create a new js file, for example "app.js" and add the following lines:
```js
import checkConnection from './check-connection.js';

window.addEventListener("load", () => {
  /**
   * This Example show how you can create a new instance of checkConnection class
   * for show top banner with #contentMessage id and with a delay for hide in 1000 milliseconds.
   */
  const instanceCheckConnection = new checkConnection(
    'contentMessage',
    '✅ The network connection has been restored',
    '🚫 The network connection has been lost',
    1000
  );
  // Active for show top banner if the connection change.
  instanceCheckConnection.active();
  /**
   * You can desactive this component with the next line:
   * instanceCheckConnection.desactive();
   */ 
});
```
### 3️⃣ Add the reference to your js file in your html file, for example "app.js" (it is important to add it as a module):

```js
<script type="module" src="js/app.js"></script>
```

## 📂 Code Scaffolding

```any
/
├── assets 🌈                   # Images Sources.
├── src 📦                      # Express Server Application.
├── public 👀                   # Front Demo Application.
|   ├── style                   # Style CSS sources.
|   ├── js                      # JS file library and example.
|   └── ...
└── ...
```

## 📌 More Info
[Mozilla Developers Navigator.onLine](https://developer.mozilla.org/es/docs/Web/API/NavigatorOnLine/onLine) \
[W3C The Network Information API](https://www.w3.org/TR/2014/NOTE-netinfo-api-20140410/)

## ⛽️ Review and Update Dependencies

To review and update all of this project's npm dependencies you will need to install globally the "npm-check-updates" package.

```bash
# Install and Run
$npm i -g npm-check-updates
$ncu
```

## License

[MIT](LICENSE.md)

## Happy Code

Created with JavaScript, lot of ❤️ and a few ☕️

## This README.md file has been written keeping in mind

[GitHub Markdown](https://guides.github.com/features/mastering-markdown/) \
[Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)