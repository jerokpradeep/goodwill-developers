<template>
  <!-- !overflow-hidden -->
  <div>
    <div class="h-screen !overflow-hidden">
      <headerComp />
      <div class="flex flex-row bg-[#f7f5f5] "
      style="height: calc(100vh - 56px)">
    <div class="border-r border-[#E0E0E0] w-[80px] hidden lg:block lg:h-[calc(100vh-56px)] h-[calc(100vh-56px)] overflow-y-auto overflow-x-hidden">
          <sidebar />
        </div>
        <div
        class="w-full  lg:h-[calc(100vh-56px)] h-[calc(100vh-56px)] overflow-y-auto"
        >
        <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerComp from "../components/header.vue";
import sidebar from "../views/sidebar.vue"
import router from "../router"
export default {
  components: { headerComp , router ,sidebar},
  data(){
    return{ 
      
    }
  },
};
</script>