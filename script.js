// ================================
// SECRET LOVE PAGE SETTINGS 💗
// ================================

// Password
const password = "Fergison";

// Your pictures
const photos = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg",
  "images/photo5.jpg",
  "images/photo6.jpg",
  "images/photo7.jpg",
  "images/photo8.jpg",
  "images/photo9.jpg"
];

let currentPhoto = 0;


// ================================
// PASSWORD CHECK
// ================================

function checkPassword() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (input === password) {

    // Hide login screen
    document.getElementById("login").style.display = "none";

    // Show surprise
    document.getElementById("surprise").style.display = "block";

    // Start pictures
    showNextPhoto();

  } else {

    error.textContent = "wrong password 😭";
    document.getElementById("password").value = "";

  }
}


// ================================
// SHOW PICTURES
// ================================

function showNextPhoto() {

  // Once all pictures are finished
  if (currentPhoto >= photos.length) {

    document.getElementById("photo").style.display = "none";

    document.getElementById("message").style.display = "block";

    return;
  }

  const photo = document.getElementById("photo");

  // Start invisible
  photo.style.opacity = "0";

  setTimeout(() => {

    // Change picture
    photo.src = photos[currentPhoto];

    // Fade in
    photo.style.opacity = "1";

    currentPhoto++;

    // Keep picture on screen for 5 seconds
    setTimeout(() => {

      // Fade out
      photo.style.opacity = "0";

      // Wait for fade-out,
