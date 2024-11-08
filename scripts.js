document.getElementById('stateSelector').addEventListener('change', showCapitalAndBackground);

function showCapitalAndBackground() {
    const data = {
        'Johor': { capital: 'Johor Bahru', img: 'johor.jpg' },
        'Kedah': { capital: 'Alor Setar', img: 'kedah.jpg' },
        'Kelantan': { capital: 'Kota Bharu', img: 'kelantan.jpg' },
        'Melaka': { capital: 'Melaka', img: 'melaka.jpg' },
        'Selangor': { capital: 'Shah Alam', img: 'selangor.jpg' }
    };

    const stateSelector = document.getElementById('stateSelector');
    const capitalDisplay = document.getElementById('capitalDisplay');
    const body = document.getElementById('body');
    const selectedState = stateSelector.value;

    capitalDisplay.textContent = `Capital: ${data[selectedState].capital}`;
    body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data[selectedState].img})`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'center';
    body.style.backgroundAttachment = 'fixed';
}
