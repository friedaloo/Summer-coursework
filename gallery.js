const galleryArray = [
  ['/Assets/art 1.jpg', '/Assets/art 2.jpg', '/Assets/art 3.jpg', '/Assets/art 4.jpg', '/Assets/art 5.jpg'],
  ['/Assets/art 6.jpg', '/Assets/art 7.jpg', '/Assets/art 8.jpg', '/Assets/art 9.jpg', '/Assets/art 10.jpg', '/Assets/art 11.jpg'],
  ['/Assets/art 12.jpg', '/Assets/art 13.jpg', '/Assets/art 14.jpg', '/Assets/art 15.jpg', '/Assets/art 16.jpg'],
  ['/Assets/art 17.jpg', '/Assets/art 18.jpg', '/Assets/art 19.jpg', '/Assets/art 20.jpg', '/Assets/art 21.jpg', '/Assets/art 22.png']
];

let favoritesList = JSON.parse(localStorage.getItem("favoritesList")) || [];

function saveFavorites() {
  localStorage.setItem("favoritesList", JSON.stringify(favoritesList));
}

const popup = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");
const closeButton = popup.querySelector(".popup-close");
const popupImage = popup.querySelector("img");
const favoriteIcon = popup.querySelector(".favorite-icon");
const rows = document.querySelectorAll(".hero-row");

let currentImagePath = null;

// Fav popup
function showFavMessage(message) {
  const favMsg = document.createElement("div");
  favMsg.className = "fav-message";
  favMsg.textContent = message;
  document.body.appendChild(favMsg);

  setTimeout(() => {
    favMsg.remove();
  }, 4000);
}

function openPopup(imagePath) {
  currentImagePath = imagePath;
  popupImage.src = imagePath;
  popup.style.display = "block";
  overlay.style.display = "block";
  body.classList.add("disable-scroll");

  if (favoritesList.includes(imagePath)) {
    favoriteIcon.classList.add("active");
  } else {
    favoriteIcon.classList.remove("active");
  }
}

function closePopup() {
  popup.style.display = "none";
  overlay.style.display = "none";
  body.classList.remove("disable-scroll");
  currentImagePath = null;
  favoriteIcon.classList.remove("active");
}

closeButton.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup);

favoriteIcon.addEventListener("click", () => {
  if (!currentImagePath) return;

  if (favoritesList.includes(currentImagePath)) {
    favoritesList = favoritesList.filter(img => img !== currentImagePath);
    favoriteIcon.classList.remove("active");
    showFavMessage("Removed from Favorites");
  } else {
    favoritesList.push(currentImagePath);
    favoriteIcon.classList.add("active");
    showFavMessage("Added to Favorites");
  }

  saveFavorites();
});

rows.forEach((row, rowIndex) => {
  const boxes = row.querySelectorAll("div");
  boxes.forEach((box, colIndex) => {
    box.addEventListener("click", () => {
      const imagePath = galleryArray[rowIndex][colIndex];
      openPopup(imagePath);
    });
  });
});
