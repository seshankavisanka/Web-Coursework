window.addEventListener('DOMContentLoaded', (event) => {
    // Color Scheme Selector
    const colorSelect = document.getElementById('color-select');
    colorSelect.addEventListener('change', function() {
        const selectedValue = this.value;
        changeColorScheme(selectedValue);
    });

    // Font Size Buttons
    const smallFontBtn = document.getElementById('small-font');
    const mediumFontBtn = document.getElementById('medium-font');
    const largeFontBtn = document.getElementById('large-font');


    smallFontBtn.addEventListener('click', function() {
        changeFontSize('16px');
    });

    mediumFontBtn.addEventListener('click', function() {
        changeFontSize('18px');
    });

    largeFontBtn.addEventListener('click', function() {
        changeFontSize('20px');
    });



    // Function to change the color scheme
    function changeColorScheme(color) {
        const body = document.body;

        if (color === 'random') {
            const randomColor = getRandomColor();
            body.style.backgroundColor = randomColor;
        } else {
            body.style.backgroundColor = color;
        }
    }

    // Function to change the font size
    function changeFontSize(fontSize) {
        const elements = document.querySelectorAll('.image p');

        elements.forEach(function(element) {
            element.style.fontSize = fontSize;
        });
    }


    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
function scrollToTop() {
    // For smooth scrolling, use 'behavior: smooth'

    window.scrollTo({ top: 0, behavior: "smooth" });
}
