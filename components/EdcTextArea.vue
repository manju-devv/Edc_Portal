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
        max: 1000,
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
    }

    function handleFocus(event: FocusEvent){
        emit("on-focus",event);
    }
</script>




<template>
    <div :class="inputContainerClass">
        <textarea class="border-2 resize-none"
            v-model="modelValue"
            :rows="rows"
            :cols="cols"
            :class="inputClasses"
            :placeholder="placeholder || ''"
            :readonly="readOnly"
            :tabindex="tabindex"
            @input="()=>{handleInpChange();}"
            @focus="handleFocus($event)"
        />
    </div>

</template>


<style scoped>

</style>