<style scoped>
.imgHeight{
    @apply h-[72px] border-b
}

</style>


<template>
    <div class="w-full">
      <div class="  h-[56px] border-b border-[#E0E0E0] flex items-center justify-between px-4 ">
        <div class="flex ">
          <div class="lg:hidden mt-[18px]  px-auto"> 
            <burgerMenu />
          </div> 
          <div  class="  lg:w-[60px] border-[#E0E0E0]  border-r-2  h-[56px] items-center flex		">
            <img src="../assets/goodwill.svg"  alt="" class="max-w-[80%] h-10  lg:block hidden " />
          </div>
          <div  class="ml-3 flex items-center uppercase primaryColor">Goodwill - Developers </div>
        </div>
        <div class="text-xs">
          {{ getUserId }} , 
          <p class="text-blue-500 cursor-pointer" @click="logout()">Logout</p>
        </div>
      </div>
    </div>
    <confimDialog />

  </template>
<script>
import { defineComponent } from "vue";
import { mapGetters, mapState } from "vuex";
import burgerMenu from "../components/hamburgerMenu.vue"
import confimDialog from "./confimDialog.vue"
export default defineComponent({
    components: {
        burgerMenu,
        confimDialog
    },
    computed: {
    ...mapGetters('auth', ['getUserId']),
    ...mapState(["localItems"]),
  },
  methods: {
    logout() {
      this.$store.commit("setLogoutCondition", true);
    },
   
   
},
}
)

</script>