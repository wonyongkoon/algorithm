// 각도기
// 내코드
function solution(angle) {
    var answer = 0;
    if(angle > 0 && angle < 90)
        answer = 1;
    else if(angle === 90)
        answer = 2;
    else if(angle > 90 && angle < 180)
        answer = 3;
    else if(angle === 180)
        answer = 4;
    else
        console.log("범위를 초과했습니다")
    return answer;
}

// 0 < angle < 90 = 예각 => 1
// 90 = 직각 => 2
// 90 < angle < 180 = 둔각 => 3
// 180 = 평각 => 4

// 참고할만한 다른사람 코드
function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle>=x).length;
}


function solution(angle) {
    return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}