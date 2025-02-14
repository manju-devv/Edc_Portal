<script setup lang="ts">
import { ref } from "vue";

const breadcrumbs = ref([
  { label: "Home", path: "/" },
  { label: "Electronics", path: "/electronics" },
  { label: "Mobile Phones", path: "/electronics/phones" },
  { label: "iPhone 15", path: "/electronics/phones/iphone-15" },
]);
</script>

<template>
  <nav>
    <ul class="breadcrumb mb-[2rem] mt-[1rem]">
      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="hover:text-blue-500">
        <router-link v-if="index !== breadcrumbs.length - 1" :to="crumb.path">{{ crumb.label }}</router-link>
        <span v-else>{{ crumb.label }}</span>
      </li>

    </ul>
  </nav>
</template>

<style scoped>
.breadcrumb {
  display: flex;
  list-style: none;
  gap: 0.5rem;
}
.breadcrumb li::after {
  content: ">";
  margin-left: 0.5rem;
}
.breadcrumb li:last-child::after {
  content: "";
}
</style>
