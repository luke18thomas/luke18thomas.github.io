document.addEventListener('keypress', function(e) {

    var code = e.which || e.keyCode;
    if (code == '44') changePhoto('left')
    if (code == '46') changePhoto('right')
})

document.getElementById('photo').addEventListener("click", function(e) {

    var x = e.clientX;
    let mid = document.getElementById('photo').width
    
    if (x < mid/2) changePhoto('left')
    else changePhoto('right')
})

/*document.getElementByClassName('h1')*/

function changePhoto(dir) {

    if (dir ==  'left') {
        if (i == 0)
            i = files.length - 1
        else i--
    }
    else {
        if (i == files.length - 1)
            i = 0
        else i++
    }

    document.getElementById('photo').src = files[i]
}

var i = 0;

var files = [];

files.push("1_000213600007.jpg")

