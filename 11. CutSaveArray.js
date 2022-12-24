// 잘라서 배열로 저장
// 내코드
function solution(my_str, n) {
    let answer = [];
    const srtArr = my_str.split("")
    while(srtArr.length > 0)
        answer.push(srtArr.splice(0,n).join(""))
    return answer
}

solution("abc1Addfggg4556b",6)

// 6개씩 자른다음에
// 문자열에서 삭제하고 배열에 추가
