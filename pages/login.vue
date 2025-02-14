<script setup lang="ts">
import EdcTextArea from "~/components/EdcTextArea.vue";
import { options, type TNullableString } from "~/types/type";

const search = ref(null);
const textarea = ref(null);
const selectedValue = ref(null);
const changedValue = ref([]);
const dataCount = ref(2);

interface IFormModel {
  userName: TNullableString;
  password: TNullableString;
  enterPriseName: TNullableString;
}
const formModel = ref<IFormModel>({
  userName: null,
  password: null,
  enterPriseName: null,
});
const loading = ref<boolean>(false);

interface IAnimal {
  id: number;
  name: string;
}
const pets: IAnimal[] = [
  {
    id: 1,
    name: "dog",
  },
  {
    id: 2,
    name: "cat",
  },
];
const isModalOpen = ref(false);

function openModal() {
  isModalOpen.value = true;
}

function handleCloseModal() {
  isModalOpen.value = false;
}

const fruits = ref(["Apple", "Banana", "Cherry", "Grapes", "Orange"]);

const handleGoBack = () => {
  console.log("going back to the previous page...");
  alert("going to previous page");
};

const tabs = ref(["Home", "Profile", "Settings"]);
const selectedTab = ref(0); 

const onTabChange = (tabIndex: number) => {
  selectedTab.value = tabIndex;
};
</script>

<template>
  <div>
    <label for="">Username:</label>
    <EdcTextInput
      v-model="formModel.userName"
      label="userName"
      type="text"
      placeholder="enter name"
      label-class="white-text"
      :disable-default-value-setter="true"
      :disabled="loading"
    />
    <label for="">Password:</label>
    <EdcTextInput
      v-model="formModel.password"
      label="password"
      type="password"
      placeholder="enter password"
      label-class="white-text"
      :disable-default-value-setter="true"
      :disabled="loading"
    />
    <label for="">Enterprise Name:</label>
    <EdcTextInput
      v-model="formModel.enterPriseName"
      label="Enterprise Name"
      type="text"
      placeholder="Enter enterprise name"
      label-class="white-text"
      :disable-default-value-setter="true"
      :disabled="loading"
    />
    <label for="">Textarea</label>
    <EdcTextArea
      v-model="textarea"
      container-class="w-full"
      label="Success Notification Email IDs (Comma seperated)"
      :disabled="false"
    />
    <label for="">search bar</label>
    <edc-search-bar v-model="search" element-id="subjectSearch" />
    <p>you are identified as : {{ selectedValue }}</p>
    <div v-for="opt in options" class="flex gap-6">
      <edc-radio
        v-model="selectedValue"
        :name="opt.lable"
        :label="opt.lable"
        :value="opt.value"
        label-class="flex"
      />
      <label for="">{{ opt.lable }}</label>
    </div>
    <p>you opted for:{{ changedValue }}</p>
    <div v-for="(pet, index) in pets" :key="index" class="flex gap-6">
      <EdcCheckBox
        v-model="changedValue"
        :name="pet.name"
        :label="pet.name"
        :value="pet.name"
        label-class="pets"
        input-class="select pets"
      />
      <label>{{ pet.name }}</label>
    </div>
    <h1>Accordian Boxes</h1>
    <EdcAccordian :dataCount="dataCount" />
  </div>

  <div>
    <button @click="openModal" class="bg-green-300 px-4 py-2 mb-[2rem]">
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
    <EdcActionBtn
      container-class="px-[1rem] py-[0.5rem] bg-blue-400 text-white"
      label="Go Back"
      :on-click="
        () => {
          handleGoBack();
        }
      "
    />
  </div>
  <div>
    <UseEleHover />
  </div>

  <div>
    <EdcTabView :tabs="tabs" :activeIndex="selectedTab" @on-tab-change="onTabChange">
      <template #actions="{ label, active }">
        <div v-if="active" class="p-4 border mt-2">
          <p>Content for: <strong>{{ label }}</strong></p>
        </div>
      </template>
    </EdcTabView>
  </div>

  <div>
    <EdcBreadCrumb />
  </div>

</template>

<style scoped></style>


