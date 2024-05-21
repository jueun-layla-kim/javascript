// 연산자
// 1. 산술 연산자
{
    // console.log(100 + 10)
    // console.log(100 - 10)
    // console.log(100 * 10)
    // console.log(100 / 10)
    // console.log(100 % 10)
    // console.log(100 ** 10)
}

// 2. 문자열 연결 연산자
{
    // const say1 = 'winter'
    // const say2 = 'is'
    // const say3 = 'coming'

    // console.log(say1 + say2 + say3);
    // console.log(say1 + ' ' + say2 + ' ' + say3);
    // console.log(`${say1} ${say2} ${say3}`);
    // console.log('html' + 2);
    // console.log('10' + 2);
}

// 3. 대입 연산자
{
    // let x = 10
    // let y = 5

    // x = x + y // x += y
    // console.log(x)
    
    // x = x - y // x -= y
    // console.log(x)
    
    // x = x * y // x *= y
    // console.log(x)
    
    // x = x / y // x /= y
    // console.log(x)
    
    // x = x % y // x %= y
    // console.log(x)
}

{
    let tbl = '<table>'
    tbl += '<tr>'
    tbl += '<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td>'
    tbl += '</tr>'
    tbl += '<tr>'
    tbl += '<td>6</td><td>7</td><td>8</td><td>9</td><td>10</td>'
    tbl += '</tr>'
    tbl += '</table>'

    // $('.box') -- jQuery
    document.querySelector('.box').innerHTML = tbl
}

// 4. 증감 연산자
{
    // let number = 8
    // console.log(number);
    
    // number++
    // console.log(number);
    
    // number--
    // console.log(number);
    
    // let num1 = 10
    // let num2 = ++num1
    // console.log(num1, num2);
    
    // let count1 = 10
    // let count2 = count1++
    // console.log(count1, count2);
}

// 5. 비교 연산자
{
    // console.log(10 > 100);
    // console.log(10 < 100);
    // console.log(10 >= 100);
    // console.log(10 <= 100);
    // console.log(10 == 100);
    // console.log(10 != 100);
}

// 6. 논리 연산자
// ||(or), &&(and), !(not)
{
    // let a = 100 > 50 // true
    // let b = 10 < 5 // false
    // let c = true

    // // || -> 하나라도 true 이면 -> true
    // console.log(a || b || c)

    // // && -> 전부 true일때만 -> true
    // console.log(a && b && c)

    // // ! -> 값을 반대로 바꾼다
    // b = !b
    // console.log(b);
}

// 7. 동등 위치 연산자
// ==, ===, !=. !==
{
    // const value1 = '100'
    // const value2 = 100

    // console.log(value1 == value2);
    // console.log(value1 != value2);
    // console.log(value1 === value2);
    // console.log(value1 !== value2);

    // console.log('--------------------');
    // console.log(0 === false);
    // console.log(0 == false);
    // console.log('' == false);
    // console.log('' === false);
    // console.log(null == undefined);
    // console.log(null === undefined);
    // console.log('--------------------');
}

// 8. 상황 조건 연산자 - ? :
{
    // const a = 20
    // const b = 15

    // const result = a > b ? '감사합니다.' : '안녕하세요'
    // console.log(result);
}

// 실습 : 표준 체중 테스트 프로그램
// 홍길동 : 키 180cm, 체중 80kg
// 표준 체중 : (키 - 100) * 0.9

{
    // const userHeight = 180
    // const userWeight = 80
    // const normalWeight = (userHeight - 100) * 0.9
    // console.log(normalWeight)

    const name = prompt('당신의 이름은?')
    const height = prompt('당신의 키는?')
    const weight = prompt('당신의 체중은?')
    const normalWeight = (height - 100) * 0.9
    const result = weight >= normalWeight -5 && weight <= normalWeight +5
    const message = result ? '적정체중입니다.' : '적정체중이 아닙니다.'
    document.querySelector('.text').innerHTML = `${name}님은 ${message}`
}