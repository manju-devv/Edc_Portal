<script setup lang="ts">

import { options, type TNullableString } from "~/types/type";

const search = ref(null);


const dataCount = ref(2);






const isModalOpen = ref(false);

function openModal() {
  isModalOpen.value = true;
}

function handleCloseModal() {
  isModalOpen.value = false;
}

const fruits = ref(["Apple", "Banana", "Cherry", "Grapes", "Orange"]);



const tabs = ref(["Home", "Profile", "Settings"]);
const selectedTab = ref(0);

const onTabChange = (tabIndex: number) => {
  selectedTab.value = tabIndex;
};
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div>
      
      <label for="">search bar</label>
      <edc-search-bar v-model="search" element-id="subjectSearch" />

      


      <h1>Accordian Boxes</h1>
      <EdcAccordian :dataCount="dataCount" />
    </div>

    <div>
      <button @click="openModal" class="bg-green-300 px-4 py-2 mb-[2rem] rounded-md">
        Open Modal
      </button>

      <EdcPopUp
        v-if="isModalOpen"
        :container-class="'min-w-[92vw] max-w-[92vw]'"
        submit-label="Close"
        :hide-cancel="false"
        @close="handleCloseModal"
      >
        <p class="bg-red-200 px-6 py-3 rounded-sm inline-flex">
          This is the content of the modal.
        </p>
      </EdcPopUp>
    </div>

    <div>
      <h1>Fruit Selector</h1>
      <EdcDropdown :options="fruits" placeholder="Select a fruit" />
    </div>

    <div>

    </div>
    <div>
      <UseEleHover />
    </div>

    <div>
      <EdcTabView
        :tabs="tabs"
        :activeIndex="selectedTab"
        @on-tab-change="onTabChange"
      >
        <template #actions="{ label, active }">
          <div v-if="active" class="p-4 border mt-2">
            <p>
              Content for: <strong>{{ label }}</strong>
            </p>
          </div>
        </template>
      </EdcTabView>
    </div>

    <div>
      <EdcBreadCrumb />
    </div>
    <div>
      <PasswordEye />
    </div>
  </div>
</template>

<style scoped></style>
