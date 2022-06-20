
   const throttle=(fn,timer)=>{
      let previous = new Date().getTime()
     let handler={
      apply(target,context,args){
      let now= new Date().getTime()
      if(now-previous>timer){
          previous=now
          Reflect.apply(target,context,args)
      }
      }
     }
      return new Proxy(fn,handler)
   }


export {throttle}