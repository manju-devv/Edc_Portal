<script setup lang="ts">
import EdcTextArea from '~/components/EdcTextArea.vue';
import type { TNullableString } from '~/types/type';

    const search = ref(null);

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
        container-class="w-full"
        label="Success Notification Email IDs (Comma seperated)"
        :disabled="false"
        />
        <label for="">search bar</label>
        <edc-search-bar
            v-model="search"
            element-id="subjectSearch"
            placeholder="Search"
        />
    </div>
</template>



<style scoped>

</style>