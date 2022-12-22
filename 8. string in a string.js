// 문자열속에 문자열
// 내코드
function solution(str1, str2) {
    return str1.indexOf(str2) === -1 ? 2 : 1
}

solution('ab6CDE443fgh22iJKlmn1o', '6CD')

// 1을 한글자씩 자른다
// 하나씩 탐색하면서 2의 1글자가 있으면 2의 2글자 2의 3글자 이런식으로 탐색
// 없으면 2의 1글자만 계속 탐색

// 다른사람 풀이
function solution(str1, str2) {
    return str1.includes(str2) ? 1 : 2;
}
