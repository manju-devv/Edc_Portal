<script setup lang="ts">
    import { type TButtonAction } from '~/types/type';

    const props = withDefaults(
        defineProps<{
            containerClass?: string;
            labelClass?: string;
            label: string;
            type?: "cancel" | "submit" | "delete";
            disabled?: boolean;
            showLoader?: boolean;
            tabindex?: number;
            onClick: TButtonAction;
        }>(),
        {
            disabled: false,
            type: "submit",
            containerClass: "md:py-[0.4rem] md:px-[3rem] lg:py-[0.8rem] lg:px-[6rem]",
            labelClass: "",
            tabindex: undefined,

        },
    );

    const loading = ref<boolean>(false);


    


    async function handleClick() {
        loading.value = true;
        await props.onClick();
        loading.value = false;
    }
</script>

<template>
    <button
        class="button"
        type="button"
        :tabindex="tabindex"
        @click="async () => await handleClick()"
    >
        <span>{{ label }}</span>
    </button>
</template>


<style scoped>
    .button{
        display: flex;
        background-color: aqua;
        padding: 10px 25px;
        margin-bottom: 2rem;
        border-radius: 5px;
        color: rgb(54, 51, 51);
        border: 1px solid gray;
        font-weight: 500;
    }
</style>