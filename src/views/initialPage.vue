<template>
    <div class="w-screen h-screen flex items-center justify-center">
        <div class="bg-white p-6 shadow-lg rounded-lg max-w-[380px] w-[380px]">
            <div class="text-base font-bold mb-4 text-center">Developer Console</div>
            <div class="text-base font-bold mb-4 flex items-center justify-center">
                <img src="/fav.svg" alt="" srcset="">
            </div>
            <div class="flex mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style="width: 50px;">
<path d="M21.266 20.998H2.73301C2.37575 20.998 2.04563 20.8074 1.867 20.498C1.68837 20.1886 1.68838 19.8074 1.86701 19.498L11.133 3.49799C11.3118 3.1891 11.6416 2.9989 11.9985 2.9989C12.3554 2.9989 12.6852 3.1891 12.864 3.49799L22.13 19.498C22.3085 19.8072 22.3086 20.1882 22.1303 20.4975C21.9519 20.8069 21.6221 20.9976 21.265 20.998H21.266ZM12 5.99799L4.46901 18.998H19.533L12 5.99799ZM12.995 14.999H10.995V9.99799H12.995V14.999Z" fill="orange"/>
<path d="M11 16H13V18H11V16Z" fill="orange"/>
</svg>
<div class="text-sm"> You have successfully logged out. If you wish to continue with login, please click below </div>
            </div>
            <button type="submit" class="h-[44px] w-full border-[#1D4481] border text-[#1D4481] rounded-[10px] text-sm" @click="$store.dispatch('auth/naviGateWeb')">
                    Continue to Web
                </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: 'initialPage',
    setup(){
        return {

        }
    },
    created(){
        let query = this.$router.currentRoute.value.query

        let isValid = Object.keys(query).length == 0 && query.constructor === Object
        
        if(isValid){
            this.$store.dispatch('auth/naviGateWeb')
        }
        
    }
})
</script>