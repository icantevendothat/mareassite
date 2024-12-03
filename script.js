document.addEventListener("DOMContentLoaded", function() {
    const headerText = document.getElementById("header-text");
    const toggleText = document.getElementById("toggle-text");
    const toggleLanguage = document.getElementById("toggle-language");
    const title = document.querySelector(".header-title");
    const subtitle = document.querySelector(".subtitle");
    const navLinks = document.querySelectorAll(".nav-links a");

    // Language toggle event
    headerText.addEventListener("click", function() {
        if (headerText.textContent.includes(".. ESTO ES UN PARAISO")) {
            headerText.childNodes[0].textContent = 'THIS IS A PARADISE';
            title.textContent = "DRIFTING TIDES";
            subtitle.textContent = "a film by Camila Rodriguez-Lopez";
            navLinks[1].textContent = "Gallery";
            navLinks[2].textContent = "Press";
            navLinks[3].textContent = "Contact";
            navLinks[4].textContent = "Donate";
            toggleText.textContent = "ESP"; // Switch to ESP when in English
        } else {
            headerText.childNodes[0].textContent = '.. ESTO ES UN PARAISO';
            title.textContent = "MAREAS A LA DERIVA";
            subtitle.textContent = "una película de Camila Rodriguez-Lopez";
            navLinks[1].textContent = "Galería";
            navLinks[2].textContent = "Prensa";
            navLinks[3].textContent = "Contacto";
            navLinks[4].textContent = "Donar";
            toggleText.textContent = "ENG"; // Switch to ENG when in Spanish
        }
    });
});

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

    // Add event listeners for each navigation link to mute video upon click
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (video) video.muted = true;
        });
    });

    // Mute/unmute video with the mute button
    if (muteButton) {
        muteButton.addEventListener("click", function() {
            if (video) video.muted = !video.muted;
        });
    }
    
    // Unmute video when returning to the top of the page
    if (video) {
        window.addEventListener("scroll", function() {
            if (window.scrollY === 0) {
                video.muted = false;
            }
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
            text: "Camelia Muñiz plays Maite, a young woman grappling with familial tension."
        },
        "gabriela-saker": {
            image: "media/gabriela.png",
            text: "Gabriela Saker portrays Sofía, Maite's sister, who has returned from New York."
        },
        "denise-quinones": {
            image: "media/denise.jpg",
            text: "Denise Quiñones is Patricia, the mother balancing the dynamics of her daughters."
        },
        "camila-rodriguez": {
            image: "media/camila.jpg",
            text: "Camila Rodríguez López directed this poignant exploration of identity and family."
        },
        "jack-nunez": {
            image: "media/jack.jpg",
            text: "Jack Nunez is the producer of this heartfelt short film."
        },
        "alex-sosa": {
            image: "media/alex.png",
            text:  "Alexandra Sosa is the producer of this heartfelt short film."
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


// document.addEventListener("DOMContentLoaded", () => {
//     const slideshowTrack = document.querySelector(".slideshow-track");
//     const images = document.querySelectorAll(".gallery-image");
//     const highlightedImage = document.getElementById("highlighted");
//     const imageCaption = document.getElementById("image-caption");

//     let index = 0; // Index of the leftmost image
//     const imageCount = images.length;

//     // Clone the first 6 images and append them to the track for seamless looping
//     for (let i = 0; i < 6; i++) {
//         const clone = images[i].cloneNode(true);
//         slideshowTrack.appendChild(clone);
//     }

//     function updateGallery() {
//         // Slide to the next position
//         slideshowTrack.style.transition = "transform 1s ease-in-out";
//         slideshowTrack.style.transform = `translateX(-${index * (100 / 6)}%)`;

//         // Update highlighted image and caption
//         const currentImage = images[index % imageCount]; // Use modulo to loop through original images
//         highlightedImage.src = currentImage.src;
//         imageCaption.textContent = currentImage.dataset.caption;

//         // Check if we need to reset the track position
//         index++;

//         if (index === imageCount) {
//             // Disable transition temporarily to reset the position instantly
//             setTimeout(() => {
//                 slideshowTrack.style.transition = "none";
//                 slideshowTrack.style.transform = `translateX(0)`;
//                 index = 0;
//             }, 1000); // Match the transition duration
//         }
//     }

//     // Start sliding every 4 seconds
//     setInterval(updateGallery, 4000);
// });


function copyEmailToClipboard() {
    navigator.clipboard.writeText("mareasaladeriva@gmail.com").then(function() {
        alert("Email copied to clipboard!");
    }).catch(function(error) {
        console.error("Failed to copy email: ", error);
    });
}


