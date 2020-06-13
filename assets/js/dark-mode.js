
function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark");

    if (document.getElementById("main")) {
        document.getElementById("main").id = "dark";
    } else {
        document.getElementById("dark").id = "main";
    }

    var sec = document.getElementsByClassName("special")
    for (var i = 0; i < sec.length; i++)
    {
        if (sec[i].className == "main special") {
            sec[i].className = "dark special";
        } else {
            sec[i].className = "main special";
        }
    }

    if (document.getElementById("content").className == "main") {
        document.getElementById("content").className = "dark";
    } else {
        document.getElementById("content").className = "main";
    }
}
