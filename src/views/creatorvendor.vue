<style>
::-webkit-file-upload-button {
    display: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>

<template>
    <div class="mt-3 ml-3 flex justify-start">
        <h3>Creator Vendor</h3>
    </div>

    <form class="w-full " v-if="!loader">
        <div class="mt-8 flex flex-wrap ">

            <div class="card p-4 h-full w-full mr-5  ml-5 shadow-lg border-1 rounded-2xl bg-white">
                <div class="text-sm font-bold" v-if="!isUpdate">Vendor Details</div>
                <div class="w-full flex justify-center">

                    
                    <div class="grid"
                        :class="slectectedData ? 'lg:grid-cols-5 md:w-4/5 2xl:w-3/5 w-full' : '2xl:w-2/5 lg:w-3/5 w-4/5 '">

                        <div :class="slectectedData ? 'col-span-3' : ''">
                            <div class="w-full flex justify-between px-2 pb-2 mb-2 border-b border-[#ededed]"
                                v-if="slectectedData">
                                <div class="text-[22px]"> {{ slectectedData.appName }}</div> <button type="button"
                                    class="min-w-[100px] text-[#4caf50] px-[5px] py-[10px] text-sm rounded bg-[#4caf501a]">
                                    Active</button>
                            </div>
                            <div v-if="slectectedData" class="text-base font-bold mb-2">App Details</div>
                            <div class=" flex flex-col">
                                <label class="text-md flex wrap mb-2">Vendor Name <span class="text-red-500 pl-1">*</span></label>
                                <input id="vendorname" name="name" autocomplete="off"
                                    class="form-control form-control-warning  border border-gray-600  h-10 mb-3  rounded focus:outline-none px-4 py-2 "
                                    type="text" @keydown="errorUsername = ''" v-model="vendorname">
                                <p class="text-sm text-red-500 pt-1 flex justify-start">{{ errorUsername }}</p>
                            </div>

                            <div class=" flex flex-col">
                                <label class="text-md flex wrap mb-2">Contact Person Name <span class="text-red-500 pl-1">*</span></label>
                                <input id="personname" name="personname" autocomplete="off"
                                    class="form-control form-control-warning   border border-gray-600 h-10 mb-3  rounded focus:outline-none px-4 py-2"
                                    type="text" @keydown="errorPersonname = ''" v-model="personname">
                                <p class="text-sm text-red-500 pt-1 flex justify-start">{{ errorPersonname }}</p>
                            </div>

                            <!-- <div class=" flex flex-col">
                            <label class="text-md flex wrap mb-2">Logo (24*24px)</label>
                            <input id="fileInp" name="file"
                                class="form-control form-control-warning   border border-gray-600  h-10 mb-3  rounded px-4 py-2"
                                type="file" @change="fileValidation($event,)">

                            <p v-if="errorFile" class="text-red-600  flex justify-start">{{ errorFile }}</p>

                        </div> -->

                            <div class="flex justify-between md:gap-6  md:flex-nowrap flex-wrap">
                                <div class="md:w-[50%] w-[100%]">
                                    <label class="text-md flex wrap mb-2">Email ID <span class="text-red-500 pl-1">*</span></label>
                                    <input id="email" name="email" autocomplete="off"
                                        class="form-control form-control-warning   border border-gray-600 w-full h-10 mb-3  rounded focus:outline-none px-4 py-2"
                                        type="email" @keydown="erroremail = ''" v-model="email">
                                    <p class="text-sm text-red-500 pt-1 flex justify-start">{{ erroremail }}</p>
                                </div>
                                <div class="md:w-[50%] w-[100%]">
                                    <label class="text-md flex wrap mb-2">Mobile Number <span class="text-red-500 pl-1">*</span></label>
                                    <input id="mobilenumber" name="mobilenumber" autocomplete="off"
                                        class="form-control form-control-warning   border border-gray-600 w-full h-10 mb-3  rounded focus:outline-none px-4 py-2"
                                        type="text" @keydown="errornumber = ''" maxlength="10"
                                        @keypress="keyPressNumericEvent($event)" v-model="mobNumber">
                                    <p class="text-sm text-red-500 pt-1 flex justify-start">{{ errornumber }}</p>
                                </div>
                            </div>

                            <div class="flex justify-between md:gap-6  md:flex-nowrap flex-wrap">
                                <div class="md:w-[50%] w-[100%]">
                                    <label class="text-md flex wrap mb-2">Redirect URL <span class="text-red-500 pl-1">*</span></label>
                                    <input id="redirecturl" name="redirecturl" autocomplete="off"
                                        class="form-control form-control-warning   border border-gray-600 w-full  h-10 mb-3  rounded focus:outline-none px-4 py-2"
                                        type="url" @keydown="errorredirect = ''" v-model="redirecturl">
                                    <p class="text-sm text-red-500 pt-1 flex justify-start">{{ errorredirect }}</p>
                                </div>
                                <div class="md:w-[50%] w-[100%]">
                                    <label class="text-md flex wrap mb-2">Postback URL <span class="text-red-500 pl-1">*</span></label>
                                    <input id="posturl" name="posturl" autocomplete="off"
                                        class="form-control form-control-warning   border border-gray-600  w-full h-10 mb-3  rounded focus:outline-none px-4 py-2"
                                        type="url" @keydown="errorpost = ''" v-model="posturl">
                                    <p class="text-sm text-red-500 pt-1 flex justify-start">{{ errorpost }}</p>
                                </div>
                            </div>

                            <div class=" flex flex-col">
                                <label class="text-md flex wrap mb-2">Description <span class="text-red-500 pl-1">*</span></label>
                                <textarea id="text" name="text" autocomplete="off"
                                    class="form-control form-control-warning   border border-gray-600   min-h-[20px] mb-3  rounded focus:outline-none px-4 py-2"
                                    @keydown="errortext = ''" v-model="descrip"></textarea>
                                <p class="text-sm text-red-500 pt-1 flex justify-start">{{ errortext }}</p>
                            </div>
                            <div class="flex justify-start">
                                <div style="display:flex; align-items: end;"> <label class="mr-4">API Trading Access <span class="text-red-500 pl-1">*</span> </label>
                                    <fieldset class="mt-4">
                                        <legend class="sr-only">Notification method</legend>
                                        <div class="flex items-center gap-4">
                                            <div v-for="notificationMethod in notificationMethods"
                                                :key="notificationMethod.id" class="flex items-center "
                                                @click="apiType = notificationMethod.val"> <input
                                                    :id="notificationMethod.id" name="notification-method" type="radio"
                                                    :checked="apiType == notificationMethod.val"
                                                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer" />
                                                <label :for="notificationMethod.id"
                                                    class="ml-3 block text-sm font-medium leading-6 text-gray-900 cursor-pointer">{{
                                                        notificationMethod.title }}</label>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                        <div v-if="slectectedData" class="col-span-2 w-full px-8 pt-8">
                            <div class="text-[22px] mb-2">APP Code </div>

                            <div class="bg-[#f1f1f1] px-4 py-2 w-fit border border-[#e1e1e1] text-sm ml-2 rounded">{{
                                slectectedData.apiKey }}</div>
                            <div class="text-[22px] mb-2">Secret Key</div>

                            <div
                                class="bg-[#f1f1f1] px-4 py-2 w-fit break-all border border-[#e1e1e1] text-sm ml-2 rounded">
                                {{ slectectedData.apiSecret }}</div>

                            <button class="capitalize text-sm border border-[#000000] rounded px-4 py-2 ml-2 my-4"
                                type="button" @click="isDelAction = false; isDialogOpen = true"> Re-generate API
                                Secret</button>
                            <div class="px-2 py-6 border-y border-[#ededed]">
                                <button class="capitalize text-sm border border-[#000000] rounded px-4 py-2 ml-2"
                                    type="button" @click="isDelAction = true; isDialogOpen = true">Delete this app
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="flex justify-end my-4">
                    <button type="button" @click="loginSubmit"
                        class="mr-2 mt-3 inline-flex w-full justify-center rounded-md h-9 bg-blue-500 text-white px-3 py-2 text-sm font-semibold  shadow-sm    sm:mt-0 sm:w-[120px] focus:outline-none">{{
                            isUpdate ? 'Update' : 'Save' }}</button>
                    <button type="button" @click="$router.push('/home')"
                        class="mt-3 inline-flex w-full justify-center rounded-md h-10  bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-[120px] focus:outline-none">Cancel</button>
                </div>
            </div>

        </div>
    </form>

    <actionDialog :isOpen="isDialogOpen" v-on:isCloseDialog="isDialogOpen = false" :activeData="slectectedData"
        :isDelete="isDelAction" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import actionDialog from './action-dialog.vue';
import { mapState } from 'vuex';
export default defineComponent({
    name: 'createVendor',
    setup() {
        const slectectedData = ref()
        const isDialogOpen = ref(false)
        const isDelAction = ref(false)
        const isUpdate = ref(false)

        const vendorname = ref(null)
        const errorUsername = ref('')
        const personname = ref(null)
        const errorPersonname = ref('')
        const email = ref(null)
        const erroremail = ref('')
        const mobNumber = ref('')
        const errornumber = ref('')
        const redirecturl = ref(null)
        const errorredirect = ref('')
        const posturl = ref(null)
        const errorpost = ref('')
        const descrip = ref()
        const errortext = ref('')
        const active = ref(false)



        const file = ref(null)
        const selectfile = ref(null)
        const errorFile = ref()

        const notificationMethods = ref([{ id: '1', val: 'API', title: 'Yes', }, { id: '2', val: 'Non API', title: 'No' }])
        const apiType = ref('API')
        return {
            slectectedData, isDialogOpen, isDelAction, isUpdate, vendorname, errorUsername, personname, errorPersonname, email, erroremail, mobNumber, errornumber, redirecturl, errorredirect, posturl, errorpost, descrip, errortext, active, file, selectfile, errorFile, notificationMethods, apiType
        }
    },
    components: {
        actionDialog
    },
    computed: {
        ...mapState('vendor', ['loader', 'vendorDetails'])
    },
    async created() {

        this.isUpdate = this.$router.currentRoute.value.query.appId ? true : false
        let slectectedData: any = null
        if (this.isUpdate) {
            let id = this.$router.currentRoute.value.query.appId

            await this.$store.dispatch('vendor/getVendorData', 'no').finally(() => {
                for (let item of this.vendorDetails) {
                    if (item.appId == id) {
                        slectectedData = item
                    }
                }
                this.setVal(slectectedData)
            })
        } else {
            this.resetField()
        }
        this.slectectedData = slectectedData
    },
    methods: {

        loginSubmit() {
            if (this.vendorname && this.personname && this.email && this.validateRegex('email', this.email) && this.mobNumber && this.validateRegex('mob', this.mobNumber) && this.redirecturl && this.posturl && this.descrip) {
                let json: any = {
                    "appName": this.vendorname,
                    "redirectUrl": this.redirecturl,
                    "postbackUrl": this.posturl,
                    "description": this.descrip,
                    "contactName": this.personname,
                    "mobileNo": this.mobNumber.toString(),
                    "email": this.email,
                    "type": this.apiType
                }
                this.isUpdate ? json.id = this.$router.currentRoute.value.query.appId : ''
                
                this.isUpdate ? this.$store.dispatch('vendor/updateApp', json) : this.$store.dispatch('vendor/createApp', json)
            } else {
                this.errorUsername = this.vendorname ? '' : 'Enter Your Vendor Name'
                this.errorPersonname = this.personname ? '' : 'Enter Your Contact Person Name'
                this.erroremail = this.email && this.validateRegex('email', this.email) ? '' : 'Enter Your Valid Email'
                this.errornumber = this.mobNumber && this.validateRegex('mob', this.mobNumber) ? '' : 'Enter Your Valid Mobile Number'
                this.errorredirect = this.redirecturl ? '' : 'Enter Your Redirect url'
                this.errorpost = this.posturl ? '' : 'Enter Your Postback url'
                this.errortext = this.descrip ? '' : 'Enter Your Desc'
            }
        },
        fileValidation(e: any) {
            var files = e.target.files || e.dataTransfer.files;

            var tempError : any = null
            var tempSelectFile = null
            var allowedExtensions = /(\.svg|\.png|\.jpg|\.jpeg)$/i;
            if (files[0] && files[0]?.name) {
                
                let filePath = files[0]?.name
                
                if (filePath && !allowedExtensions.exec(filePath)) {
                   let element = document.getElementById('fileInp') as HTMLInputElement
                   element.value = ''
                    tempSelectFile = null
                    tempError = "Allowed only svg,png and jpg file"
                } else {
                    tempSelectFile = files[0];
                    tempError = null
                }
            }
                this.selectfile = tempSelectFile
                this.errorFile = tempError
                
        },
        setVal(data: any) {
            this.vendorname = data.appName
            this.redirecturl = data.redirectUrl
            this.posturl = data.postbackUrl
            this.descrip = data.description
            this.personname = data.contactName
            this.mobNumber = data.mobieNo,
                this.email = data.email
            this.apiType = data.type
        },
        resetField() {
            this.vendorname = this.personname = this.email = this.redirecturl = this.posturl = this.descrip = this.errorFile = this.selectfile = null 
            this.errorUsername = this.errorPersonname = this.erroremail = this.errornumber = this.errorredirect = this.errorpost = this.errortext = this.mobNumber = '' 
        },

        validateRegex(key: string, val: string) {
            let email = new RegExp("^([a-z0-9_\.-]+\@[\da-z\.-]+.[a-z\.]{2,6})$")
            let mobile = new RegExp("^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$")
            if (key == 'email' && val) {
                return email.test(val)
            }

            if (key == 'mob' && val) {
                return mobile.test(val)
            }

            return false
        },
        keyPressNumericEvent(event: any) {
            if (
                event.keyCode != 13
            ) {
                var inp = String.fromCharCode(event.keyCode);

                if (/[0-9]/.test(inp)) {
                    return true;
                } else {
                    event.preventDefault();
                    return false;
                }
            }
        },
    },
    beforeUnmount() {
        this.$store.commit('setIsCalled', false)
    },
})

</script>