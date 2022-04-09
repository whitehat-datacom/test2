class Mowgli extends BaseClass{
    constructor(x,y){
        super(x,y,30,50);
        var img2=loadImage("assets/Mowgli/mowgli2.png");
        this.image=loadImage(img2);
        this.scale=0.8;
    }
    ImageChange(){
        var img2=loadImage("assets/Mowgli/mowgli2.png");
        var img3=loadImage("assets/Mowgli/mowgli3.png");
        var img4=loadImage("assets/Mowgli/mowgli4.png");
        var img5=loadImage("assets/Mowgli/mowgli5.png");
        var img6=loadImage("assets/Mowgli/mowgli6.png");
        var img7=loadImage("assets/Mowgli/mowgli7.png");
        var img8=loadImage("assets/Mowgli/mowgli8.png");
        var img9=loadImage("assets/Mowgli/mowgli9.png");
        var img10=loadImage("assets/Mowgli/mowgli10.png");
        var img11=loadImage("assets/Mowgli/mowgli11.png");
        if(frameCount%50===0){
        for(i=2;;i++){
         if((i%11===0)){
             this.image=loadImage(img11);
         }
         if((i%11==!0) || (i%10===0)){
            this.image=loadImage(img10);
        }
        if(((i%11==!0) && (i%10==!0)) || (i%9===0)){
            this.image=loadImage(img9);
        }
        if(((i%11==!0) && (i%10==!0) && (i%9==!0)) || (i%8===0)){
            this.image=loadImage(img8);
        }
        if(((i%11==!0) && (i%10==!0) && (i%9==!0) && (i%8==!0)) || (i%7===0)){
            this.image=loadImage(img7);
        }
        if(((i%11==!0) && (i%10==!0) && (i%9==!0) && (i%8==!0) && (i%7==!0)) || (i%6===0)){
            this.image=loadImage(img6);
        }
        if(((i%11==!0) && (i%10==!0) && (i%9==!0) && (i%8==!0) && (i%7==!0) && (i%6==!0)) || (i%5===0)){
            this.image=loadImage(img5);
        }
        if(((i%11==!0) && (i%10==!0) && (i%9==!0) && (i%8==!0) && (i%7==!0) && ((i%6==!0)) && (i%5==!0)) || (i%4===0)){
            this.image=loadImage(img4);
        }
        if(((i%11==!0) && (i%10==!0) && (i%9==!0) && (i%8==!0) && (i%7==!0) && ((i%6==!0)) && (i%5==!0) && (i%4==!0)) || (i%3==!0)){
            this.image=loadImage(img3);
        }
        if(((i%11==!0) && (i%10==!0) && (i%9==!0) && (i%8==!0) && (i%7==!0) && ((i%6==!0)) && (i%5==!0) && (i%4==!0) && (i%3==!0)) && (i%2===0)){
            this.image=loadImage(img2);
        }
        }
    }
    }
    display(){
        super.display();
        this.ImageChange();
    }
}