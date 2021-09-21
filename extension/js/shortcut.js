let img = document.getElementById('img');

document.onclick = shortcut;

function shortcut(){
    const WebName = prompt("이름","바로가기");
    const URLADDR = prompt("URL","주소");
        
    createDiv();
}

function createDiv() {
    const newDiv = document.createElement('div');
    
    const newText = document.createTextNode('안녕하세요');
    
    newDiv.appendChild(newText);
    
    document.body.appendChild(newDiv);
} 

function deleteDiv() {
    const div = document.getElementById('my_div');

    div.remove();
} 