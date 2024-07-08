let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

document.querySelector('.carousel-control.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
});

document.querySelector('.carousel-control.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// Google Sign-In
function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    document.getElementById('review-form').style.display = 'block';
    document.querySelector('.g-signin2').style.display = 'none';
}

// Add sign-out functionality if needed
function signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
        document.getElementById('review-form').style.display = 'none';
        document.querySelector('.g-signin2').style.display = 'block';
    });
}
