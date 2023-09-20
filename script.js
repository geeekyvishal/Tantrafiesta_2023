// const darkModeToggle = document.getElementById('dark-mode-toggle');
// const body = document.body;

// darkModeToggle.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
// });

var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        mode.src = "techlogo-removebg.png";
        icon.src = "sun.png";
    }
    else
    {
        mode.src = "logo-removebg.png";
        icon.src = "moon.png";
    }
    }
