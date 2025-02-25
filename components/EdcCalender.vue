<script setup lang="ts">
import { ref } from 'vue';


const selectedDate = ref<string | null>(null);

function handleDateChange(event: Event) {
  const target = event.target as HTMLInputElement;
  selectedDate.value = target.value;
}
</script>

<template>
  <div>
    <input
      id="datePicker"
      type="date"
      v-model="selectedDate"
      @change="handleDateChange"
      class="border-2 border-gray-300 rounded-md p-1 px-6"
    />
    <p v-if="selectedDate" class="text-green-600">
      Selected Date: {{ selectedDate }}
    </p>
  </div>
</template>

<style scoped>

</style>
