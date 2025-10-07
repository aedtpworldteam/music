/* Main site JS for Music | AEDTP WORLD
   - Contains folder data (add new folders here)
   - Renders responsive cards with artwork thumbnails (lazy loaded)
   - Provides search/filtering by name and description
   - Opens folder site in a new tab on click
*/

/* ========== FOLDER DATA ==========
  For each folder: { title, slug, artwork, description, siteUrl(optional) }
  Artwork expected at: https://aedtpworldteam.github.io/music/releases/artworks/<artwork>
  Example artwork filename: bluemelody-3000.jpg
===================================*/
const FOLDERS = [
  {
    title: "Blue Melody",
    slug: "bluemelody",
    artwork: "https://github.com/aedtpworldteam/music/releases/download/artworks/bluemelodylogo.png",   // place this file at releases/artworks/
    description: "Blue Melody — songs, artwork and mixes. Click Open to visit the Blue Melody site.",
    siteUrl: "https://aedtpworldteam.github.io/music/bluemelody"
  }

  // Add more folder objects here for future folders
];

/* Utilities */
const baseArtPath = "https://github.com/aedtpworldteam/music/releases/download/artworks/";
const baseFolderSite = "https://aedtpworldteam.github.io/music/";

/* DOM refs */
const grid = document.getElementById("foldersGrid");
const searchBar = document.getElementById("searchBar");

/* Render functions */
function createFolderCard(folder) {
  const card = document.createElement("article");
  card.className = "folder-card";
  card.setAttribute("data-title", folder.title.toLowerCase());
  card.setAttribute("data-desc", (folder.description || "").toLowerCase());

  // image (lazy)
  const img = document.createElement("img");
  img.className = "thumb";
  img.alt = `${folder.title} artwork`;
  img.loading = "lazy";
  img.decoding = "async";
  img.src = baseArtPath + folder.artwork;

  // body
  const body = document.createElement("div");
  body.className = "card-body";

  const titleRow = document.createElement("div");
  titleRow.className = "folder-title";
  const h2 = document.createElement("h2");
  h2.textContent = folder.title;
  titleRow.appendChild(h2);

  const desc = document.createElement("p");
  desc.className = "folder-desc";
  desc.textContent = folder.description || "";

  const actions = document.createElement("div");
  actions.className = "card-actions";

  const openBtn = document.createElement("a");
  openBtn.className = "btn";
  openBtn.textContent = "Open";
  openBtn.href = folder.siteUrl || (baseFolderSite + folder.slug);
  openBtn.target = "_blank";
  openBtn.rel = "noopener noreferrer";

  const detailsBtn = document.createElement("button");
  detailsBtn.className = "btn ghost";
  detailsBtn.type = "button";
  detailsBtn.textContent = "Copy Link";
  detailsBtn.onclick = () => {
    const url = openBtn.href;
    navigator.clipboard?.writeText(url).then(() => {
      detailsBtn.textContent = "Copied!";
      setTimeout(() => (detailsBtn.textContent = "Copy Link"), 1400);
    }, () => {
      window.prompt("Copy link:", url);
    });
  };

  actions.appendChild(openBtn);
  actions.appendChild(detailsBtn);

  body.appendChild(titleRow);
  body.appendChild(desc);
  body.appendChild(actions);

  card.appendChild(img);
  card.appendChild(body);

  return card;
}

function renderFolders(filter = "") {
  grid.innerHTML = "";
  const q = filter.trim().toLowerCase();

  const results = FOLDERS.filter(folder => {
    if (!q) return true;
    const hay = (folder.title + " " + (folder.description||"")).toLowerCase();
    return hay.includes(q);
  });

  if (results.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.innerHTML = `<p>No folders found matching "<strong>${escapeHtml(filter)}</strong>".</p>`;
    grid.appendChild(empty);
    return;
  }

  results.forEach(folder => {
    grid.appendChild(createFolderCard(folder));
  });
}

/* escape to avoid injecting markup into empty-state */
function escapeHtml(str) {
  return String(str).replace(/[&<>"]/g, (s) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'
  }[s]));
}

/* Event listeners */
searchBar.addEventListener("input", (e) => {
  renderFolders(e.target.value || "");
});

/* Initial render */
document.addEventListener("DOMContentLoaded", () => {
  renderFolders("");
});
