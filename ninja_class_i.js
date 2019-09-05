// Assingment: Create a new object constructor called Ninja with the following attributes: 
// name, health , speed(private), strength(private). Speed and strength should be 3 by default. Health should be 100 by default.
// Ninja should have the following methods: sayName(), showStats(), drinkSake()-->

// Begin Assignment : 

var self = this
        
class Ninja{

    // object constructor 
    constructor (name, health) {
        this.name = name; 
        this.health = health; 
        this.strength = 3; 
        this.speed = 3; 
    }

    // methods
    sayName(){
        console.log( "My ninja name is "+  this.name + " and I have " +  this.health + " health."); 
    }
    
    showStats(){
        console.log("Name: " + this.name + ", Health: " + this.health , ", Speed: " + this.speed ,  + "Strength:"  + this.strength );
    }
    
    drinkSake(){
        console.log(this.name + " sipped on some Sake and gained 10 health points. " +  this.name  + "health is now: " + this.health ); 
    }

}
// create a new instance
var Mary = new Ninja("Mary", 100); 
var Brian = new Ninja("Brian", 100); 
Mary.drinkSake(); 
Mary.showStats(); 
Brian.sayName();
Brian.showStats(); 
