document.addEventListener('DOMContentLoaded', function() {
    // Check if the current page is patientlogin.html, doctorlogin.html, or govtlogin.html
    const validPaths = ['patientlogin.html', 'doctorlogin.html', 'govtlogin.html','patientregister.html', 'doctorregister.html', 'govtregister.html'];
    const currentPath = window.location.pathname;

    // Attach event listener to the 'Patient Records' link if on a relevant login page
    if (validPaths.some(path => currentPath.endsWith(path))) {
        document.getElementById('patient-records-link').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link action
            alert("Please log in to access your records."); // Show alert
        });
    }

    // Handle the form submission for login and registration
    const loginForm = document.querySelector('.login-box form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevents the default form submission

            // Redirect to otp.html
            window.location.href = 'otp.html';
        });
    }

    // Slide show functionality
    let slideIndex = 0;
    const slidesWrapper = document.querySelector(".slides-wrapper");
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    const contentContainers = document.getElementsByClassName("content-container");

    function showSlides() {
        // Reset all dots and fade out all content containers
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
            contentContainers[i].style.opacity = 0; // Fade out content
        }
        
        // Increment slide index and loop back to 1 if it exceeds the total number of slides
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        
        // Slide the wrapper to the current slide
        slidesWrapper.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
        
        // Activate the corresponding dot and fade in the content container
        dots[slideIndex - 1].className += " active";
        contentContainers[slideIndex - 1].style.opacity = 1;
        
        // Change slide every 3 seconds
        setTimeout(showSlides, 3000);
    }

    // Start the slideshow
    showSlides();
});


let slideIndex = 0;
const slidesWrapper = document.querySelector(".slides-wrapper");
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");
const contentContainers = document.getElementsByClassName("content-container");

function showSlides() {
    // Reset all dots and fade out all content containers
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        contentContainers[i].style.opacity = 0; // Fade out content
    }
    
    // Increment slide index and loop back to 1 if it exceeds the total number of slides
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Slide the wrapper to the current slide
    slidesWrapper.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
    
    // Activate the corresponding dot and fade in the content container
    dots[slideIndex - 1].className += " active";
    contentContainers[slideIndex - 1].style.opacity = 1;
    
    // Change slide every 3 seconds
    setTimeout(showSlides, 3000);
}
showSlides();