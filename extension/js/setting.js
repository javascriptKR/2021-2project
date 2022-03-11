document.addEventListener("DOMContentLoaded",function(){
    //시계 설정
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

        // 배경 설정
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

        // D-day Color
        var f_color = document.querySelector('.first-color');
        var s_color = document.querySelector('.second-color');
        var Dir_select = document.querySelector('.direction');

        var Set_color = document.getElementById('color_picker');


        Set_color.addEventListener('click',function(){
            select = Dir_select.options[Dir_select.selectedIndex].text;
            
            localStorage.setItem('font_color_1', f_color.value);
            localStorage.setItem('font_color_2', s_color.value);
            localStorage.setItem('direction', select);
            location.reload();
        });

    }
    else if((window.location.href).includes('index.html')){
        function DisplayClock(){ //시계 출력
            const dayClock = document.getElementById('day_clock');
            
            var name = localStorage.getItem('Dday-name');
            var dday = new Date(localStorage.getItem('Dday'));
            var gap = dday-today;
            var day = Math.floor(gap/(1000*60*60*24));
            var hour = Math.floor(gap%(1000*60*60*24)/(1000*60*60))+day*24;
            var minute = Math.floor((gap%(1000*60*60))/(1000*60))+hour*60;

            if(localStorage.getItem('timeoption') == "Day"){
                dayClock.innerHTML = name+"까지 "+ (day+1) + "일 ";
            }
            else if(localStorage.getItem('timeoption') == "Hour"){
                dayClock.innerHTML = name+"까지 "+ (hour+1) + "시간";
            }
            else if(localStorage.getItem('timeoption') == "minute"){
                dayClock.innerHTML = name+"까지 "+ (minute+1) + "분";
            }
        }

        function Displaybackground(){// 배경 출력
            var body = document.getElementById('container');
            body.style.background = "url('"+localStorage.getItem('Background-url')+"')";
            body.style.backgroundRepeat = "no-repeat"
            body.style.backgroundSize = "100% 100%";
            body.style.backgroundPosition = "center center"
        }

        // function DisplayNowClock(){
            
        // }

        function FontsColorPicker(){
            var T_clock = document.querySelector('#day_clock');

            var fcolor = localStorage.getItem('font_color_1');
            var scolor = localStorage.getItem('font_color_2');
            var direc = localStorage.getItem('direction');

            T_clock.setAttribute("style", "background:linear-gradient("+ direc + "," + fcolor + "," + scolor + "); color: transparent;-webkit-background-clip:text");
        }

        function init(){
            DisplayClock();
            Displaybackground();
            FontsColorPicker();
        }

        init();
    }
});