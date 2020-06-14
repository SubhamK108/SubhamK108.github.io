
function toggleDarkMode() {
    var darkSwitch = document.getElementById("darkModeSwitch");
    if (darkSwitch.className == "icon solid fas fa-moon") {
        darkSwitch.className = "icon solid fas fa-sun";
    } else {
        darkSwitch.className = "icon solid fas fa-moon";
    }

    var element = document.body;
    element.classList.toggle("dark");

    if (document.getElementById("main")) {
        document.getElementById("main").id = "dark-main";
    } else {
        document.getElementById("dark-main").id = "main";
    }

    var sec = document.getElementsByClassName("special")
    for (var i = 0; i < sec.length; i++)
    {
        if (sec[i].className == "main special") {
            sec[i].className = "dark-main special";
        } else {
            sec[i].className = "main special";
        }
    }

    if (document.getElementById("content").className == "main") {
        document.getElementById("content").className = "dark-main";
    } else {
        document.getElementById("content").className = "main";
    }
}
