let i = 0;
let k = 0;
let dark = false;
let state = 'grid';

let files = [];


for (k = 25; k > 0; k--) {
    /*files.push("photos/digital/digital 0.jpg")*/

        let n = '00' + k;
        n = n.substring(n.length - 2, n.length);

    if (k <= 25) {
        files.push("photos/newyork_winter/newyork_winter-" + n + ".jpg")
    }
    if (k <= 23) {
        files.push("photos/newyork_spring/newyork_spring-" + n + ".jpg")
    }
    if (k <= 12) {
        files.push("photos/film/film-" + n + ".jpg")
    }
    if (k <= 24) {
        files.push("photos/in_progress/in_progress-" + n + ".jpg")
    }
}


loadPhotos("newyork_winter")


function toggleDarkMode() {

    if (!dark) {
        
        document.querySelector('body').style.backgroundColor = 'rgb(28,28,30)';
        document.querySelector('body').style.color = 'rgb(250,250,250)';
        document.querySelector('#instagram_link').src = document.querySelector('#instagram_link').src.replace("insta", "insta_white");
        document.querySelector('#mode_switch').src = document.querySelector('#mode_switch').src.replace("dark_mode", "dark_mode_white");
        dark = true;
    }
    else {
        document.querySelector('body').style.backgroundColor = 'rgb(250,250,250)';
        document.querySelector('body').style.color = 'rgb(28,28,30)';
        document.querySelector('#instagram_link').src = document.querySelector('#instagram_link').src.replace("insta_white", "insta");
        document.querySelector('#mode_switch').src = document.querySelector('#mode_switch').src.replace("dark_mode_white", "dark_mode");
        dark = false;
    }
}

function changeView(id) {

    if (state == 'grid') {

        document.querySelectorAll('.frame img').forEach((x) => x.style = 'object-fit: contain');
        document.querySelectorAll('#photos div').forEach((x) => x.style.width = 'auto');
        document.querySelectorAll('#photos div').forEach((x) => x.style.height = 'auto');

        state = 'scroll'

        /* save current scroll state to return to */
        /* if the scroll view picture is still within view */

    }

    else if (state == 'scroll') {
        
        document.querySelectorAll('.frame img').forEach((x) => x.style = 'object-fit: cover');
        document.querySelectorAll('#photos div').forEach((x) => x.style.width = '49vw');
        document.querySelectorAll('#photos div').forEach((x) => x.style.height = '65vw');

        state = 'grid'

        /*document.querySelectorAll('.frame').forEach((x) => x.style = 'display: none')
        document.querySelectorAll('#' + id)[0].style = 'display: flex'
        document.querySelectorAll('#' + id)[0].style.width = 'auto';
        document.querySelectorAll('#' + id)[0].style.height = 'auto';*/
    }

    document.querySelectorAll('#' + id)[0].scrollIntoView({
            behavior: 'auto', /*smooth*/
            block: 'center',
            inline: 'center'
    });
        
}

function loadPhotos(p) {
    
    /*document.querySelectorAll(".category").forEach((el) => el.style.fontWeight = 200);*/
    /*document.querySelector("#" + p).style.fontWeight = 600;*/
    
    /*let numNodes = document.querySelector('#photos').childNodes.length;*/
    
    document.querySelector("#photos").replaceChildren();
        
    files.forEach((path) => {

        /*console.log(path)*/

        if (path.indexOf(p) != -1) {

            let n = path.substring(path.indexOf('-')+1, path.indexOf('-') + 3)
            let id = p + '-' + n
            
            let el = document.createElement("div");
            el.innerHTML = "<div class='frame' id='" + id + "' onClick = changeView('" + id + "')> <img src='" + path + "'> </div> ";
            
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