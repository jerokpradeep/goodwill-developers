<template>
    <div>
        <Header />
        <div class="w-screen">
            <div class="flex flex-col lg:flex-row bg-[#f7f5f5]" style="height: calc(100vh - 72px)">
                <div class="border-r w-[150px] px-2 hidden lg:block">
                   <sidebar />
                </div>
                <div class="w-full h-[calc(100vh-72px)] overflow-y-auto">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Header from "../components/header.vue"
import sidebar from "./sidebar.vue";
import { defineComponent } from "vue";
export default defineComponent({
    name: 'mainLayout',
    components: {
        Header,
        sidebar
    }
})

</script>