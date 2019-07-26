window.onload = function() {
    let oDiv = document.getElementById('div1');
    let oBtn = oDiv.getElementsByTagName('input');
    let aDiv = oDiv.getElementsByTagName('div');

    for(let i = 0; i < oBtn.length; i++){
        oBtn[i].onclick = function() {
            for(let j = 0; j < oBtn.length; j++) {
                oBtn[j].className="";
                aDiv[j].style.display='none';
            }
            this.className="active";
            aDiv[i].style.display='block';
        }
    }
}


