function addTogether() {
    var args = Array.from(arguments)
    for(let i=0; i<args.length; i++){
      if(typeof args[i]!=="number"){
        return undefined;
      }
    }
    if(args.length > 1){
      if(args.every(num=>typeof num === "number")){
       return args.reduce((acc, next)=>acc+next,0)
      }else{
        return undefined
      }
    }
    return function(arg2){
      for(let i = 0; i<args.length; i++){
          if(typeof args[i] === "number" && typeof arg2 === "number"){
      return args[i] + arg2 
            
          }else{
            return undefined
          }
      }
    }
  }
  
    console.log(addTogether(2, 3))
    console.log(addTogether(23, 30))
    console.log(addTogether("2", 3))
    console.log(addTogether(5, undefined))
    console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"))
    console.log(addTogether(5))
    console.log(addTogether(5)(7))
    console.log(addTogether(2)([3]))
    console.log(addTogether(2, "3"))
