<script setup lang="ts">
import type { ITextInput, TNullableNumber, TNullableString } from '~/types/type';

const input = ref();
const showPassword = ref<boolean>(false);
const isInpFocused = ref<boolean>(false);

const model = defineModel<TNullableNumber | TNullableString>({
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
    readOnly:false,
    minLength: 0,
    maxLength: 30,
    disableDefaultValueSetter: false,
});

const getContainerClass = () => `container relative ${props.containerClass}`.trim();


const getInputType = () => {
    let inputType = props.type;
    if(props.type === "password" && showPassword.value) inputType = "text";
    return inputType;
};

const inputClass = computed(()=>({
    "input-value form-input text-ellipsis": true,
    [props.inputClass]: props.inputClass,
    "pointer-events-none readonly-form-input": props.readOnly,
}));

const emit = defineEmits<{
    "on-focus": [event: FocusEvent];
    "on-input": [inputValue: TNullableNumber | TNullableString];
}>();

function handleFocus(event:FocusEvent){
    isInpFocused.value = true;
    emit("on-focus",event);
    console.log("i am focussed",event);
}
function preventInpScroll(event:WheelEvent){
    console.log("scroll");
    if(event.deltaX != 0) event.preventDefault();
    else if(isInpFocused.value) event.preventDefault();
}
function handleInput(){
    if(!props.disableDefaultValueSetter && (model.value === null || model.value === '')){
        model.value = null;
    }
    emit("on-input",model.value);
}

</script>

<template>
    <div :class="getContainerClass()">
        <div>
            <input class="border-2 rounded-md"
                v-model="model"
                :type="getInputType()"
                :class="inputClass"
                :placeholder="(!readOnly && placeholder) || ''"
                :readonly="readOnly"
                :tabindex="tabindex"
                :maxLength="props.maxLength"
                @focus="handleFocus($event)"
                @input="handleInput"
                @wheel="preventInpScroll($event)"
            />
        </div>
    </div>
</template>



<style scoped>

</style>