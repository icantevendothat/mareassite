const header = document.querySelector('.header');
const menuIcon = document.getElementById('menu-icon');
let headerVisible = true;

// Detect scroll position to toggle header visibility
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {  // Adjust scroll threshold as needed
        if (headerVisible) {
            header.classList.add('hidden'); // Hide header
            menuIcon.style.display = 'block'; // Show menu icon
            headerVisible = false;
        }
    } else {
        if (!headerVisible) {
            header.classList.remove('hidden'); // Show header
            menuIcon.style.display = 'none'; // Hide menu icon
            headerVisible = true;
        }
    }
});

// Toggle header visibility when the menu icon is clicked
menuIcon.addEventListener('click', () => {
    header.classList.remove('hidden'); // Show header
    menuIcon.style.display = 'none'; // Hide menu icon
    headerVisible = true;
});


document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("bg-video");
    const muteButton = document.getElementById("mute-button");

    // Mute/unmute video with the mute button
    if (muteButton && video) {
        muteButton.addEventListener("click", function() {
            video.muted = !video.muted;

            // Update the button's text or appearance
            muteButton.textContent = video.muted ? "Unmute" : "Mute";
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const names = document.querySelectorAll(".highlight-name");
    const popup = document.getElementById("popup");
    const popupImage = document.getElementById("popup-image");
    const popupText = document.getElementById("popup-text");

    const data = {
        "camelia-muniz": {
            image: "media/camelia.jpg",
            text: "Camelia Muñiz interpreta a Maite, una joven que lidia con la tensión familiar."
        },
        "gabriela-saker": {
            image: "media/gabriela.png",
            text: "Gabriela Saker interpreta a Sofía, la hermana de Maite, que ha regresado de Nueva York."
        },
        "denise-quinones": {
            image: "media/denise.jpg",
            text: "Denise Quiñones es Patricia, la madre que equilibra la dinámica de sus hijas."
        },
        "camila-rodriguez": {
            image: "media/camila.jpg",
            text: "Camila Rodríguez López escribió y dirigió esta conmovedora exploración de la identidad y la familia."
        },
        "jack-nunez": {
            image: "media/jack.jpg",
            text: "Jack Núñez es el productor de este conmovedor cortometraje."
        },
        "alex-sosa": {
            image: "media/alex.png",
            text:  "Alexandra Sosa es la productora de este conmovedor cortometraje."
        }
    };

    if (!popup || !popupImage || !popupText) {
        console.error("Popup elements not found in the DOM.");
        return;
    }

    // Show popup when clicking a name
    names.forEach(name => {
        name.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent triggering the global click handler
            const id = name.id;
            if (data[id]) {
                popupImage.src = data[id].image;
                popupText.textContent = data[id].text;
                popup.style.display = "block";
            }
        });
    });

    // Hide popup when clicking outside of it
    document.addEventListener("click", (e) => {
        if (!popup.contains(e.target) && !e.target.classList.contains("highlight-name")) {
            popup.style.display = "none";
        }
    });

    // Prevent popup from closing if clicking inside it
    popup.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const slideshowTrack = document.querySelector(".slideshow-track");
    const images = document.querySelectorAll(".gallery-image");
    const highlightedImage = document.getElementById("highlighted");
    const imageCaption = document.getElementById("image-caption");

    const imageCount = images.length;
    let index = 0; // Index for the current slide

    // Clone images for a seamless looping effect
    for (let i = 0; i < imageCount; i++) {
        const clone = images[i].cloneNode(true);
        slideshowTrack.appendChild(clone);
    }

    const imageWidth = images[0].clientWidth; // Width of a single image

    // Function to update the carousel
    function updateCarousel() {
        // Transition to the next position
        slideshowTrack.style.transition = "transform 1s ease-in-out";
        slideshowTrack.style.transform = `translateX(-${index * imageWidth}px)`;

        // Update highlighted image and caption
        const currentImage = images[index % imageCount];
        highlightedImage.src = currentImage.src;
        imageCaption.textContent = currentImage.dataset.caption;

        index++;

        // Reset position to create an infinite loop
        if (index === imageCount) {
            setTimeout(() => {
                slideshowTrack.style.transition = "none"; // Disable transition
                slideshowTrack.style.transform = `translateX(0px)`; // Reset position
                index = 0;
            }, 1000); // Match transition duration
        }
    }

    // Start the carousel
    setInterval(updateCarousel, 4000); // Slide every 4 seconds
});


function copyEmailToClipboard() {
    navigator.clipboard.writeText("mareasaladeriva@gmail.com").then(function() {
        alert("Email copied to clipboard!");
    }).catch(function(error) {
        console.error("Failed to copy email: ", error);
    });
}


