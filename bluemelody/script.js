let darkTheme = false;

function toggleTheme() {
  if (!darkTheme) {
    document.documentElement.style.setProperty('--btn-bg', 'rgb(0, 153, 219)');
    document.documentElement.style.setProperty('--bg-color', '#222');
    document.documentElement.style.setProperty('--text-color', 'rgb(50, 50, 50)');
    darkTheme = true;
  } else {
    document.documentElement.style.setProperty('--btn-bg', 'rgb(30, 144, 255)');
    document.documentElement.style.setProperty('--bg-color', 'white');
    document.documentElement.style.setProperty('--text-color', 'rgb(50, 50, 50)');
    darkTheme = false;
  }
}


function changeButtonColor(color) {
  document.documentElement.style.setProperty('--btn-bg', color);
}
