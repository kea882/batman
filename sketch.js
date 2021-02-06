

var maxDrops=100
function preload(){
    thunder1=loadImage("1.png")
    thunder2=loadImage("2.png")
    thunder3=loadImage("3.png")
    thunder4=loadImage("4.png")

    
}

function setup(){
    createCanvas(400,700)
    umbrella=new Umbrella(200,500,40)
   if(frameCount%150===0){
       for ( var i=0;i<maxDrops; i++){
           drops.push(new Drop (random(0,400),random(0,400)));
       }
   }
    
}

function draw(){
    umbrella.display()
    if(frameCount%80===0){
        switch(rand){
            case 1:thunder.addImage(thunder1);
            break;
            case 2:thunder.addImage(thunde2);
            break;
            case 3:thunder.addImage(thunder3);
            break;
            case 4:thunder.addImage(thunder4);
            break;

        }
        for(var i=0; i<maxDrops; i++){
            drops.updateY();
        }
    }
}   

