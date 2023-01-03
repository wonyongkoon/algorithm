// OX 퀴즈
// 내zh드
function solution(quiz) {
    // 배열중 하나의 값을 가져온다
    // = 을 기준으로 나눈다
    // = 기준 앞을 계산하고 뒤랑 비교한다
    // 같으면 O출력 틀리면 X출력
    const answer = [];
    quiz.map(function(e){
        let result = e.split("=")
        if(eval(result[0]) === parseInt(result[1])){
            answer.push("O")
        }else{
            answer.push("X")
        }
    })
    return answer;
}

solution(["3 - 4 = -3", "5 + 6 = 11"])

// 배열이 들어왔을때 값을 검사 후 O / X 출력
// 배열이 참이면 출력 배열에 O 넣고 아니라면 X 넣음 (push)