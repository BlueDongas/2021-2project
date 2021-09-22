// let img = document.getElementById('img');

document.onclick = shortcut;

// document.getElementById('img').onclick = function() {
function shortcut(){
// img.onclick = function() {
    const WebName = prompt("이름","바로가기");
    const URLADDR = prompt("URL","주소");
        
    createDiv(WebName, URLADDR);
}

function createDiv(WebName, URLADDR) {
    const newDiv = document.createElement('div');
    
    const newText = document.createTextNode(WebName);

    newDiv.appendChild(newText);
    newDiv.onclick = location.href="https://"+URLADDR;
    
    document.body.appendChild(newDiv);
} 

function deleteDiv() {
    const div = document.getElementById('my_div');

    div.remove();
}