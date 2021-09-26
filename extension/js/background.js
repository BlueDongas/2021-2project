document.addEventListener("DOMContentLoaded",function(){

    if((window.location.href).includes('setting.html')){
        var backbtn = document.getElementById('setting_background');
        var closebtn = document.getElementById('closebtn');

        backbtn.addEventListener('click',function(){
            var backurl = document.querySelector('#background-url').value;
            console.log(backurl);
            localStorage.setItem('Background-url',backurl);
            location.reload();
        });

        closebtn.addEventListener('click',function(){
            history.back();
        });
    }
    else if((window.location.href).includes('index.html')){
        document.getElementById('body').style.background = "url('"+localStorage.getItem('Background-url')+"') no-repeat 50% 50%";
    }
});