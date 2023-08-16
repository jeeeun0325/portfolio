// 삼항조건연산자

// let a=10
// let b=30

// let result=a>b?'javascript':'hello'/* 물음표 다음이 true :다음이 false */
// document.write(result)

// 
// var mon=prompt("현재는 몇 월 입니까?","0")
// if(mon>=9 && mon<=11){                           //9~11
//     document.write('독서의 계절 가을이네요!')
// }else if(mon>=6 && mon<=8){                    //6~8
//     document.write('여행가기 좋은 여름이네요!')
// }else if(mon>=3 && mon<=5){                    //3~5
//     document.write('햇살 가득한 봄이네요!')
// }else{                                                         //나머지입력
//     document.write('스키의 계절 겨울이네요!')
// }

//
var id='easy1004'
var pw='112233'

var user_id=prompt('아이디는?','')
var user_pw=prompt('비밀번호는?','');

if(id===user_id){
    if(pw==user_pw){
        document.write(user_id+'님 반갑습니다!')

    }else{
        alert('비밀번호가 일치하지 않습니다.');
        location.reload();                       //브라우저 새로고침

    }
}else{
    alert('아이디가 일치하지 않습니다.')
    location.reload();

}