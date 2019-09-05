// Assignment: Ninja Class II
// Complete the below challenges using Ninja from the previous assignment.
// .punch() - Add a new method to Ninja called .punch(). This method will take another Ninja instance and subtract 5 Health from the Ninja we passed in.
// .kick() - Add a method to your Ninja class called .kick(). Kick will subtract 15 Health for each point of Strength the calling Ninja has, and like .punch() will take another Ninja instance.


function Ninja(name) {
    var ninja = {};
    var self = this;
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;

    this.sayName = function() {
        console.log("My ninja name is " + this.name + "!");
    }

    this.showStats = function() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
    }

    this.drinkSake = function() {
        this.health += 10;
    }

    this.punch = function(enemy) {
        if (enemy instanceof Ninja) {
            enemy.health -= 5;
            console.log(enemy.name + " was punched by " + this.name + " and lost 5 health!");
        }
    }

    this.kick = function(enemy) {
        if (enemy instanceof Ninja) {
            var damage = this.strength * 15;
            enemy.health -= damage;
            console.log(enemy.name + " was kicked by " + this.name + " and lost " + damage + " health!");
        }
    }
}

var ninja1 = new Ninja("IceBear"); 
ninja1.showStats(); 

var ninja2 = new Ninja("Griz"); 
ninja2.showStats(); 

ninja1.punch(ninja2);
ninja2.showStats(); 