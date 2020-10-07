import axios from "axios"

let serve=  axios.create({

   baseURL:"http://elm.cangdu.org",
  

})

serve.interceptors.request.use((req)=>{


 return req

})

serve.interceptors.response.use((res)=>{


    return res.data
   
   })

   export default serve