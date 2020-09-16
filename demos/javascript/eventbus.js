function EventBus(){
    EventBus.prototype.on=function(name,callback){
        if(!this._events){
            this._events=Object.create(null);
        }
        if(!this._events[name]){
            this._events[name]=[callback];
        }else{
            this._events[name].push(callback);
        }
    }
    EventBus.prototype.emit=function(name,args){
        if(this._events[name]){
            this._events[name].forEach(callback=>{callback(args);})
        }
    }
    EventBus.prototype.off=function(name){
        if(this._events[name]){
            delete this._events[name];
        }
    }
    EventBus.prototype.onve=function(name,callback){
        const once=(args)=>{
            callback(args);
            this.off(name);

        };
        this.on(name,once);
    }
}