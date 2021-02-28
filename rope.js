class Rope{
    constructor(bodyA,pointB){
        var OP={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.3,
            length:250
        }
        this.bodyA=bodyA
        this.pointB=pointB
        this.rope=Constraint.create(OP)
        World.add(world,this.rope)
    }
    //this function attach is for restarting the simulation
    attach(body){
        this.rope.bodyA=body
    }
    //this,function is to release the ball
    fly(){
        this.rope.bodyA=null
    }
    display(){
        if(this.rope.bodyA){
            var pointA=this.rope.bodyA.position
            var pointB=this.pointB
            push()
            strokeWeight(4)
            stroke(48,22,8)
            line(pointB.x,pointB.y,pointA.x,pointA.y)               // line starts from point and ends on ball
            pop()
        }
    }
}