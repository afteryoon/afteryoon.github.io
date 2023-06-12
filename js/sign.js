
           
        /**
         * 회원가입
         */


        document.memberFrm.addEventListener('submit',()=>{
            const userId = document.getElementById("UserID");
            const PW = document.getElementById("PW");
            const PWC = document.getElementById("PWC");
            const email = document.getElementById("email");

            const RXID= /^[a-zA-Z\d]{4,11}$/;
            if(!RXID.test(userId.value)){
                // alert("대/소문자, 숫자를 사용한 4~12자리를 입력하세요");
                document.getElementsByClassName("checkLong")[0].style.display='inline';
                userId.select();
                event.preventDefault();
                return;
            }
            
            
            const key = localStorage.getItem(userId.value);
        
           
            if(key){
                // alert('이미 존재하는 아이디입니다. 다른 아이디를 사용해주세요.');
                document.getElementsByClassName("checkLong")[1].style.display='inline';
               userId.select();
                event.preventDefault();
                return;
            }



            const RXPWArr= [/^.{5,15}$/, /\d/, /[a-zA-Z]/, /[\\*!&]/];
            
            for (let i = 0; i < RXPWArr.length; i++) {
                if(!RXPWArr[i].test(PW.value)){
                    // alert("대/소문자와 특수문자(\*!&)를 포함한 4~15자리 수를 입력하세요.");
                    document.getElementsByClassName("checkLong")[2].style.display='inline';
                    PW.select();
                    event.preventDefault();
                   return;
                }           
            }

            if(PW.value !== PWC.value){
                // alert("비밀번호를 확인해주세요.");
                document.getElementsByClassName("checkLong")[3].style.display='inline';
                    PWC.select();
                    event.preventDefault();
                    return;
            }
            const RXEmail= /^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/;

            if(!RXEmail.test(email.value)){
                // alert('적합한 이메일 형식이 아닙니다.');
                document.getElementsByClassName("checkLong")[4].style.display='inline';
                event.preventDefault();
                email.select();
                return;
            }


           const idVal=userId.value;
           const pwVal=PW.value;
            localStorage.setItem(`${idVal}`,pwVal);
           

           const userInfo= new UserInfo(userId.value,PW.value,email.value);
            console.log(userInfo);

           const userInfos= JSON.parse(localStorage.getItem('userInfos'))||[];
            userInfos.push(userInfo);
            const jsonStr=JSON.stringify(userInfos);
           localStorage.setItem('userInfos',jsonStr);

            alert(`${userId.value}님 환영합니다`);
            close();
            open('./login.html','signinPopup','width =600px, height=500px,left=100px,top=100px');
        });

        class UserInfo {
            constructor(id,pw,email){
                this.id=id;
                this.pw=pw;
                this.email=email;
            }

        };

        document.querySelector(".sign_in").addEventListener('click',()=>{
                if(confirm('로그인 화면으로 이동하시겠습니까?')){
                    close();
                    open('./login.html','loginPopup','width =600px, height=500px,left=100px,top=100px');
                }else
                    return false;

                console.log();
            });

            document.getElementById("vision").addEventListener('click',()=>{
                const vision= document.querySelector("#vision").checked;
                const PW = document.getElementById("PW");
                const PWC = document.getElementById("PWC");

                // if(vision){
                //     PW.type ='text';
                // }else
                // PW.type ='password';

                PW.type= vision ?'text':'password'; 
                PWC.type= vision ?'text':'password'; 
            });