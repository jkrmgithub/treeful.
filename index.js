// NEWSLETTER INPUT

const newsletterInput = document.getElementById("newsletter-input");
const newsletterSubmitBtn = document.getElementById("submit-btn");

const modalNewsletter = document.getElementById("newsletter-modal-container");
const modalCloseBtn = document.getElementById("modal-close-btn");

function emailSubmitted() {
    if (newsletterInput.value == "") {
        showAlert1()
    }
    else if (newsletterInput.value && newsletterInput.value.includes("@") && newsletterInput.value.length >= 4) {
        showModalNewsletter()
    }
    else if (newsletterInput.value) {
        showAlert2()
    }
}

function showAlert1() {
    document.getElementById("newsletter-alert-1").classList.add("show");
    document.getElementById("newsletter-alert-2").classList.remove("show");
}

function showAlert2() {
    document.getElementById("newsletter-alert-1").classList.remove("show");
    document.getElementById("newsletter-alert-2").classList.add("show");
}

function showModalNewsletter() {
    // First, get rid of the different alerts:
    document.getElementById("newsletter-alert-1").classList.remove("show");
    document.getElementById("newsletter-alert-1").classList.add("hidden")
    document.getElementById("newsletter-alert-2").classList.remove("show");
    document.getElementById("newsletter-alert-2").classList.add("hidden");

    // Now, show the modal
    modalNewsletter.classList.add("show")
}

function closeNewsletter(){
    modalNewsletter.classList.remove("show")
}


// EVENT LISTENERS

newsletterSubmitBtn.addEventListener("click", emailSubmitted);
modalCloseBtn.addEventListener("click", closeNewsletter);
