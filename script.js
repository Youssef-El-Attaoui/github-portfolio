document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("formResponse").textContent = "Thank you for your message!";
    this.reset(); // Clear form after submission
});

function openLightbox(imageSrc) {
    document.getElementById("lightboxImage").src = imageSrc;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
