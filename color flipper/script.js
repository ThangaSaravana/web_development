const colorid = document.getElementById("color")
const btn = document.getElementById("butt")
const backg = document.getElementById("container")
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

btn.addEventListener('click',randombg)

function randombg(){
    let hexval='#'
    for(let i=0;i<=5;i++){
        // we can give this in a single line hexval += randomhex()
        hexval = hexval + randomhex()
    }
    backg.style.backgroundColor = hexval
    colorid.innerHTML = hexval
}
function randomhex(){
    let randomindex = Math.floor(Math.random()*16)
    return hex[randomindex]
}


