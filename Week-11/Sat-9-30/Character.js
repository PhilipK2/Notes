function char(name, prof, gender, age, str, hp) {
    this.name = name;
    this.prof = prof;
    this.gender = gender;
    this.age = age;
    this.str = str;
    this.hp = hp;

    this.PrintStats = function() {
        var stats = "Name: " + this.name;
        stats += "\nProfession: " + this.prof;
        stats += "\nGender: " + this.gender;
        stats += "\nAge: " + this.age;
        stats += "\nStrength: " + this.str;
        stats += "\nHitPoints: " + this.hp;
        console.log(stats);
    };

    this.isAlive = function(){
        if (this.hp > 0){
            console.log("");
            console.log(this.name + " is alive");
            console.log("");
            return true;
        }
        console.log(this.name + " is dead");
        return false;
    }


    this.attack = function(opponent){
        opponent.hp -= this.str;
    }
    this.levelUp = function(){
        this.age += 1;
        this.str +=5;
        this.hp += 25;
    }
}

var champ1 = new char("Phil", "Rogue", "Male", 28, 25, 125);
var champ2 = new char("Fay", "OT", "Female", 27, 15, 75);



champ1.PrintStats();
// champ1.isAlive();
champ2.PrintStats();
// champ2.isAlive();

// champ1.levelUp();
// champ1.PrintStats();

while(champ1.isAlive() && champ2.isAlive()){
    champ1.attack(champ2);
    champ2.attack(champ1);

    champ1.PrintStats();
    champ2.PrintStats();
}

if(champ1.isAlive){
    console.log(champ1.name +" is Victorious!");
}
else{
    console.log(champ2.name + " is Victorious!")
}
