// 객체지향프로그래밍

// Class
// - 템플릿
// - 한 번만 선언
// - 데이타가 없다.

// 복제 -> object
// - 인스턴스
// - 복수 생성
// - 실제 데이타가 존재

// 클래스 선언
class Car {
    constructor(name, color) { // 생성자
        this.name = name // 필드
        this.color = color // 필드
    }

    start() {
        console.log(`${this.name} is start!!!`);
    }

    stop() {
        console.log(`${this.name} is stop~~~`);
    }
}

// const myCar = new Car('🚗 sonata', 'red')
// console.log(myCar.name);
// console.log(myCar.color);
// myCar.start()
// myCar.stop()

// const oldCar = new Car(`🚕 pony`, 'yellow')
// console.log(oldCar.name);
// console.log(oldCar.color);
// oldCar.start()
// oldCar.stop()

// getter and setter
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    get age() {
        return this._age
    }

    set age(value) {
        this._age = value < 0 ? '나이는 0보다 작을 수 없어요' : value
    }
}

// const aBoy = new Person('👨 Picasso', -36)
// console.log(aBoy.age);
// console.log(aBoy.name);

// 상속과 다양성
class Phone {
    constructor(name, screen, color) {
        this.name = name
        this.screen = screen
        this.color = color
    }

    on() {
        console.log(`${this.name} is turn on.`);
    }

    off() {
        console.log(`${this.name} is turn off.`);
    }
}

class Samsung extends Phone {}

const galaxy = new Samsung('Galaxy 10', 'oled', 'white')
galaxy.on()
galaxy.off()

class Apple extends Phone {
    on() {
        super.on()
        console.log('아이폰이 켜졌습니다.');
    }

    off() {
        console.log('아이폰 꺼짐');
    }
}

const iphone = new Apple('iphone 8', 'lcd', 'gray')
iphone.on()
iphone.off()