function DigitalPal (hungry, sleepy, bored, age){
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;

    this.feed = function (){
        if (this.hungry === true){
            console.log("");
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        }
        else {
            console.log("No thnaks! I'm full.");
        }

    }

    this.sleep = function (){
        if(this.sleepy === true){
            console.log("");
            console.log("Zzzzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        }
        else {
            console.log("No way! I'm not tired.");
        }
    }

    this.play = function (){
        if(this.bored === true){
            console.log("");
            console.log("Yay! Let's Play!");
            this.bored = false;
            this.hungry = true;
        }
        else ( console.log("Not right now. Later?"));
    }

    this.increaseAge = function (){
        this.age += 1;
        console.log("");
        console.log("Happy Birthday to me! I am " + this.age + " old!");
    }
    this.play();
    this.feed();
    this.sleep();

}


var dog = new DigitalPal();
    dog.outside = false;
    dog.bark = function(){
        console.log("");
        console.log("Woof! Woof!");
    }
    dog.goOutside = function() {
        if (dog.outside === false){
            console.log("");
            console.log("Yay! I love the outdoors!");
            dog.outside = true;
            dog.bark();
        }
        else (console.log("we're already outside though..."));
    }
    dog.goInside = function(){
        if(dog.outside === true){
            console.log("");
            console.log("Do we have to? Fine...");
            dog.outside = false;
        }
        else (console.log("I'm already inside..."));
    }

    dog.goOutside();
    dog.goInside();

var cat = new DigitalPal;
    cat.houseCondition = 100;
    cat.meow = function(){
        console.log("");
        console.log("Meow! Meow!");
    }
    destroyFurniture = function(){
        cat.houseCondition -= 10;
        console.log("");
        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
        cat.bored = false;
        cat.sleepy = true;
        if (cat.houseCondition === 0){
            console.log("Everything is already destroyed.");
        }
    }

    buyNewFurniture = function(){
        cat.houseCondition += 50;
        console.log("");
        console.log("Are you sure about that?");
    }
