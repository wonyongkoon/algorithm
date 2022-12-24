// 세균증식
// 내코드
function solution(n, t) {
    for(let i = 0 ; i < t; i++){
        n = n * 2
    }
    return n;
}

solution(2,10)

// 다른사람 코드
function solution(n, t) {
    console.log(n << t)
    return n << t;
  }