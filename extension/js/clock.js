document.addEventListener("DOMContentLoaded",function(){
    let today = new Date();
    let hours = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    if((window.location.href).includes('setting.html')){  
        var setbtn = document.getElementById('setting_dday');
        var namebtn = document.getElementById('setting-dday-name');
        var timeSel = document.getElementById('timesel');
  
        setbtn.addEventListener('click',function(){
            var dday = document.querySelector('#dday').value.replace(/-/g,'.'); // 형식 변환해서 00시로 초기화하기 위함
            var name = document.querySelector('#dday-name').value;
            var timeOption = timeSel.options[timeSel.selectedIndex].text;

            localStorage.setItem('timeoption',timeOption);
            localStorage.setItem('Dday-name',name);
            localStorage.setItem('Dday',dday);
            location.reload();
        });
    }
    else if((window.location.href).includes('index.html')){
        function DisplayClock(){
            const dayClock = document.getElementById('day_clock');
            
            var name = localStorage.getItem('Dday-name');
            var dday = new Date(localStorage.getItem('Dday'));
            var gap = dday-today;
            var day = Math.floor(gap/(1000*60*60*24));
            var hour = Math.floor(gap%(1000*60*60*24)/(1000*60*60))+day*24;
            var minute = Math.floor((gap%(1000*60*60))/(1000*60))+hour*60;

            if(localStorage.getItem('timeoption') == "Day"){
                dayClock.innerHTML = name+"까지 "+ day + "일 ";
            }
            else if(localStorage.getItem('timeoption') == "Hour"){
                dayClock.innerHTML = name+"까지 "+ hour + "시간";
            }
            else if(localStorage.getItem('timeoption') == "minute"){
                dayClock.innerHTML = name+"까지 "+ minute + "분";
            }
        }

        // function DisplayNowClock(){
            
        // }

        function init(){
            DisplayClock();
            setInterval(DisplayClock,1000*60);
        }

        init();
    }
});