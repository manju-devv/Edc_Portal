<script setup lang="ts">
import { options, type TNullableString } from "~/types/type";

interface IFormModel {
  userName: TNullableString;
  password: TNullableString;
  enterPriseName: TNullableString;
}
const formModel = ref<IFormModel>({
  userName: "",
  password: "",
  enterPriseName: "",
});

const loading = ref<boolean>(false);
const textarea = ref(null);
const changedValue = ref<string[]>([]);
const selectedValue = ref(null);

interface IAnimal {
  id: number;
  name: string;
}
const pets: IAnimal[] = [
  {
    id: 1,
    name: "Admin",
  },
  {
    id: 2,
    name: "User",
  },
];

// const handleGoBack = () => {
//   alert("form submitted successfully");
//   window.location.href = "/loginForm";
// };
const handleGoBack = () => {
  if (!formModel.value.userName || !formModel.value.password || !formModel.value.enterPriseName ||!textarea.value || !changedValue.value || !selectedValue.value ) {
    alert("Please fill in all required fields.");
    return;
  }

  alert("Form submitted successfully!");
  window.location.href = "/loginForm";
};
</script>

<template>
  <h1
    class="heading text-center mt-6 text-3xl font-bold underline text-green-600"
  >
    Login-form
  </h1>
  <div class="container flex justify-center p-8">
    <form @submit.prevent>
      <div class="form p-12 rounded-md">
        <div class="input-container flex flex-col gap-2 items-center">
          <div class="flex gap-4 items-center w-full">
            <label for="" class="text-lg w-36">Username:</label>
            <EdcTextInput
              v-model="formModel.userName"
              label="userName"
              type="text"
              placeholder="enter name"
              label-class="white-text"
              :disable-default-value-setter="true"
              :disabled="loading"
            />
          </div>
          <div class="flex gap-4 items-center">
            <label for="" class="text-lg w-36">Password:</label>
            <EdcTextInput
              v-model="formModel.password"
              label="password"
              type="password"
              placeholder="enter password"
              label-class="white-text"
              :disable-default-value-setter="true"
              :disabled="loading"
            />
          </div>
          <div class="flex gap-4 items-center">
            <label for="" class="text-lg w-36">Enterprise Name:</label>
            <EdcTextInput
              v-model="formModel.enterPriseName"
              label="Enterprise Name"
              type="text"
              placeholder="Enter enterprise name"
              label-class="white-text"
              :disable-default-value-setter="true"
              :disabled="loading"
            />
          </div>
        </div>
        <div class="mt-6 flex flex-col gap-2">
          <label for="" class="text-lg">describe yourself in few lines:</label>
          <EdcTextArea
            v-model="textarea"
            container-class="w-full"
            label="text area"
            :disabled="false"
          />
        </div>
        <div class="checkbox-container flex gap-5 mt-2">
          <div v-for="(pet, index) in pets" :key="index">
            <EdcCheckBox
              v-model="changedValue"
              :name="pet.name"
              :label="pet.name"
              :value="pet.name"
              label-class="role"
              input-class="select role"
            />
          </div>
        </div>

        <div class="mt-4">
          <label for="" class="">Select Gender</label>
          <div v-for="opt in options" class="flex gap-6">
            <edc-radio
              v-model="selectedValue"
              :name="opt.lable"
              :label="opt.lable"
              :value="opt.value"
              label-class="flex"
            />
          </div>
        </div>
        <div class="mt-6">
          <EdcCalender />
        </div>
        <div class="flex items-center justify-center mt-8">
          <EdcActionBtn
            container-class="px-[1rem] py-[0.5rem] bg-green-300 text-white"
            type="submit"
            label="submit"
            :on-click="
              () => {
                handleGoBack();
              }
            "
          />
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.form {
  box-shadow: 3px 3px 6px black;
}
.heading {
  text-shadow: 2px 2px 3px chartreuse;
}
</style>
