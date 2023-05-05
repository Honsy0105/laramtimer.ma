class doten{
   constructor(){
      var dote2= document.getElementById("dote2")
      var autrep=document.getElementById("autrep")
      dote2.onclick=()=> {

        
       para2.innerHTML=`<h1 style="float: right;
       background-color: #d1cdcd;
       margin-top: 25px;
       margin-right: 20px;
       border-radius: 20px;
       width: 100px;
       height: 28px;
       box-shadow: 0px 0px 9px -2px;
       text-align: center;
       color: rgb(92, 6, 92);
         ">parametr</h1> `
        
      }
      var plus = document.getElementById("plus")
      plus.onclick =()=> {
         autrep.innerHTML=`<h1 style="float: right;
         background-color: #d1cdcd;
         margin-top: 25px;
         margin-right: 20px;
         border-radius: 20px;
         width: 100px;
         height: 28px;
         box-shadow: 0px 0px 9px -2px;
         text-align: center;
         color: rgb(92, 6, 92);">autre page</h1> `      

      }
   
   }
  

           
   }

onload= new doten();

// --------/

var step;
var chrono =10;
class demar{
   constructor(){
       
      var demar=document.getElementById("dem")

      demar.addEventListener("click",()=> {
         
         this.chronoten()
         this.dembtn()
         this.redmar()
      });
      
                 
   }
   chronoten(){

      var time = document.getElementById("time")
    step =setInterval(()=> {
         chrono=chrono+0
         time.innerText=chrono
         chrono--;

         if(chrono==0){
            chrono=10;
          
         }         
         var pause= document.getElementById("pause")
         pause.onclick=()=> {
          clearInterval(step)
         }

      },700);
    
   }
   dembtn(){
     var displaybtn= document.getElementById("displaybtn")
     displaybtn.innerHTML=`
     <button id="anuler">
     <a href="alarme.html" id="autrepg" >
     Annuler</a></>
      </button>

     <button id="pause">Pause </button>`
    

     var autrepg=document.getElementById("autrepg")
     autrepg.style.textDecoration="none"
     autrepg.style.color="#595f5f"
   }
     redmar(){
      var demar=document.getElementById("dem")
        demar.innerHTML="Redemarrer"
        demar.style.background="rgb(158 109 150)"
        demar.style.fontSize="17px"
        demar.style.width="108px"
        demar.style.textAlign="center"  
      }
     

}

onload= new demar()
