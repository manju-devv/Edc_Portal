
<script setup lang="ts">
    import { useElementHover } from '@vueuse/core';
    const box = ref<HTMLElement|null>(null);
    const isHovered = useElementHover(box);
</script>


<template>
    <div ref="box" class="w-[200px] h-[200px] bg-gray-300 border-2 border-green-300 hover:bg-blue-200 cursor-pointer rounded-md">
        <p v-if="isHovered"> 🟢 Hovering! done by useElementHover</p>
    </div>
</template>

<style scoped>

</style>