import { ResourceLoader } from "./js/base/ResourceLoader.js";
import { DataStore } from "./js/base/DataStore.js";

//控制程序主流程
export class Main{
    constructor(){
        console.log('程序开始了!');
        this.loader=new ResourceLoader();
        this.canvas=document.getElementById('game');
        this.ctx=this.canvas.getContext('2d');
        this.dataStore=DataStore.getInstance();
        this.loader.onloaded(map=>this.onResourceLoaded(map));
        
     
    }
    //资源加载成功的方法
    onResourceLoaded(map){
    //资源加载成功后要保存数据
    //不使用put方法保存下面的数据原因是:
    //这三个数据是要长期保存的不需要销毁
    //而put保存的数据会在游戏结束时销毁
    this.dataStore.canvas=this.canvas;
    this.dataStore.ctx=this.ctx;
    this.dataStore.res=map;
    console.log(this.dataStore);


    }
}