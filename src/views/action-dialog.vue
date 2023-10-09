<template>
 <TransitionRoot as="template" :show="isOpen">
      <Dialog as="div" class="relative z-10 " @close="close()" >
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
  
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <DialogPanel
                  class="w-full max-w-md transform rounded overflow-hidden radius p-6 text-left align-middle bg-white">
                  <DialogTitle as="h3" class="text-base pb-2 font-medium leading-6 primaryColor">
                    <p class="secondaryColor">Are you sure want to {{isDelete ? 'delete this app ' : 'Regenerate API Secret '}}?</p>
                  </DialogTitle>
  
                  <div class="mt-8 flex justify-end">
                    <button type="button" class=" bg-blue-500 text-white  px-4 mr-2 rounded height whitespace-nowrap outline-none"
                    @click="isDelete ? $store.dispatch('vendor/deleteApp', activeData.appId) : $store.dispatch('vendor/resetApp', activeData.appId)"
                    >
                      Confirm
                    </button>
                    <button type="button"
                    class="border-[#1d4380] border text-[#1d4380] px-4 h-10 rounded outline-none"
                    @click="close()"
                    >
                      Cancel
                    </button>
                  </div>
                </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

</template>

<script lang="ts">
import { defineComponent , PropType } from 'vue';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
export default defineComponent({
    name: 'actionDialog',
    props:{
        activeData: {
            type: Object as PropType<any>,
            requrired: true
        },
        isDelete: {
            type: Boolean,
            required: true,
            default: false
        },
        isOpen: {
            type:Boolean,
            required: true,
            default: false
        }
    },
    components:{
        Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot
    },
    methods:{
        close(){
            this.$emit('isCloseDialog', false)
        }
    },
})
</script>