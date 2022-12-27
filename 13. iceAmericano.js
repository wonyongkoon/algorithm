// 아이스 아메리카노
// 내코드
function solution(money) {
    // 아메리카노는 5500원
    // 머쓱이가 가지고 있는 돈을 5500으로 나눔 / 나머지연산 함
    // 몫과 나머지연산 값을 배열에 추가해서 반환
    const answer = [Math.floor(money / 5500),money % 5500]
    // console.log([Math.floor(money / 5500)],[money % 5500])
    console.log(answer)
    return ([Math.floor(money / 5500),money % 5500])
    
}

solution(5500)
solution(15000)
// 다름사람 코드