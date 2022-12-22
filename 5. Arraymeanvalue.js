// 배열의 평균값
// 내코드
function solution(numbers) {
    let answer = numbers.reduce(function(acc, cur){
        console.log(`acc : ${acc}, cur : ${cur}`)
        return acc + cur
    })
    return answer / numbers.length
}

solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// 참고할 다른사람 코드
function solution(numbers) {
    return numbers.reduce((acc, cur) => acc + cur) / numbers.length
}
