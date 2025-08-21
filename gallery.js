// Array of image paths
const galleryArray = [
  ['/Assets/art 1.jpg', '/Assets/art 2.jpg', '/Assets/art 3.jpg', '/Assets/art 4.jpg', '/Assets/art 5.jpg'], 
  ['/Assets/art 6.jpg', '/Assets/art 7.jpg', '/Assets/art 8.jpg', '/Assets/art 9.jpg', '/Assets/art 10.jpg', '/Assets/art 11.jpg'], 
  ['/Assets/art 12.jpg', '/Assets/art 13.jpg', '/Assets/art 14.jpg', '/Assets/art 15.jpg', '/Assets/art 16.jpg'], 
  ['/Assets/art 17.jpg', '/Assets/art 18.jpg', '/Assets/art 19.jpg', '/Assets/art 20.jpg', '/Assets/art 21.jpg', '/Assets/art 22.png']
];

// Select elements
const popup = document.querySelector(".popup");
const overlay = document.querySelector(".overlay"); // dark background div
const body = document.querySelector("body");
const closeButton = popup.querySelector(".popup-close");
const popupImage = popup.querySelector("img");

// Select all rows
const rows = document.querySelectorAll(".hero-row");

// Function to close popup
function closePopup() {
  popup.style.display = "none";
  overlay.style.display = "none";
  body.classList.remove("disable-scroll"); // restore scroll
}

// Close popup on close button click
closeButton.addEventListener("click", closePopup);

// Close popup if overlay is clicked
overlay.addEventListener("click", closePopup);

// Open popup on box click
rows.forEach((row, rowIndex) => {
  const boxes = row.querySelectorAll("div");

  boxes.forEach((box, colIndex) => {
    box.addEventListener("click", () => {
      const imagePath = galleryArray[rowIndex][colIndex];
      popupImage.src = imagePath;

      popup.style.display = "block";
      overlay.style.display = "block";
      body.classList.add("disable-scroll"); // prevent scroll but keep scrollbar visible
    });
  });
});
