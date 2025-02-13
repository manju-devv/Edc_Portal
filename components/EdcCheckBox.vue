<script lang="ts" setup>
import type { ICheckboxProps } from "~/types/type";

const modelValue = defineModel<boolean>({
  default: false,
});

const props = withDefaults(defineProps<ICheckboxProps>(), {
  label: "",
  elementId: "",
  containerClass: "",
  inputClass: "",
  labelClass: "",
  checked: false,
  required: false,
  value: "",
  readOnly: false,
  disabled: false,
  setCheckedToModel: false,
  tabindex: undefined,
});
const emit = defineEmits<{
  "on-change":[selected: boolean]
}>();

function onChange(){
  const changedValue = modelValue.value;
  emit("on-change",changedValue)
}


</script>

<template>
  <div>
    <input
      v-model="modelValue"
      :value="value"
      type="checkbox"
      :label="label"
      :name="name"
      :checked="checked"
      :tabindex="tabindex"
      @click.stop
      @change="onChange()"
    />
  </div>
</template>

<style></style>
