// let img = document.getElementById('img');

// document.onclick = shortcut;

// document.getElementById('img').onclick = function() {
// function shortcut(){
//     const WebName = prompt("이름","바로가기");
//     const URLADDR = prompt("URL","주소");
    
//     localStorage.setItem('name', WebName)
//     localStorage.setItem('url', URLADDR)
//     createDiv(WebName, URLADDR);
// }

// function createDiv(WebName, URLADDR) {
//     const newDiv = document.createElement('div');
    
//     const newText = document.createTextNode(WebName);

//     newDiv.appendChild(newText);
//     // newDiv.onclick = location.href="https://"+URLADDR;
    
//     document.body.appendChild(newDiv);
// } 

// function deleteDiv() {
//     const div = document.getElementById('my_div');

//     div.remove();
// }

let WebName;
let URLADDR;

document.addEventListener('DOMContentLoaded', function() {
    var hehe = document.getElementById('plus');

    function addDiv(){
        const newName = document.createElement('div');
        const newURL = document.createElement('div');

        const shortcut = document.createElement('div');
        
        shortcut.className = "shortcut";
        
        newName.innerHTML = WebName;
        newURL.innerHTML = URLADDR;

        shortcut.appendChild(newName);
        shortcut.appendChild(newURL);

        document.getElementById('short').appendChild(shortcut);
    }

    hehe.addEventListener('click', function() {
        WebName = prompt("이름","바로가기");
        URLADDR = prompt("URL","주소");

        localStorage.setItem('name', WebName);
        localStorage.setItem('url', URLADDR);

        addDiv();
    });
    
});