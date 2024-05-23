var modal = document.getElementById("myModal");
var modalBtn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

modalBtn.onclick = function(){
    modal.display = "block";
}

span.onclick = function(){
    modal.display = "none";
}

window.onclick = function(event){
    if (event.target == modal){
        modal.display = "none";
    }
}