class Box{
    constructor(x,y,width,height){
        var OP={
            'restitution':0.8,
            'friction':1.0,
            'density':0.04
        }
        this.body=Bodies.rectangle(x,y,width,height,OP)
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
    display(){
        var p=this.body.position
        var a=this.body.angle
        push()
        translate(p.x,p.y)
        rotate(a)
        rectMode(CENTER)
        fill("lightgreen")
        rect(0,0,this.width,this.height)
        pop()
    }
}