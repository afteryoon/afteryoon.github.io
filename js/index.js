
document.querySelector(".sns-pictogram").addEventListener('click',() =>{
    
});

document.getElementById("signPop").addEventListener('click',()=>{
   const popup =open('./signUp.html','signPopup','width =600px, height=500px,left=100px,top=100px');

});
document.getElementById("loginPop").addEventListener('click',()=>{
   open('./login.html','loginPopup','width =600px, height=500px,left=100px,top=100px');
   reload();
});
document.getElementById("logOut").addEventListener('click',()=>{
   if(confirm('로그아웃하시겠습니까?')){
       localStorage.setItem("nowLog","logNot");
       // document.getElementsByClassName('checkLog')[3].innerHTML='코딩하기<br>좋은하루입니다';
      location.reload();
   }

});

function textVision(){
   const addMsg=document.getElementsByClassName("addMsg");
   addMsg[0].style.display="inline";
   addMsg[1].style.display="inline";
   document.getElementById("addTextVision").style.display="none";
   document.getElementById("addTextHidden").style.display="inline";

   // addTextVision
};

function textHidden(){
   const addMsg=document.getElementsByClassName("addMsg");
   addMsg[0].style.display="none";
   addMsg[1].style.display="none";
   document.getElementById("addTextVision").style.display="inline";
   document.getElementById("addTextHidden").style.display="none";

};