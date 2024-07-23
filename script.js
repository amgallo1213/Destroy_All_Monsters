// var modal = document.getElementById("myModal");
// var modalBtn = document.getElementById("myBtn");

// var span = document.getElementsByClassName("close")[0];

// modalBtn.onclick = function(){
//     modal.display = "block";
// }

// span.onclick = function(){
//     modal.display = "none";
// }

// window.onclick = function(event){
//     if (event.target == modal){
//         modal.display = "none";
//     }
// }


function reveal() {
    var reveals = document.querySelectorAll(".hidden");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);