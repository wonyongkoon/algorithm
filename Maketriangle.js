// // 삼각형 만들기

function solution(sides) {
    const max = Math.max.apply(null,sides) // 최대값을 구한다.
    const answer = sides.filter(item => item < max).reduce((acc, cur) => acc+cur) ;
    return (max < answer) ? 1 : 2;
}



function solution(sides) {
    // 배열값을 다더한다 그 후 최대값을 뺸다.
    // 이게 최대값보다 작으면 2 크면 1
    const max = Math.max.apply(null, sides)
    const value = sides.reduce((acc, cur) => acc+cur) - max
    const answer = max < value ? 1 : 2
    return answer
    
}

solution([1,2,3])
// 가장 높은 값을 배열에서 찾는다.
// 가장 높은 값 빼고 나머지 두개를 더한다
// 비교해서 더한값이 크면 1 작으면 2

// 다른사람 풀이
function solution(sides) {
    sides = sides.sort((a,b) => a-b)
    return sides[0]+sides[1] > sides[2] ? 1 : 2;
}