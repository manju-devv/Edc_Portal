<script lang="ts" setup>
defineProps<{
  dataCount: number;
}>();

const activebox = ref<number|null>(null)
const emit = defineEmits<{
  "on-heading-click": [index: number];
}>();
function showDetails(index: number) {
  activebox.value = activebox.value === index ? null : index;
  emit("on-heading-click", index);
}
</script>

<template>
  <div class="flex gap-8 relative">
    <div v-for="(rowCount, index) in dataCount" :key="index" class="mb-[1rem]">

      <div class=" h-[200px] w-[250px] border-4 rounded-md cursor-pointer bg-sky-100 flex items-center justify-center"
      
        @click="() => {
          showDetails(index);}">
          CLICK HERE 
      </div>

      <div v-if="activebox === index" class="detailsBox absolute top-4  p-4 w-[240px] border bg-gray-100 rounded-md mx-1">
        <p class="text-center">you clicked the box {{ index + 1 }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
