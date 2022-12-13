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

files.push("Film/1_000213600007.jpg")
files.push("Film/2_000213600011.jpg")
files.push("Film/3_000213590005.jpg")
files.push("Film/4_000105150022.jpg")
files.push("Film/5_000017810007.jpg")
files.push("Film/6_000017820029.jpg")
files.push("Film/7_000036930017.jpg")
files.push("Film/8_000017810001.jpg")
files.push("Film/9_000036940002.jpg")
files.push("Film/10_000017810022.jpg")
files.push("Film/11_000017810006.jpg")
files.push("Film/12_000213600023.jpg")
