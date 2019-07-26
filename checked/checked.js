function condition (){
    let oDiv = document.getElementById('div1');
    let oInputs=oDiv.getElementsByTagName('input');
    return oInputs;
  } 
  
  function checkedAll(){
    let oInputs = condition();
    for(let i = 0; i < oInputs.length; i++) {
      oInputs[i].checked=true;
    }
  }
  
  function cancelAll(){
    let oInputs = condition();
    for(let i = 0; i < oInputs.length; i++) {
      oInputs[i].checked=false;
    }
  }
  
  function inverse(){
    let oInputs = condition();
    for(let i = 0; i < oInputs.length; i++) {
      if(oInputs[i].checked==true) {
        oInputs[i].checked=false;
      }
      else {
        oInputs[i].checked=true;
      }
    }
  }
