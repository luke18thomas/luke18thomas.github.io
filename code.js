let i = 0;
let k = 0;
let dark = false;
let state = 'grid';

let files = [];


for (k = 100; k > 0; k--) {
    
        let n = '00' + k;
        n = n.substring(n.length - 2, n.length);

    if (k <= 44) {
        files.push("photos/fuji/fuji-" + n + ".jpg");
    }
    if (k <= 12) {
        files.push("photos/film/film-" + n + ".jpg");
    }
}


loadPhotos("fuji");


function toggleDarkMode() {

    if (!dark) {
        
        document.querySelector('body').style.backgroundColor = 'rgb(22,22,24)';
        document.querySelector('body').style.color = 'rgb(250,250,250)';
        document.querySelector('#instagram_link').src = document.querySelector('#instagram_link').src.replace("insta", "insta_white");
        document.querySelector('#mode_switch').src = document.querySelector('#mode_switch').src.replace("dark_mode", "dark_mode_white");
        dark = true;
    }
    else {
        document.querySelector('body').style.backgroundColor = 'rgb(250,250,250)';
        document.querySelector('body').style.color = 'rgb(22,22,24)';
        document.querySelector('#instagram_link').src = document.querySelector('#instagram_link').src.replace("insta_white", "insta");
        document.querySelector('#mode_switch').src = document.querySelector('#mode_switch').src.replace("dark_mode_white", "dark_mode");
        dark = false;
    }
}

function changeView(path) {

    /* grid > overlay */
    if (state == 'grid') {

        document.getElementById("overlay_img").src = path;
        document.querySelector("#overlay").style.display = "flex";
        state = 'overlay';
    }

    /* overlay > grid */
    else if (state == 'overlay') {

        document.querySelector("#overlay").style.display = "none";
        state = 'grid';
    }

    /*document.querySelectorAll('#' + path)[0].scrollIntoView({
            behavior: 'auto',*/ /*smooth*/ /*
            block: 'center',
            inline: 'center'
    });*/
        
}

function loadPhotos(p) {
    
    /*document.querySelectorAll(".category").forEach((el) => el.style.fontWeight = 200);*/
    /*document.querySelector("#" + p).style.fontWeight = 600;*/
    
    /*let numNodes = document.querySelector('#photos').childNodes.length;*/
    
    document.querySelector("#photos").replaceChildren();
        
    files.forEach((path) => {

        /*console.log(path)*/

        if (path.indexOf(p) != -1) {

            let n = path.substring(path.indexOf('-')+1, path.indexOf('-') + 3);
            let id = p + '-' + n;
            
            let el = document.createElement("div");
            el.innerHTML = "<div class='frame' id='" + path + "' onClick = changeView('" + path + "')> <img src='" + path + "'> </div> ";
            
            document.querySelector("#photos").append(el);

            }
        })

}

function setTitle() {
    console.log('<h1 id="photos_h1">' + t + '</h1>');
    document.getElementById('photos_h1').innerHTML = '<h1 id="photos_h1">' + t + '</h1>';
}

function setPhoto(k) {
    i = k-1;
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

document.getElementById("overlay_img").addEventListener("click", function(e) {
    
    var x = e.clientX;
    let mid = document.getElementById("overlay_img").width;

    console.log("overlay_img");
    
    if (x < mid/2)
        console.log("left")
    else
        console.log("right")
    
})
