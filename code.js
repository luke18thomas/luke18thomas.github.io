var i = 0;

var files = [];

files.push("https://luke18thomas.github.io/photos/weehawken/weehawken-01.jpg");
files.push("https://luke18thomas.github.io/photos/weehawken/weehawken-02.jpg");
files.push("https://luke18thomas.github.io/photos/weehawken/weehawken-03.jpg");
files.push("https://luke18thomas.github.io/photos/weehawken/weehawken-04.jpg");
files.push("https://luke18thomas.github.io/photos/weehawken/weehawken-05.jpg");
files.push("https://luke18thomas.github.io/photos/weehawken/weehawken-06.jpg");
files.push("https://luke18thomas.github.io/photos/weehawken/weehawken-07.jpg");
files.push("https://luke18thomas.github.io/photos/weehawken/weehawken-08.jpg");
files.push("https://luke18thomas.github.io/photos/weehawken/weehawken-09.jpg");


function updateState(s) {
    if (s == "menu") {
        document.querySelector("#photo_div").style = "display: none";
        document.querySelector("#grid_div").style = "display: none";
        document.querySelector("#menu_div").style = "display: flex";
    }
    else if (s == "weehawken + hoboken") {
        document.querySelector("#menu_div").style = "display: none";
        document.querySelector("#photo_div").style = "display: flex";
        /*document.getElementById("button").innerHTML;*/
        
    }
    else if (s == "grid") {
        document.querySelector("#menu_div").style = "display: none";
        document.querySelector("#grid_div").style = "display: flex";

        /*for (j = 0; j < 1; j++) {*/
            let el = document.createElement("img");
            /*let name = "photos/weehawken/weehawken-0" + (j+1) + ".jpg";
            console.log(name)
            el.innerHTML = "<img src=" + name + ">";*/
            el.innerHTML = "<img src='photos/weehawken/weehawken-01.jpg'>"
            console.log(el);
            console.log(el.innerHTML)
            document.querySelector("#grid_div").appendChild(el);
        /*}*/
    }
}

function setTitle() {
    console.log('<h1 id="photos_h1">' + t + '</h1>');
    document.getElementById('photos_h1').innerHTML = '<h1 id="photos_h1">' + t + '</h1>';
}

function changePhoto(dir) {

    if (dir ==  'left') {
        if (i == 0) i = files.length - 1
        else i--
    }
    else {
        if (i == files.length - 1) i = 0
        else i++
    }
    document.getElementById('photo').src = files[i];
}


document.addEventListener('keypress', function(e) {

    var code = e.which || e.keyCode;
    if (code == '44') changePhoto('left')
    if (code == '46') changePhoto('right')
})

document.getElementById('photo').addEventListener("click", function(e) {

    var x = e.clientX;
    let mid = document.getElementById('photo').width;
    
    if (x < mid/2) changePhoto('left')
    else changePhoto('right')
})