class Swing{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.swing = Constraint.create(options);
        World.add(world, this.swing);
    }

    attach(body){
        this.swing.bodyA = body;
    }

    release(){
        this.swing.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
        push();
        stroke(48,22,8);
        pop();
        }
    }
}