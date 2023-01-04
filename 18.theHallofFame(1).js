// 명예의 전당 (1)
// score를 하나씩 가져와서 배열 tmp에 정렬하며 추가함
// 추가하면서 tmp배멸의 마지막 값을 answer 배열에 추가함
// k번째 이후 부터는 result 배열에서 k번째를 추가함

// k번까지는 배열에 정렬하면서 추가함
// k번 이후 부터는 비교해서 추가하고 k번째를 출력함

function solution(k, score) {
    const tmp = [];
    const answer = [];
    score.map(function(e){
        tmp.push(e)   
        tmp.sort((a,b) => b-a)  
        if(k > tmp.length-1){
            answer.push(tmp[tmp.length-1])
        }else{
            answer.push(tmp[k-1])
        }
    })
    return answer
}



solution(3,	[10, 100, 20, 150, 1, 100, 200])
// [10, 10, 10, 20, 20, 100, 100]

solution(4,	[0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])
// [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]



