// 💗 SECRET LOVE PAGE SETTINGS 💗

const SETTINGS = {
  // 🔐 PASSWORD
  password: "Fergison",

  // 💗 MESSAGE AFTER SHE UNLOCKS IT
  unlockedTitle: "your so smart",
  unlockedSubtitle: "I made this little surprise just for you.",

  // 💌 FINAL LOVE MESSAGE
  finalTitle: "For Izabella",

  finalMessage: `Hi baby,

I don't really know how else to say this, but I appreciate you so much. No matter what happens, I will forever love you. You make me the happiest person in the entire world, and you are honestly the best girlfriend I could ever ask for. I couldn't imagine my life without you.

You make my world go round. You're the sweetest person I've ever met, and I'm so glad that we found each other. I'm still so happy that you texted me after we liked each other's stories because it's crazy to think that something so simple ended up bringing us together.

I love all the memories we've made together, all the laughs, all the conversations, and all the little moments that mean more to me than you probably realize.

Thank you for being you and for making me so happy. I'll always appreciate you, I'll always care about you, and I'll always be grateful that you're my girlfriend.

I love you so much, baby. ❤️`,

  // ⏱️ EACH PHOTO STAYS FOR 5 SECONDS
  photoTime: 5000,

  // ✨ FLOATING EMOJIS
  floatingEmojis: [
    "❤️",
    "💕",
    "💗",
    "✨",
    "💞"
  ]
};


// 📸 YOUR PHOTOS
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


// ==========================================
// 🔒 PASSWORD / UNLOCK
// ==========================================

let index = 0;
let timer;

document.getElementById("unlockedTitle").textContent =
  SETTINGS.unlockedTitle;

document.getElementById("unlockedSubtitle").textContent =
  SETTINGS.unlockedSubtitle;

document.getElementById("finalTitle").textContent =
  SETTINGS.finalTitle;

document.getElementById("finalMessage").innerHTML =
  SETTINGS.finalMessage.replace(/\n/g, "<br><br>");


function unlock() {
  const enteredPassword =
    document.getElementById("password").value;

  const error =
    document.getElementById("error");

  if (enteredPassword === SETTINGS.password) {

    // Hide password screen
    document.getElementById("lock").style.display = "none";

    // Show secret page
    document.getElementById("secret").style.display = "flex";

    // Start photos
    startSlideshow();

    // Start floating hearts
    hearts();

  } else {

    error.textContent =
      "nope 😭 try again ❤️";
  }
}


// Press Enter to unlock
document.getElementById("password").addEventListener("keydown", function(event) {

  if (event.key === "Enter") {
    unlock();
  }

});


// ==========================================
// 📸 PHOTO SLIDESHOW
// ==========================================

function startSlideshow() {

  const img =
    document.getElementById("photo");

  const dots =
    document.getElementById("dots");

  // Show first picture
  img.classList.add("show");


  timer = setInterval(function() {

    // Fade current picture out
    img.classList.remove("show");
    img.classList.add("hide");


    setTimeout(function() {

      index++;


      // If all pictures have been shown
      if (index >= photos.length) {

        clearInterval(timer);

        // Hide slideshow
        document.getElementById("secret").style.display = "none";

        // Show final message
        document.getElementById("final").style.display = "flex";

        // Extra hearts
        hearts(true);

        return;
      }


      // Change picture
      img.src = photos[index];


      // Update dots
      dots.textContent =
        photos
          .map(function(_, i) {
            return i === index ? "♥" : "•";
          })
          .join(" ");


      // Fade new picture in
      img.classList.remove("hide");

      requestAnimationFrame(function() {
        img.classList.add("show");
      });

    }, 1200);

  }, SETTINGS.photoTime);
}


// ==========================================
// 💕 FLOATING HEARTS
// ==========================================

function hearts(more = false) {

  setInterval(function() {

    const heart =
      document.createElement("div");

    heart.className = "float";


    heart.textContent =
      SETTINGS.floatingEmojis[
        Math.floor(
          Math.random() *
          SETTINGS.floatingEmojis.length
        )
      ];


    heart.style.left =
      Math.random() * 100 + "vw";


    heart.style.animationDuration =
      (5 + Math.random() * 5) + "s";


    heart.style.fontSize =
      (14 + Math.random() * 18) + "px";


    document.body.appendChild(heart);


    setTimeout(function() {
      heart.remove();
    }, 10000);


  }, more ? 250 : 500);
}
