// 내 코드
function solution(array, n) {
    var answer = 0;
    array.map(function(e){
        if(e === n){
            answer++;
        }
    })
    return answer;
}


solution([1,1,2,3,4,5], 1)

// // 참고할만한 다른사람 코드
// function solution(array, n) {
//     var answer = 0;
//     let Array = array.filter((item) => item === n)
//     answer = Array.length

//     return answer;
// }

// function solution(array, n) {
//     return array.filter(v=>v===n).length;
// }