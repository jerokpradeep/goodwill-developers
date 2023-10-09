import notification from '../../notification'
import router from  '../../router';
const state = {
    toasterPalce: 'top-right',
    counter: 0
}

const mutations = {
    setCounter(state: any, payload: any){
        state.counter = payload
    }
}

const actions = {

    toaster({state} : any, payload: any){
        notification.open(payload.data, payload.position ? payload.position : state.toasterPalce)
    },

    errorLog({state,commit ,dispatch} : any, payload : any){
        let tempToaster 
        if (payload.response.status && payload.response.status == 404){
            tempToaster = {
                "title": "",
                "type": "danger",
                "message": "We'II Be Back Soon",
                "duration": 4500
              }
            
        }else if (payload.response.status && payload.response.status >= 400 && payload.response.status < 500 && state.counter == 0) {
            commit('setCounter', 1)
            payload.response.status == 401 ? tempToaster = {
                "title": "",
                "type": "danger",
                "message": "Your session has been invalidated. Kindly re-login",
                "duration": 4500
              } : tempToaster = {
                "title": "",
                "type": "danger",
                "message":  payload.response.data,
                "duration": 4500
              }
            dispatch('resetLocal')
        } else if (payload.response.status && payload.response.status >= 500) {
            tempToaster = {
                "title": "",
                "type": "danger",
                "message":  "Something went wrong. Please try after sometime",
                "duration": 4500
              }
        }
        dispatch('toaster' ,{data:tempToaster, position: ''}) 
    },

    resetLocal({}: any){
        localStorage.clear()
        router.push({path: '/', query: { isLogout: 'true'}} ) 
    },
    checkRouter({ dispatch} : any, payload: any){
       dispatch('errorLog', payload)
       
    },
}

const getters = {

}


const errorHandle = {
    namespaced : true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}

export default errorHandle