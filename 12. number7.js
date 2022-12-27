// 7의 갯수
// 내코드
function solution(array) {
    const str = array.reduce((acc, cur) => String(acc) + String(cur))
    const answer = str.split("").filter(item => item === "7").length
    return answer;
}

solution([11,7,11])

// 다른사람 코드
function solution(array) {
    console.log(array.join("").split('7'))
    return array.join('').split('7').length-1;
}