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
<script>
    // Dark Mode Toggle
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('toggle-mode').addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');
        });

        // Show/Hide Meaning on Click
        const idioms = document.querySelectorAll('.idiom');
        idioms.forEach(idiom => {
            idiom.addEventListener('click', () => {
                const meaningElement = idiom.querySelector('.meaning');
                meaningElement.textContent = idiom.getAttribute('data-meaning');
                meaningElement.style.display =
                    meaningElement.style.display === 'none' || meaningElement.style.display === ''
                        ? 'block'
                        : 'none';
            });
        });

        // Search Feature
        document.getElementById('search').addEventListener('keyup', function () {
            const input = this.value.toLowerCase();
            idioms.forEach(idiom => {
                const idiomText = idiom.querySelector('strong').textContent.toLowerCase();
                idiom.style.display = idiomText.includes(input) ? 'list-item' : 'none';
            });
        });
    });
</script>
