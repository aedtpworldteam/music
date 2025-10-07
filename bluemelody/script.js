let darkTheme = false;

function toggleTheme() {
  if (!darkTheme) {
    document.documentElement.style.setProperty('--btn-bg', 'rgb(15, 37, 57)');
    document.documentElement.style.setProperty('--bg-color', '#222');
    document.documentElement.style.setProperty('--text-color', 'rgb(231, 230, 230)');
    darkTheme = true;
  } else {
    document.documentElement.style.setProperty('--btn-bg', 'rgb(30, 144, 255)');
    document.documentElement.style.setProperty('--bg-color', 'white');
    document.documentElement.style.setProperty('--text-color', 'rgb(50, 50, 50)');
    darkTheme = false;
  }
}

function changeFont(font) {
  document.documentElement.style.setProperty('--font-family', font);
}

function changeFontSize(size) {
  document.documentElement.style.setProperty('--font-size', size + 'px');
}

function changeButtonColor(color) {
  document.documentElement.style.setProperty('--btn-bg', color);
}
