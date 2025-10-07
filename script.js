// Open folder link when user clicks button
function openFolder(folderName) {
  const baseURL = "https://aedtpworldteam.github.io/music/";
  window.open(`${baseURL}${folderName}`, "_blank");
}

// Search/filter folders by name
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", () => {
  const searchValue = searchBar.value.toLowerCase();
  const folders = document.querySelectorAll(".music-folder");

  folders.forEach(folder => {
    const folderName = folder.dataset.name.toLowerCase();
    folder.style.display = folderName.includes(searchValue) ? "block" : "none";
  });
});

