// using extends keyword
// child class is able to access parent class properties
// but parent cannot access anything from child

class Car{
    speed = 100;

    start(){
        console.log("car start");
    }

    stop(){
        console.log("car ------- stop");
    }

    refuel(){
        console.log('car ------ refuel');
    }

     #billing(){
        console.log('Car--------billing');
    }
    
}

class BMW extends Car {
    // speed = 200;

// method overriding - child has overridden the parent class method

    start(){
        console.log('BMW ------- Start');
    }


    parking (){
        console.log('BMW ------ Parking');
    }

    #billing(){
        console.log('BMW--------billing');
    }

    //to access private method create public method and call private methd inside it
    getBilling(){
        this.#billing;
    }
}

let bmw = new BMW ();
console.log(bmw.speed);
bmw.start();//overridden
bmw.stop();//inherited
bmw.refuel();//inherited
bmw.parking();//individual


let car = new Car();
console.log( car.speed);
car.start();
car.refuel();
car.parking(); //car.parking is not a function - not allowed--parent cannot access child class properties



console.log("--------------new CAR and BMW example----------------------");
class Car {

    speed = 100;
    start(){
        console.log('car ----- start');
    }
}

class BMW extends Car {
    speed = 200;
    start(){
        console.log('BMW ----- start');
        console.log(this.speed);//200
        console.log(super.speed);//it's giving undefined; to solve this we have to create constructor
    }
}

let bmw = new BMW();
bmw.start();
