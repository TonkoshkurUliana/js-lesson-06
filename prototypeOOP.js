"use stric"

function Robot(){
  this.messeg= "Я Robot – я просто працюю";
}
   Robot.prototype.work = function(){
   console.log(this.messeg)}

   Robot.prototype.setMesseg = function(value){
   this.messeg = value;
   }

function CoffeRobot (){
   let messeg = "Я CoffeRobot – я варю каву";
   this.setMesseg (messeg);
      }

 CoffeRobot.prototype = Object.create(Robot.prototype);
 CoffeRobot.prototype.constructor = CoffeRobot;

function RobotDancer (){
    let messeg ="Я RobotDancer – я просто танцюю";
    this.setMesseg(messeg);
    }

 RobotDancer.prototype = Object.create(Robot.prototype);
 RobotDancer.prototype.constructor = RobotDancer;

function RobotCoocker (){
   let messeg ="Я RobotCoocker – я просто готую";
   this.setMesseg(messeg);
   }

 RobotCoocker.prototype = Object.create(Robot.prototype);
 RobotCoocker.prototype.constructor = RobotCoocker;

let arrRobot = [new Robot(), new CoffeRobot(), new RobotDancer(), new RobotCoocker()];

for (let i=0; i<arrRobot.length; i++){
    arrRobot[i].work();
}