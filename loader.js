// Wait for the page content to load (including images and other resources)
window.addEventListener('load', function () {
    // Hide the loader when the page has fully loaded
    const loaderWrapper = document.querySelector('.loader-wrapper');
    loaderWrapper.style.display = 'none'; // Use inline style to hide the loader
});