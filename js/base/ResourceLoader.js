import { Resources } from "./Resources.js";

//资源加载器,确保canvas在图片加载完成后再渲染
export class ResourceLoader{
    constructor(){
        this.map=new Map(Resources);
        //console.log(this.map);
        //循环遍历map集合,将其中的字符串路径修改为对应的图片
        for(let [key,val] of this.map){
            const img=new Image();
            img.src=val;
            this.map.set(key,img);
        }
    }
    //加载图片完毕
    onloaded(callback){
        let count =0;//计数器
        for(let img of this.map.values()){
            //遍历所有的值
            img.onload=()=>{
                count++;
                if(count>=this.map.size){
                    //当count与map的长度一样时,加载完毕,返回数据
                    callback(this.map);
                }
            }
        }

    }
   
}
