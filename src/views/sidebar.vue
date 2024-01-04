<template>

    <div>
      <div >
              <ul role="list" class="space-y-2 ">
                <li   class="md:flex-1 py-2  hover:bg-[#f9fdff] border-l-4" v-for="(step, index) in steps" :key="index" 
                @click="activeTab(step)" :class="{ ' border-[#0081B8] bg-[#f9fdff]': step.route == $route.path , 'border-none' : !step.route == $route.path}"
    >
                  <div class="cursor-pointer">
                      <div @mouseover="hoverIdx = index" @mouseleave="hoverIdx = -1" class="flex flex-col items-center justify-center cursor-pointer min-h-[32px] hover:filter-[]" :class="{ 'text-[#0081B8]': (step.route == $route.path && hoverIdx != index), primaryColor: !step.route == $route.path ,  'active-filter' : hoverIdx == index}">
  
                        <span
                          ><img
                            :class="{ activeImg: (step.route == $route.path && hoverIdx != index) }"
                            class="max-w-[76%] h-auto mx-auto"
                            :src="getImageSrc(step)"
                            :alt="step.svg"
                        /></span>
                        <span
                          class="font-medium text-xs text-center"
                          :class="{
                            'text-[#0081B8]': step.route == $route.path,
                            primaryColor: !step.route == $route.path,
                          }"
                          >{{ step.name }}</span
                        >
                      </div>
                    </div>
                </li>
              </ul>
            </div>
    </div>
  </template>
  
  <script>
  import router from "../router"
  export default {
    components: {   router },
    data(){
      return{ 
        steps: [
        {
            name: "My Apps",
            route: "/home",
            status: "active",
            active: false,
            svg: "home",
          },
        ],
        hoverIdx: -1
      }
    },
    methods: {
      activeTab(val) {
        router.push(val.route);
        this.setActiveTab(val);
  
      },
      setActiveTab(val) {
        this.steps.forEach((el) => {
          if (el.name == val.name) {
            el.active = true;
          } else {
            el.active = false;
          }
        });
      },
      getImageSrc(step) {
        const imgUrl = new URL(`../assets/menu/${step.svg}.svg`, import.meta.url)
          .href;
        return imgUrl;
      },
   
    },
  
    mounted(){
      let index =  this.steps.findIndex((el)=>{
        el.route == this.$route.path
      })
    
      if(index > -1){
        this.setActiveTab(this.steps[index])
      }
    }
  };
  </script>