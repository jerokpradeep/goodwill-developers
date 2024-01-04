<template>
    <div>
        <div class="mt-3 ml-3 flex justify-start">
            <h3><b>Dashboard</b></h3>
        </div>
        <div>
            <button
                class="flex justify-start ml-3 py-1 rounded px-3 mt-3  bg-blue-500 text-white  cursor-pointer  mb-2 focus:outline-none">Applications</button>
        </div>
        <div class="border border-gray-300 mr-3 ml-3"></div>
        <div class="mt-8 flex flex-wrap">
            <div class="card p-4 h-full w-full mr-5  ml-5 shadow-lg border-1 rounded-2xl bg-white">
                <div class="flex items-center justify-between cursor-pointer">
                    <span>App Details</span>
                    <span><button type="button"
                            class="flex justify-start ml-3  mt-3 py-2 rounded px-3 bg-blue-500 text-white  cursor-pointer  focus:outline-none" @click="$router.push('/createVendor')">Create
                            New App</button></span>
                </div>
                <div class="m-10 border border-gray-300 rounded-lg overflow-y-auto" v-if="vendorDetails.length > 0 && !loader">
                <table class="table-full w-full ">
                    <thead>
                        <tr class="border-b border-gray-300">
                            <th class="text-left px-4 py-4">S.No</th>
                            <th class="text-left px-4 py-4">App Name</th>
                            <th class="text-left px-4 py-4">App code</th>
                            <th class="text-left px-4 py-4">Expiry</th>
                            <th class="text-left px-4 py-4">Redirect Url</th>
                            <th class="text-left px-4 py-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, i) of vendorDetails" :key="i" :class="vendorDetails.length - 1 != i ? 'border-b border-gray-300' : ''" class="cursor-pointer" @click="$router.push({path: '/createVendor', query: {appId : item.appId}})">
                            <td class="text-left px-4 py-4">{{i+ 1}}</td>
                            <td class="text-left px-4 py-4">{{item.appName}}</td>
                            <td class="text-left px-4 py-4">{{item.apiKey}}</td>
                            <td class="text-left px-4 py-4">NA</td>
                            <td class="text-left px-4 py-4">{{item.redirectUrl}}</td>
                            <td class="text-left px-4 py-4"> <button @click="$router.push({path: '/createVendor', query: {appId : item.appId}})" class="py-1 rounded px-4 text-red-500 border border-[#ededed]">Edit</button></td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div v-else class="p-4 h-full flex items-center justify-center relative font-bold">No Apps Found</div>
            </div>

        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import { mapState } from 'vuex';
export default defineComponent({
    name: 'applications',
    created(){
        this.$store.state.isCalled ? this.$store.commit('setIsCalled', false) :this.$store.dispatch('vendor/getVendorData', 'no') 
    },
    beforeUnmount(){
        this.$store.commit('setIsCalled', false)
    },
    computed:{
        ...mapState('vendor', ['loader','vendorDetails'])
    }
})
</script>