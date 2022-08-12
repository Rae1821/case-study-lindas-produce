


//Hamburger menu
document.getElementById("toggle").addEventListener("click", function(){
	document.getElementById("nav").classList.toggle("-right-full");
	document.getElementById("nav").classList.toggle("right-0");
});

//Dropdown menu
document.getElementById("dropdown").addEventListener("click", function() {
    document.getElementById("dropdown-menu").classList.toggle("hidden");
});


//Show we are open or closed depending on time of day
const date = new Date();
const timeOfDay = date.getHours();

const banner = document.getElementById("banner");
const open = document.getElementById("open-now");

if (timeOfDay >= 8 && timeOfDay <= 20) {
	open.innerText = "We are open now until 8pm!";
} else {
	open.innerText = "Sorry, we are closed!";
};


//Scroll To Top Button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");


//When user scrolls down 20px from top of page show button 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(
        document.body.scrollTop > 20 || 
        document.documentElement.scrollTop > 20
        ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

//When user clicks button, scroll to top of page 
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0; //For safari
    document.documentElement.scrollTop = 0; //For Chrome, Firefox, IE, and Opera
}
