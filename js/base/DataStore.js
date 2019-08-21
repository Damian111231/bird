//变量池,保存游戏过程中用到的所有的变量
export class DataStore{
    constructor(){
        this.map=new Map();
    }
    static getInstance(){
        //单例,保证所有类取到的变量值都是同一个
        if(!DataStore.instance){
            DataStore.instance=new DataStore();
        }
        return DataStore.instance;
    }
    //保存数据
    put(key,val){
        this.map.set(key,val);
        return this;//为了方便后面可以链式调用
    }
    //获取数据
    get(key){
        return this.map.get(key);
    }
    //销毁数据
    destroy(){
        for(let val of this.map.values()){
            val=null;
        }
    }
}