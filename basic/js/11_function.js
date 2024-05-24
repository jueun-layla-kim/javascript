// fuction 함수

// 1. 함수선언과 호출
function hello() {
    console.log('안녕, 자바스크립트~~~');
}
hello()

const sayHello = function() {
    console.log('👨 hello~~');
}
sayHello()

const sayHello2 = () => console.log('👩‍🦱 hello~~')
sayHello2()

// 2. 매개변수 parameter
function printMessage(message) {
    console.log(message);
}

printMessage('하하하')
printMessage('파파파')

// 3. 기본 매개변수
function showInfo(title, name = '스티브 잡스') {
    console.log(`${title} by ${name}`)
}

showInfo('게르니카', '피카소')
showInfo('풍경')

// 4. Rest 매개변수 / spread 연산자
function printAll(...items) {
    for(let i =0; i < items.length; i++) {
        console.log(items[i])
    }
}

printAll('봄', '여름', '가을', '겨울', '안녕', '자바')

// 5. Scope
const movie = '하하하' // global변수(전역변수)

function paintMovie() {
    const myMovie = '생활의 발견' // local변수(지역변수)
    console.log(myMovie)
    console.log(movie);
}

paintMovie()

// console.log(myMovie)
console.log(movie);

// 6. Return
function plus(a, b) {
    return a + b
    console.log('계산을 마쳤습니다.');
}

const result = plus(5, 10)
console.log(result);

// 7. callback function 콜백함수

const call = function(myName, printPicasso, printJobs) {
    if(myName === 'Picasso') {
        printPicasso()
    } else {
        printJobs()
    }
}

const printPicasso = function() {
    console.log('Im Picasso');
}

const printJobs = function() {
    console.log('Im Jobs');
}

call('Picasso', printPicasso, printJobs)

// 8. Arrow function
const add = function(a, b) {
    return a + b
}

const add2 = (a, b) => a + b

const sum = add(5, 8)
const sum2 = add2(10, 20)

console.log(sum, sum2);