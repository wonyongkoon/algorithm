// 문자열 분리

// 첫번째 읽은 값이랑 같은걸 카운터 하는 변수 [eq]
// 첫번째 읽은 값이랑 다른걸 카운터 하는 변수 [df]
// 분리한 문자열을 담을 배열 [arr]

// 문자열 s를 split로 분해한다.
// 하나씩 읽으면서 첫번째값 이랑 같으면 eq를 +1 다르면 df를 +1 해준다.
// 그리고 eq와 df가 같아지면 앞에 읽었던 문자를 하나의 문자열로 만들어서 arr 배열에 담아준다.

// 그렇게 분리해서 arr의 길이를 출력한다.


// 첫번째 값을 tmp에 넣고 eq를 증가시킨다.
// 두번째 값부터는 tmp[0]값과 분해한 e값을 비교한다.




function solution(s) {
    const arr = []  // 분리한 문자열을 담을 배열
    const tmp = []  // 임시로 저장할 배열
    let eq = 0; // 같은값 카운터
    let df = 0; // 다른값 카운터

    s.split("").map(function(e){
        // 배열이 비거나 첫번쨰 값이랑 같다면 배열에 넣는다.
        if(tmp.length === 0 || tmp[0] === e ){
            tmp.push(e)
            eq++
            if(eq === df){
                arr.push(tmp.join(""))
                tmp.length = 0
                eq = 0;
                df = 0;
            }
        }
        else if(tmp[0] !== e){
            tmp.push(e)
            df++
            if(eq === df){
                arr.push(tmp.join(""))
                tmp.length = 0
                eq = 0;
                df = 0;
            }
        }
    })


    if(tmp[0] !== undefined){
        return arr.length + 1
    }
    else{
        return arr.length - 1
    }
}




solution("banana")
// ba - na - na
// 답 : 3
solution("abracadabra")
// ab - ra - ca - da - br - a
// 답 : 6
// solution("aaabbaccccabba")





