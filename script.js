const images = [
  "https://images.unsplash.com/photo-1761839257658-23502c67f6d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1771777400714-a4120a98d758?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1673254848097-84610483ea94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4OHx8fGVufDB8fHx8fA%3D%3D",
  "https://picsum.photos/id/1020/1200/800",
  "https://images.unsplash.com/photo-1771596703839-f0cbdb32d65a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5NXx8fGVufDB8fHx8fA%3D%3D",
];

let currentIndex = 0;
const container = document.querySelector(".container");

// Initial background
container.style.setProperty("--bg-image", `url(${images[0]})`);

// Change image every 2 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  container.style.setProperty("--bg-image", `url(${images[currentIndex]})`);
}, 2000);
