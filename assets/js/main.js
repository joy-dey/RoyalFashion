// signup section
let signupform = document.querySelector('#signupForm'),
    alertDialog = document.querySelector('.alert'),
    agreementCheck = document.querySelector('#agreement'),
    signupButton = document.querySelector('#registerButton'),
    password = document.querySelector('#password'),
    repassword = document.querySelector('#repassword');

if (signupform) {
    agreementCheck.addEventListener('change', () => {
        (agreementCheck.checked) ? signupButton.classList.remove('disabled'): signupButton.classList.add('disabled')
    })

    signupform.addEventListener('submit', (e) => {
        if (password.value != repassword.value) {
            e.preventDefault();
            alertDialog.innerHTML = "Password Mismatch!";
            alertDialog.classList.remove('d-none');
            scrollTo(0, 0);
            setTimeout(() => {
                alertDialog.classList.add('d-none');
            }, 2250)
        }
    })
}

// cart section
let counterUpButtons = document.querySelectorAll('.add'),
    counterDownButtons = document.querySelectorAll('.sub');

if (counterUpButtons) {

    counterUpButtons.forEach(button => {
        button.addEventListener('click', () => {
            let inputBox = button.previousElementSibling;
            inputBox.value = parseInt(++inputBox.value);
        })
    })

    counterDownButtons.forEach(button => {
        button.addEventListener('click', () => {
            let inputBox = button.nextElementSibling;
            (inputBox.value > 1) ? inputBox.value = parseInt(--inputBox.value): inputBox.value = 1;
        })
    })
}

// product details sectrion
let url = location.href,
    shareButton = document.querySelector('#share-button'),
    productName = document.querySelector('.title'),
    price = document.querySelector('.price'),
    preview = document.querySelector('.preview-image-holder'),
    imagesToPreview = document.querySelectorAll('.to-preview');

if (preview) {
    shareButton.addEventListener('click', () => {
        let message = `Hey Check out this awesome product ${productName.innerText} by Royal Fashion. Its only of ${price.innerText} INR. ${url}`.replace(/ /g, '%20').replace(':', '%3A').replaceAll('/', '%2F');
        location.href = `https://api.whatsapp.com/send?text=${message}`;
    })

    imagesToPreview.forEach(image => {

        image.addEventListener('click', () => {
            preview.src = image.src;

            imagesToPreview.forEach(img => {
                img.classList.remove('border-secondary')
            })
            image.classList.add('border', 'border-secondary')
        })

    })
}

// profile section
let tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        let target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })

        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active');
        target.classList.add('active')
    })
})


// let addresses = document.querySelectorAll('address');

// function getGeoLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(position => {
//             const { latitude, longitude } = position.coords;
//             alert(`Lat: ${latitude} Long: ${longitude}`)

//             addresses.forEach(addr => {
//                 addr.innerText = `Lat: ${latitude} Long: ${longitude}`
//             })
//         });
//     } else {
//         alert('Geolocation Not Supported');
//     }
// }


// let geoSwitch = document.querySelector('#geoSwitch');

// geoSwitch.addEventListener('input', () => {
//     getGeoLocation();
//     geoSwitch.setAttribute('disabled', true);
// })

var myCarousel = document.querySelector('#mainSlider')
var carousel = new bootstrap.Carousel(myCarousel)