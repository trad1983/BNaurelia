export class Jobs {
  


  canActivate(params, routeConfig, navigationInstruction) {
   const promise = new Promise((res, rej)=>{
  setTimeout(_=> {
  res(false)
  }, 500)
  })
  return promise
   
  }
}
