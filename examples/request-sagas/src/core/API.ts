import { eventChannel, END, buffers } from 'redux-saga'

const API = (action:any, apiConfig:any, requestActions:any) => {
  return eventChannel((emitter:any) => {
    emitter(requestActions.request())

    setTimeout(() => {
      emitter(requestActions.progress())
    }, 300)
    console.log(requestActions)
    
    return () => emitter(END)
  }, buffers.expanding())
}

export default API