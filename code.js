var i = 0;

var pick = "";

var files = [];

files.push("photos/digital/digital-01.jpeg");
files.push("photos/digital/digital-02.jpeg");
files.push("photos/digital/digital-03.jpeg");
files.push("photos/digital/digital-04.jpeg");
files.push("photos/digital/digital-05.jpeg");
files.push("photos/digital/digital-06.jpeg");
files.push("photos/digital/digital-07.jpeg");
files.push("photos/digital/digital-08.jpeg");
files.push("photos/digital/digital-09.jpeg");
files.push("photos/digital/digital-10.jpeg");
files.push("photos/digital/digital-11.jpeg");
files.push("photos/digital/digital-12.jpeg");

files.push("photos/film/film-06.jpg");
files.push("photos/film/film-03.jpg");
files.push("photos/film/film-04.jpg");
/*files.push("photos/film/film-05.jpg");*/
files.push("photos/film/film-07.jpg");
files.push("photos/film/film-08.jpg");
files.push("photos/film/film-09.jpg");
files.push("photos/film/film-12.jpg");
files.push("photos/film/film-10.jpg");
files.push("photos/film/film-11.jpg");
files.push("photos/film/film-02.jpg");
files.push("photos/film/film-01.jpg");

loadPhotos("digital")


function changePage(p) {

    document.querySelectorAll(".page").forEach((page) => page.style = "display: none");
    document.querySelectorAll("#" + p).forEach((page) => page.style = "display: flex");

    if (p != "menu") { loadPhotos(p) }

    /*document.querySelector(".page").scrollTo(0,0)*/
        
}

function loadPhotos(p) {
    
    /*document.querySelectorAll(".category").forEach((el) => el.style.fontWeight = 200);*/
    /*document.querySelector("#" + p).style.fontWeight = 600;*/
    
    let numNodes = document.querySelector('#photos').childNodes.length;
        
    document.querySelector("#photos").replaceChildren();
        
    files.forEach((path) => {

        console.log(path)

        if (path.indexOf(p) != -1) {
            
            let k = Number(path.substring(path.length-6, path.length-4))
            
            let el = document.createElement("div");
            el.innerHTML = "<div class='frame'> <img src='" + path + "'> </div> ";
            
            document.querySelector("#photos").append(el);

            }
        })

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
