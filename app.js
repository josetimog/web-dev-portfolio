
/**
 * NAVIGATION JAVASCRIPT
 */

// JavaScript for navigation bar effect on scroll
window.addEventListener('scroll', function(event){
    console.log(window.scrollY);
    let header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});

// JavaScript for responsive navigation sidebar menu
let menu = document.querySelector('.menu');
let menuBtn = document.querySelector('.menu-btn');
let closeBtn = document.querySelector('.close-btn')

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
});

/**
 * CONTACT SECTION JAVASCRIPT
 */

// Add event listener for for submit
document.getElementById("messageform").addEventListener("submit", validate);

// Add event listener for the form reset
document.getElementById("clear").addEventListener("click", resetForm);

// Hides all error elements
function hideErrors() {
    // Get an array of error elements
    let error = document.getElementsByClassName("error");

    // Loop through each element in the error array
    for (let i = 0; i < error.length; i++)
    {
        // Hide the error element by setting its display style to "none"
        error[i].style.display = "none";
    }
}

function validate(e) {
    console.log("entered validate function");
    hideErrors();
    if(formHasErrors()) {
        e.preventDefault();
        return false;
    }
    return true;
}

function formHasErrors() {
    
    let errorFlag = false;
    let setFocus = false;

    // Determine if there is a name
    let name = document.getElementById("fullname").value;
    if (name === "")
    {
        document.getElementById("fullname_error").style.display = "block";
        if (!setFocus)
        {
            document.getElementById("fullname").focus();
            document.getElementById("fullname").select();
            setFocus = true;
        }

        errorFlag = true;
    }

    // Determine if there is a valid email address
    let regexEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
	let email = document.getElementById("email").value;
	if (!regexEmail.test(email))
	{
		document.getElementById("emailformat_error").style.display = "block";
        if (!setFocus)
        {
            document.getElementById("email").focus();
            document.getElementById("email").select();
            setFocus = true;
        }

        errorFlag = true;
	}

    // Determine if there is a valid phone number
    let regexTel = new RegExp(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/);
    let tel = document.getElementById("tel").value;
    if (!regexTel.test(tel))
	{
		document.getElementById("telformat_error").style.display = "block";
        if (!setFocus)
        {
            document.getElementById("tel").focus();
            document.getElementById("tel").select();
            setFocus = true;
        }

        errorFlag = true;
	}

    // Determine if there is a message
    let message = document.getElementById("message").value;
    if (message === "")
    {
        document.getElementById("message_error").style.display = "block";
        if (!setFocus)
        {
            document.getElementById("message").focus();
            document.getElementById("message").select();
            setFocus = true;
        }

        errorFlag = true;
    }

    return errorFlag;
}

function resetForm(e) {
    console.log("entered reset form function");
    if(confirm('Clear form?')) {
        hideErrors();
        document.getElementById("name").focus();
        return true;
    }
    e.preventDefault();
    return false;

}

hideErrors();