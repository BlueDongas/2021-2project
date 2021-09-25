document.addEventListener('DOMContentLoaded', function() {
    var hehe = document.getElementById('plus');
    var clear = document.getElementById('clear');
    let count = parseInt(localStorage.getItem('cnt'));
    
    function addDiv(WebName, URLADDR){
        const newName = document.createElement('div');
        const newURL = document.createElement('div');
        const newA = document.createElement('a');
        const newImg = document.createElement('img');
        
        newName.innerHTML = WebName;
        newURL.innerHTML = URLADDR;
        newA.appendChild(newImg);
        newA.setAttribute("href", 'https://'+URLADDR);
        newImg.setAttribute("src",'http://'+URLADDR+"/favicon.ico");
        newImg.width = 70;
        newImg.height = 70;
        
        document.getElementById('short').appendChild(newA);
    }

    for (i=1; i <= count; i++){
        let name = localStorage.getItem('name'+i);
        let url = localStorage.getItem('url'+i);
        console.log(name, url);
        addDiv(name, url);
    }

    hehe.addEventListener('click', function() {
        let WebName = prompt("이름","바로가기");
        let URLADDR = prompt("URL","주소");
        count = count + 1;
        localStorage.setItem('cnt', count);
        
        let name = "name"+count;
        let url = "url"+count;

        localStorage.setItem(name, WebName);
        localStorage.setItem(url, URLADDR);

        addDiv(WebName, URLADDR);
    });
    clear.addEventListener('click', function(){
        localStorage.clear();
        localStorage.setItem('cnt', 0);
        location.reload();
    });
});