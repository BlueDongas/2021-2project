document.addEventListener("DOMContentLoaded",function(){
    let today = new Date();

    if((window.location.href).includes('setting.html')){  
        var setbtn = document.getElementById('setting_dday');
        setbtn.addEventListener('click',function(){
            var dday = document.querySelector('#dday').value.replace(/-/g,'.');
            localStorage.setItem('Dday',dday);
            location.reload();
        });
    }
    else{
        function DisplayClock(){
            const dayClock = document.getElementById('day_clock');
            const hourClock = document.getElementById('hour_clock');

            var dday = new Date(localStorage.getItem('Dday'));
            var gap = dday-today;
            var day = Math.floor(gap/(1000*60*60*24));
            var hour = Math.floor(gap%(1000*60*60*24)/(1000*60*60));

            dayClock.innerHTML = "D-DAY까지 "+ day + "일";
            hourClock.innerHTML = hour + "시간";
        }

        DisplayClock();

    }
});