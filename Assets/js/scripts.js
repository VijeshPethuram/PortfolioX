var loader = document.getElementById("preloader");
        window.addEventListener("load", function() {
        loader.style.display="none";
        })
        


function openDialog(num) {
                  
  document.getElementById('customDialog'+num).style.display = 'flex';

}

function closeDialog(elem) {
  document.getElementById(elem).style.display = 'none';
}

