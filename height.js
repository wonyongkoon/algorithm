// 머쓱이보다 키 큰 사람
// 내코드
function solution(array, height) {
    var answer = 0;
    array.map(function(e){
        if(e > height){
            answer++;
        }
    })
    return answer;
}




// 다른사람 코드
function solution(array, height) {
    var answer = array.filter(item => item > height);
    console.log(answer)
    return answer.length;
}


solution([149, 180, 192, 170], 167)
