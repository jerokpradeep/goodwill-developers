<style scoped>
.imgHeight {
  @apply h-[72px] border-b;
}
</style>

<template>
  <div class="w-full bg-[#f7f5f5]">
    <div class="imgHeight flex items-center justify-between p-4">
      <div class="space-x-4 flex">
        <div class="lg:hidden block mt-4">
          <burgerMenu />
        </div>
        <div>
          <img src="../assets/goodwill.svg" alt="" />
        </div>
      </div>
      <div class="">
        <p
          class="text-blue-500 cursor-pointer"
          @click="$store.dispatch('errorHandle/resetLocal')"
        >
          Logout
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import burgerMenu from '../components/hamburgerMenu.vue';
export default defineComponent({
  components: {
    burgerMenu,
  },
});
</script>
