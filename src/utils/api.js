import axios from "./http.js"


export function gets(url,data){

    return axios.get(url,{
       params:data
    })

}

export function pots(url,data){

    return axios.get(url,data)

}

export  function more(url){
    
  return  gets(`/v1/cities?type=group`)

}

// export function guess(url){
    
//     return  gets("/v1/cities?type=guess")
  
//   }

  export function hot(url){
    
    return  gets(`/v1/cities?type=${url}`)
  
  }