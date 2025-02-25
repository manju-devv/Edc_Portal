<script setup lang="ts">
import type { IRadioProps, TNullableNumber, TNullableString } from '~/types/type';

const modelValue = defineModel<TNullableString | TNullableNumber>({
    default: null,
});
const props = withDefaults(defineProps<IRadioProps>(),{
    label: "",
    elementId: "",
    containerClass: "",
    inputClass: "",
    labelClass: "",
    checked: false,
    required: false,
    allowDeselect: false,
    disabled: false,
    tabindex: undefined,
});
const preSelected = ref<boolean>(props.checked);

const emit = defineEmits<{
    "on-change" :[selectedValue: string]
}>();


function onChange(event: Event) {
    const selectedValue = (event.currentTarget as HTMLInputElement).value;
    emit("on-change", selectedValue);
}
function handleDeselect(event: Event) {
    const selectedValue = (event.currentTarget as HTMLInputElement).value;
    if (props.allowDeselect && modelValue.value === selectedValue) modelValue.value = null;
}   

</script>


<template>
    <div class="flex gap-[1rem]">  
        <input class="cursor-pointer accent-green-300 "
            :id="name"
            v-model="modelValue"
            :value="value"
            type="radio"
            :name="name"
            :checked="preSelected"
            :tabindex="tabindex"
            @change="onChange($event)"
            @click="handleDeselect($event)"
            />
            <label :for="name" class="cursor-pointer" >{{ value }}</label>
    </div>
    
</template>



<style scoped>

</style>