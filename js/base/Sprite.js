import { DataStore } from "./DataStore";

//图片的基类,背景图,小鸟图,地板图...都是它的子类
export class Sprite{
    /*
    img:图片
    srcX:从图片的x坐标开始画
    srcY:从图片的y坐标开始画
    srcW:画图片的宽
    srcH:画图片的高
    x:从canvas的x坐标开始画
    y:从canvas的y坐标开始画
    width:画的实际的宽
    height:画的实际的高
    */
    constructor(img=null,srcX=0,srcY=0,srcW=0,srcH=0,x=0,y=0,width=0,height=0){

        let dataStore=DataStore.getInstance();
        this.ctx=dataStore.ctx;
        this.img=img;
        this.srcX=srcX;
        this.srcY=srcY;
        this.srcW=srcW;
        this.srcH=srcH;
        this.x=x;
        this.y=y;
        this,width=width;
        this.height=height;
    }
    //draw方法,画图
    draw(img=this.img,srcX=this.srcX,srcY=this.srcY,srcW=this.srcW,
        srcH=this.srcH,x=this.x,y=this.y,width=this.width,height=this.height){
            this.ctx.drawImage(img,srcX,srcY,srcW,srcH,x,y,width,height);
    }

}