<script setup lang="ts">

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  placeholder: {
    type: String,
    default: "Select fruits below....",
  },
});

const isOpen = ref<boolean>(false);


const selectedOption = ref<string>("");


function toggleDropdown() {
  isOpen.value = !isOpen.value;
}


function selectOption(option:any) {
  selectedOption.value = option;
  isOpen.value = false; 
}
</script>


<template>
    <div class="dropdown mb-[2rem]">

      <button class="dropdown-button" @click="toggleDropdown">
        {{ selectedOption || placeholder }}
      </button>
  
      <ul v-if="isOpen" class="dropdown-menu">
        <li
          v-for="(item, index) in options"
          :key="index"
          class="dropdown-item"
          @click="selectOption(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </template>


<style scoped>

.dropdown {
  position: relative;
  display: inline-block;
  width: 200px;
}


.dropdown-button {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  text-align: left;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.dropdown-button:hover {
  background-color: #f1f1f1;
}


.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 0.5rem;
  padding: 0;
  list-style: none;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.8);
  z-index: 1000;
}


.dropdown-item {
  padding: 0.5rem;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f1f1f1;
}
</style>