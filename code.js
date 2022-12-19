var i = 0;

var pick = "";

var files = [];

files.push("photos/weehawken/weehawken-01.jpg");
files.push("photos/weehawken/weehawken-02.jpg");
files.push("photos/weehawken/weehawken-03.jpg");
files.push("photos/weehawken/weehawken-04.jpg");
files.push("photos/weehawken/weehawken-05.jpg");
files.push("photos/weehawken/weehawken-06.jpg");
files.push("photos/weehawken/weehawken-07.jpg");
files.push("photos/weehawken/weehawken-08.jpg");
files.push("photos/weehawken/weehawken-09.jpg");

loadPhotos("weehawken")


function changePage(p) {

    document.querySelectorAll(".page").forEach((page) => page.style = "display: none")
    document.querySelectorAll("#" + p + "_div").forEach((page) => page.style = "display: flex");

    if (p != "menu") { loadPhotos(p) }

    /*document.querySelector(".page").scrollTo(0,0)*/
        
}

function loadPhotos(p) {

    let numNodes = document.querySelector('#photos').childNodes.length

    if (numNodes != files.length) {
        
        document.querySelector("#photos").replaceChildren();
        
        files.forEach((path) => {

            let k = Number(path.substring(path.length-6, path.length-4))
            
            let el = document.createElement("div");
            el.innerHTML =
                    "<div class='thumbnail'> <img src='" + path + "'> </div> ";
            document.querySelector("#photos").append(el);
        })
        
    }
}

function setTitle() {
    console.log('<h1 id="photos_h1">' + t + '</h1>');
    document.getElementById('photos_h1').innerHTML = '<h1 id="photos_h1">' + t + '</h1>';
}

function setPhoto(k) {
    i = k-1
    document.getElementById('photo').src = files[i];
}

function changePhoto(dir, source) {
    
    if (dir ==  'left') {
        if (i == 0) i = files.length - 1
        else i--
    }
    else if (dir == 'right') {
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

/*
document.getElementById('photo').addEventListener("click", function(e) {
    
    var x = e.clientX;
    let mid = document.getElementById('photo').width;
    
    if (x < mid/2) changePhoto('left')
    else changePhoto('right')
})
*/
