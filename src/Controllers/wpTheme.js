function loadXMLDoc(url,callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText)
       return callback(this.responseText);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.setRequestHeader('Access-Control-Allow-Origin','*');
    xhttp.send();
  }
  export function readSite(url){
      return loadXMLDoc(url,(res)=>{
          return res;
      })
  }