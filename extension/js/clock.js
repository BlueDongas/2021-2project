document.addEventListener("DOMContentLoaded",function(){
    let today = new Date();

    if((window.location.href).includes('setting.html')){  
        var setbtn = document.getElementById('setting_dday');
        var namebtn = document.getElementById('setting-dday-name');
        setbtn.addEventListener('click',function(){
            var dday = document.querySelector('#dday').value.replace(/-/g,'.'); // 형식 변환해서 00시로 초기화하기 위함
            var name = document.querySelector('#dday-name').value;

            localStorage.setItem('Dday-name',name);
            localStorage.setItem('Dday',dday);
            location.reload();
        });
    }
    else{
        function DisplayClock(){
            const dayClock = document.getElementById('day_clock');

            var name = localStorage.getItem('Dday-name');
            var dday = new Date(localStorage.getItem('Dday'));
            var gap = dday-today;
            var day = Math.floor(gap/(1000*60*60*24));
            var hour = Math.floor(gap%(1000*60*60*24)/(1000*60*60));

            dayClock.innerHTML = name+"까지 "+ day + "일 " + hour + "시간";
        }

        DisplayClock();

    }
});