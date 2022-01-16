/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById('myNav').style.width = "100%";
    document.getElementById('slogan').hidden = true;
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById('myNav').style.width = "0%";
    document.getElementById('slogan').hidden = false;
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById('slide').style.top = "0";
    } else {
        document.getElementById('slide').style.top = "-300px";
    }
    prevScrollpos = currentScrollPos;
}

// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};
//
// function myFunction() {
//     var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     var scrolled = (winScroll / height) * 100;
//     document.getElementById("myBar").style.width = scrolled + "%";
// }

//Get the button:
mybutton = document.getElementById("myTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

