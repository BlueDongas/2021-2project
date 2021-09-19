function shortcut(){
    const WebName = prompt("이름","as");
    const URLADDR = prompt("URL","as");
        
    document.write("<h1> WebName :" + WebName + " </h1>");
    document.write("<h1> URL :" + URLADDR + " </h1>");

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