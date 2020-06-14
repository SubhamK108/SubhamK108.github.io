
function getTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById("themeSwitch").className = "icon solid fas fa-sun";
    } else {
        document.getElementById("themeSwitch").className = "icon solid fas fa-moon";
    }
}

function toggleTheme() {
    var darkSwitch = document.getElementById("themeSwitch");

    var bodyElement = document.body;
    var sec = document.getElementsByClassName("special");

    if (darkSwitch.className == "icon solid fas fa-sun") {
        bodyElement.className = "light";

        if (document.getElementById("main")) {
            document.getElementById("main").id = "main-light";
        } else {
            document.getElementById("main-dark").id = "main-light";
        }

        for (var i = 0; i < sec.length; i++)
        {
            sec[i].className = "main-light special";
        }

        if (document.getElementById("content")) {
            document.getElementById("content").className = "main-light";
        }
        darkSwitch.className = "icon solid fas fa-moon";
    }
    
    else if (darkSwitch.className == "icon solid fas fa-moon") {
        bodyElement.className = "dark";
        
        if (document.getElementById("main")) {
            document.getElementById("main").id = "main-dark";
        } else {
            document.getElementById("main-light").id = "main-dark";
        }

        for (var i = 0; i < sec.length; i++)
        {
            sec[i].className = "main-dark special";
        }

        if (document.getElementById("content")) {
            document.getElementById("content").className = "main-dark";
        }
        darkSwitch.className = "icon solid fas fa-sun";

    }
}
