class dote{
   constructor(){
      var dote=document.getElementById("dote")
        

      dote.onclick=()=> {
         var paramert=document.getElementById("parametre")
         paramert.innerHTML =`<h1 style="float: right;
            background-color: #a6a4a4;
            margin-top: 35px;
            margin-right: 12px;
            border-radius: 20px;
            width: 100px;
            height: 28px;
            box-shadow: 1px 0px 15px -1px;
            text-align: center;
            color: rgb(92, 6, 92)">paramert</h1>`
            
      }

   }
}
onload=new dote()
// ------------------ /

    var ret;
    var serven=0;
    var second=0;
   var minute=0;
 var demarrer=document.getElementById("demarrer")
 var tour = document.getElementById("tour")
    demarrer.addEventListener("click", ()=> {
      
      ret =setInterval(()=> {
         serven=serven+1
         var mili=document.getElementById("mili")
         mili.innerText=serven;
         setseco()
         setmini()
        
      },10)
      this.demar()
      
    })
    tour.addEventListener("click", ()=> {

      demarrer.innerHTML="Continue"
       demarrer.style.background="rgb(62, 7, 135)"
      clearInterval(ret);
      
   })

 function setseco(){
   if(serven==99){
      var seco = document.getElementById("seco")
       serven=0;
       second=second+1
       seco.innerText = second +":" 
    }
}

function setmini() {
   if(second==59){
       second=0;
       minute=minute+1
        var mini= document.getElementById("mini")
      mini.innerText=minute + " : "

    }

}
var demar;
function demar(){
   if(demar===false){
      demar==true
      demarrer.innerHTML="demarrer"

   }
   else{
      demar==true;
      tour.innerHTML="Arreter"

   }
    
}

 
 