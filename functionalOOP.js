"use stric"

function Robot(){
   this.messeg = "Я Robot – я просто працюю";

   this.work = function(){
   console.log(this.messeg)
   }
   this.setMesseg = function(value){
   this.messeg = value;
   }
 }

function CoffeRobot (){
   Robot.call(this);
   var messeg = "Я CoffeRobot – я варю каву";
   this.setMesseg(messeg);
 }

function RobotDancer (){
    Robot.call(this);
    var messeg ="Я RobotDancer – я просто танцюю";
    this.setMesseg(messeg);
}

function RobotCoocker (){
   Robot.call(this);
   var messeg ="Я RobotCoocker – я просто готую";
       this.setMesseg(messeg);
}

let robot = new Robot();
let coffeRobot = new CoffeRobot();
let robotDancer = new RobotDancer();
let robotCoocker = new RobotCoocker();

arrRobot = [robot, robotDancer, robotCoocker, coffeRobot];

for (let i=0; i<arrRobot.length; i++){
    arrRobot[i].work();
}