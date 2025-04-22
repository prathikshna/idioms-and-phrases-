// Dark Mode Toggle
document.getElementById('toggle-mode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Search Feature
function searchIdioms() {
    let input = document.getElementById('search').value.toLowerCase();
    let idioms = document.querySelectorAll("#idioms li");
    
    idioms.forEach(idiom => {
        if (idiom.innerText.toLowerCase().includes(input)) {
            idiom.style.display = "block";
        } else {
            idiom.style.display = "none";
        }
    });
}
