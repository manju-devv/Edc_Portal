<script setup lang="ts">
import type { TNullableString } from '~/types/type';
import searchLogo from './../assets/icons/search.svg'


const model = defineModel<TNullableString>();

interface ISearch {
    elementId: string;
    inputClass?: string;
    placeholder?: string;
    disabled?: boolean;
    label?: string;
    labelClass?: string;
    containerClass?: string;
}

const props = withDefaults(defineProps<ISearch>(),{
    inputClass: "",
    placeholder: "Search...",
    disabled: false,
    label: "",
    labelClass: "",
    containerClass: "",
});
const inputClasses = computed(() => ({
        "outline-none w-[90%]": true,
        [props.inputClass]: props.inputClass,
        "input-font": !props.inputClass.includes("font"),
    }));

</script>

<template>
    <div class="flex">
        <img :src="searchLogo" alt="" class="w-[1.1rem] absolute left-[47%] top-[57%] cursor-pointer">
        <input class=" border-2 max-w-[250px] rounded-sm"
            v-model="model"
            type="text"
            :class="inputClasses"
            :placeholder="placeholder || ''"
        />
    </div>
</template>



<style scoped>

</style>