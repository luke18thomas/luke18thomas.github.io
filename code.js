let i = 0;
let k = 0;
let dark = false;
let state = 'grid';

let files = [];


for (k = 1; k <= 43; k++) {
    if (k != 2) {
    /*files.push("photos/digital/digital 0.jpg")*/
        files.push("photos/fuji/fuji" + k + ".jpg")
    }
}


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

loadPhotos("fuji")


function toggleDarkMode() {

    if (!dark) {
        
        document.querySelector('body').style.backgroundColor = 'rgb(20,20,20)';
        document.querySelector('body').style.color = 'rgb(248,248,248)';
        document.querySelector('#instagram_link').src = document.querySelector('#instagram_link').src.replace("insta", "insta_white");
        document.querySelector('#mode_switch').src = document.querySelector('#mode_switch').src.replace("dark_mode", "dark_mode_white");
        dark = true;
    }
    else {
        document.querySelector('body').style.backgroundColor = 'rgb(248,248,248)';
        document.querySelector('body').style.color = 'rgb(20,20,20)';
        document.querySelector('#instagram_link').src = document.querySelector('#instagram_link').src.replace("insta_white", "insta");
        document.querySelector('#mode_switch').src = document.querySelector('#mode_switch').src.replace("dark_mode_white", "dark_mode");
        dark = false;
    }
}

function changeView(id) {

    if (state == 'grid') {

        document.querySelectorAll('.frame img').forEach((x) => x.style = 'object-fit: contain');
        document.querySelectorAll('#photos div').forEach((x) => x.style.height = '100vw');
        document.querySelectorAll('#photos div').forEach((x) => x.style.width = '100vw');

        state = 'scroll'

    }

    else if (state == 'scroll') {
        
        document.querySelectorAll('.frame img').forEach((x) => x.style = 'object-fit: cover');
        document.querySelectorAll('#photos div').forEach((x) => x.style.height = '50vw');
        document.querySelectorAll('#photos div').forEach((x) => x.style.width = '50vw');

        state = 'grid'

    }
    document.querySelectorAll('#' + id)[0].scrollIntoView('{behavior: smooth}');
        
}

function loadPhotos(p) {
    
    /*document.querySelectorAll(".category").forEach((el) => el.style.fontWeight = 200);*/
    /*document.querySelector("#" + p).style.fontWeight = 600;*/
    
    /*let numNodes = document.querySelector('#photos').childNodes.length;*/
        
    document.querySelector("#photos").replaceChildren();
        
    files.forEach((path) => {

        /*console.log(path)*/

        if (path.indexOf(p) != -1) {

            /* in future make file name numbers like 00N */
            let k = Number(path.substring(path.length-6, path.length-4).replace('i','0'))
            let id = p + k

            /*console.log(path)
            console.log(k)*/
            
            let el = document.createElement("div");
            el.innerHTML = "<div class='frame' id='" + id + "'> <img src='" + path + "'> </div> ";

            el.innerHTML = "<div class='frame' id='" + id + "' onClick = changeView('" + id + "')> <img src='" + path + "'> </div> ";

            console.log(el.innerHTML)
            
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

/*
document.addEventListener('keypress', function(e) {

    var code = e.which || e.keyCode;
    if (code == '44') changePhoto('left')
    if (code == '46') changePhoto('right')
})
*/

/*
document.getElementById('photo').addEventListener("click", function(e) {
    
    var x = e.clientX;
    let mid = document.getElementById('photo').width;
    
    if (x < mid/2) changePhoto('left')
    else changePhoto('right')
})
*/