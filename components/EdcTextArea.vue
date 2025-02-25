<script setup lang="ts">
import type { ITextAreaProps, TNullableString } from '~/types/type';

    const modelValue = defineModel<TNullableString>({
        default: null,
    });
    const props = withDefaults(defineProps<ITextAreaProps>(),{
        cols: 50,
        rows: 4,
        label: "",
        elementId: "",
        containerClass: "",
        inputContainerClass: "",
        labelContainerClass: "",
        inputClass: "",
        labelClass: "",
        disabled: false,
        placeholder: "",
        required: false,
        readOnly: false,
        max: 10,
        ellipseCount: 50,
        tabindex: undefined,

    });
    const inputContainerClass = computed(()=>({
        "relative rounded-md": true,
        [props.inputContainerClass]: props.inputContainerClass,
    }));
    const inputClasses = computed(()=>({
        "input-value form-input": true,
        [props.inputClass]: props.inputClass,
        "input-font": !props.inputClass.includes("font"),
        "readonly-form-input cursor-default resize-none": props.readOnly,
    }));

    const emit = defineEmits<{
        "on-input": [];
        "on-focus":[event: FocusEvent];
        "on-model-change":[];
    }>();

    function handleInpChange(){
        if(!modelValue.value) modelValue.value = null;
        emit("on-input");
        emit("on-model-change");
        console.log(modelValue.value)
    }

    function handleFocus(event: FocusEvent){
        emit("on-focus",event);
    }
</script>




<template>
    <div :class="inputContainerClass" class="">
        <textarea
            v-model="modelValue"
            :rows="rows"
            :cols="cols"
            :class="[inputClasses,'px-2 py-1',modelValue?.length === props.max?'border-2 border-red-400 rounded-sm resize-none outline-none':'border-2 border-zinc-400 rounded-sm resize-none outline-none']"
            :placeholder="placeholder || 'start with your name...'"
            :readonly="readOnly"
            :tabindex="tabindex"
            :maxlength="max"
            @input="()=>{handleInpChange();}"
            @focus="handleFocus($event)"
        />
        <div>
            <p v-if="typeof modelValue === 'string' && modelValue.length === props.max" 
            class="err-msg absolute bottom-2 inline-flex bg-red-500 text-white px-4 py-1 rounded-md shadow-md">
            <span><img src="https://cdn-icons-png.flaticon.com/512/7801/7801791.png" alt=""></span>limit 15 characters!
            </p>
        </div>
    </div>


</template>


<style scoped>
    img{
        width: 20px;
        margin-right: 5px;
        margin-top: 2px;
    }
    .err-msg{

        animation: err 2s linear;
    }
    @keyframes err {
        0%{
            opacity: 0;
        }
        50%{
            opacity: 1;
        }
    }
</style>




