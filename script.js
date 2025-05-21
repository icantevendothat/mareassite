const header = document.querySelector('.header');
const menuIcon = document.getElementById('menu-icon');
let headerVisible = true;

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { 
        if (headerVisible) {
            header.classList.add('hidden');
            menuIcon.style.display = 'block'; 
            headerVisible = false;
        }
    } else {
        if (!headerVisible) {
            header.classList.remove('hidden'); 
            menuIcon.style.display = 'none';
            headerVisible = true;
        }
    }
});

menuIcon.addEventListener('click', () => {
    header.classList.remove('hidden');
    menuIcon.style.display = 'none'; 
    headerVisible = true;
});


document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("bg-video");
    const muteButton = document.getElementById("mute-button");

    if (muteButton && video) {
        muteButton.addEventListener("click", function() {
            video.muted = !video.muted;

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

    names.forEach(name => {
        name.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = name.id;
            if (data[id]) {
                popupImage.src = data[id].image;
                popupText.textContent = data[id].text;
                popup.style.display = "block";
            }
        });
    });

    document.addEventListener("click", (e) => {
        if (!popup.contains(e.target) && !e.target.classList.contains("highlight-name")) {
            popup.style.display = "none";
        }
    });

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
    let index = 0; 

    for (let i = 0; i < imageCount; i++) {
        const clone = images[i].cloneNode(true);
        slideshowTrack.appendChild(clone);
    }

    const imageWidth = images[0].clientWidth;

    function updateCarousel() {
        slideshowTrack.style.transition = "transform 1s ease-in-out";
        slideshowTrack.style.transform = `translateX(-${index * imageWidth}px)`;

        const currentImage = images[index % imageCount];
        highlightedImage.src = currentImage.src;
        imageCaption.textContent = currentImage.dataset.caption;

        index++;

        if (index === imageCount) {
            setTimeout(() => {
                slideshowTrack.style.transition = "none";
                slideshowTrack.style.transform = `translateX(0px)`; 
                index = 0;
            }, 1000); 
        }
    }

    setInterval(updateCarousel, 4000); 
});


function copyEmailToClipboard() {
    navigator.clipboard.writeText("mareasaladeriva@gmail.com").then(function() {
        alert("Email copied to clipboard!");
    }).catch(function(error) {
        console.error("Failed to copy email: ", error);
    });
}


