
let images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg"
];

let currentIndex = 0;

function showImage(index) {
  const imageElement = document.getElementById("carousel-image");
  imageElement.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// ===== Fetch Joke from API =====
async function fetchJoke() {
  const url = "https://official-joke-api.appspot.com/random_joke";
  const jokeDisplay = document.getElementById("joke-display");

  try {
    const response = await fetch(url);
    const data = await response.json();
    jokeDisplay.innerHTML = `${data.setup} <br><strong>${data.punchline}</strong>`;
  } catch (error) {
    jokeDisplay.innerHTML = "Failed to fetch joke. Please try again.";
    console.error("Joke fetch error:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  showImage(currentIndex);
});