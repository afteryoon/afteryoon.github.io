
document.getElementById("signIn").addEventListener('click', () => {

    const userID = document.getElementById("UserID");
    const pw = document.getElementById("PW");
    const key = localStorage.getItem(userID.value);
    console.log(key);
    if (!key) {
        // alert("업는아이디");
        userID.focus();
        userID.value = '';
        event.preventDefault();
        document.getElementsByClassName("longCheck")[0].style.display="inline";
        return;
    }

    if (key !== pw.value) {
        // alert("비밀번호가 다릅니다!");
        pw.focus();
        pw.value = '';
        event.preventDefault();
        document.getElementsByClassName("longCheck")[1].style.display="inline";
        return;
    }

    
    localStorage.setItem('nowLog',userID.value);
  

   

    alert(`로그인 성공! ${userID.value}님 환영합니다!`);
   
    opener.location.reload();
    close();

})

document.getElementById("signUp").addEventListener('click', () => {
    if (confirm('회원가입창으로 이동하시겠습니까?')) {
        close();
        open('./signUp.html', 'signPopup', 'width =600px, height=500px,left=100px,top=100px');
    }
});



document.getElementById("vision").addEventListener('change',(e)=>{
    const vision =e.target;
    document.getElementById('PW').type = vision.checked ?'text' :'password';
});
