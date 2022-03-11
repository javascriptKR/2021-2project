document.addEventListener('DOMContentLoaded', function() {
    let count = parseInt(localStorage.getItem('cnt'));
    if ((window.location.href).includes('setting.html')){
        var cre = document.getElementById('shortcut_button');
        var del = document.getElementById('shortcut_del');
        var clear = document.getElementById('shortcut_clear');

        cre.addEventListener('click', function() {
            // let WebName = prompt("이름","바로가기");
            console.log(document.getElementById('url-addr'))
            var url_addr = document.getElementById('url-addr').value;
            
            count = count + 1;
            localStorage.setItem('cnt', count);
            
            let url = "url"+count;
    
            localStorage.setItem(url, url_addr);
            location.reload();
        });

        del.addEventListener('click', function(){
            var arr = [];
            let idx = document.getElementById('url-del').value;
            
            for (i = 1; i <= count; i++){
                arr.push(localStorage.getItem('url'+i));
            }
            console.log(arr)
            for (i=1; i <= count; i++){
                localStorage.removeItem('url'+i);
            }
            
            arr = arr.filter((Element) => Element !== arr[idx-1]);
            console.log(arr);

            for (i = 1; i <= arr.length; i++){
                console.log(arr[i-1]);
                localStorage.setItem('url'+i, arr[i-1]);
            }
            count = arr.length;
            localStorage.setItem('cnt', arr.length);
            location.reload();
        });

        clear.addEventListener('click', function(){
            for (i=1; i <= count; i++){
                localStorage.removeItem('url'+i);
            }
            count = 0;
            localStorage.setItem('cnt', 0);
        });
    }

    else{    
        function addDiv(url_addr){
            // const newName = document.createElement('div');
            const newURL = document.createElement('div');
            const newA = document.createElement('a');
            const newImg = document.createElement('img');
            
            // newName.innerHTML = WebName;
            newURL.innerHTML = url_addr;
            newA.appendChild(newImg);
            newA.setAttribute("href", url_addr);
            newImg.setAttribute("src", "https://www.google.com/s2/favicons?domain="+url_addr);
            newImg.width = 70;
            newImg.height = 70;
            
            document.getElementById('short').appendChild(newA);
        }

        for (i=1; i <= count; i++){
            // let name = localStorage.getItem('name'+i);
            let url = localStorage.getItem('url'+i);
            addDiv(url);
        }   
    }

    // hehe.addEventListener('click', function() {
    //     // let WebName = prompt("이름","바로가기");
    //     console.log(document.getElementById('url-addr'))
    //     count = count + 1;
    //     localStorage.setItem('cnt', count);
        
    //     let url = "url"+count;

    //     localStorage.setItem(url, url_addr);

    //     addDiv(url_addr);
    //     location.reload();
    // });
});