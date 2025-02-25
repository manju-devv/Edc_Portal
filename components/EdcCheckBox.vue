<script lang="ts" setup>
import type { ICheckboxProps } from "~/types/type";

const modelValue = defineModel<string[]>({
  default: [],
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
  "on-change":[selected: string[]]
}>();

function onChange(){
  const changedValue = modelValue.value;
  emit("on-change",changedValue)
}


</script>

<template>
  <div class="flex gap-2 ">
    <input class="cursor-pointer accent-green-300 w-[0.9rem]"
      :id="name"
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
    <label :for="name" class="cursor-pointer">{{ name }}</label>
  </div>
</template>


<style scoped>

</style>