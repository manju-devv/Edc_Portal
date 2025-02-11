<script setup lang="ts">
import type { ITextInput, TNullableNumber, TNullableString } from '~/types/type';

const input = ref();

const model = defineModel<TNullableNumber|TNullableString>({
    default: null,
});
const props = withDefaults(defineProps<ITextInput>(), {
    label: "",
    elementId: "",
    containerClass: "",
    inputContainerClass: "",
    inputClass: "",
    labelClass: "",
    labelContainerClass: "",
    placeholder: "",
    required: false,
    disabled: false,
    minLength: 0,
    maxLength: 100,
});

const getContainerClass = () => `container relative ${props.containerClass}`.trim();

const getInputId = computed(() => 
    props.elementId || convertWordsIntoCasedWords(props.label || "", "camel case"),
);

</script>

<template>
    <div :class="getContainerClass()">
        <div>
            <input 
                :id="getInputId()"
                v-model="model"
                
            />
        </div>
    </div>
</template>



<style scoped>

</style>