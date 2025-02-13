<script setup lang="ts">
const props = defineProps({
  cancelLabel: { type: String, default: "Cancel" },
  submitLabel: { type: String, default: "Submit" },
  containerClass: { type: String, default: "" },
  hideCancel: { type: Boolean, default: false },
});

const emit = defineEmits(["close"]);

function handleCancel() {
  if (confirm("Are you sure you want to cancel?")) {
    emit("close");
  }
}

function handleSubmit() {
  emit("close");
}
</script>

<template>
  <div class="modal-overlay">
    <div :class="['modal', containerClass]">
      <div class="modal-header">
        <button class="close-button" @click="handleCancel">Close</button>
      </div>

      <div class="modal-content">
        <slot></slot>
      </div>

      <div class="modal-footer">
        <button
          v-if="!hideCancel"
          class="modal-button cancel-button"
          @click="handleCancel"
        >
          {{ cancelLabel }}
        </button>
        <button class="modal-button submit-button" @click="handleSubmit">
          {{ submitLabel }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.modal-header {
  padding: 1rem;
  background: #f5f5f5;
  text-align: right;
}

.close-button {
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: #333;
}

.modal-content {
  padding: 1rem;
  min-height: 100px;
}

.modal-footer {
  padding: 1rem;
  background: #f9f9f9;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.modal-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

.cancel-button {
  background: #ccc;
  color: #333;
}

.submit-button {
  background: #007bff;
  color: white;
}

.submit-button:hover {
  background: #0056b3;
}
</style>
