<script setup lang="ts">
    import { useElementHover } from '@vueuse/core';

    interface ITabHeader{
        id: number;
        label: string;
        active: boolean;
    }
    const props = defineProps<{
        tabs: string[],
        activeIndex?: number,
    }>();

    const emit = defineEmits<{
        "on-tab-change": [tabIndex: number];
    }>();

    const isActiveTab = (index: number) => 
        typeof props.activeIndex === "undefined" && index === 0 ? true : !!(typeof props.activeIndex === "number" && props.activeIndex === index);
    

    const setTabHeaders = (): ITabHeader[] => 
        props.tabs.map((tabRow,index)=>({
            id:index,
            label: tabRow,
            active: isActiveTab(index),
        }));


    const tabListRef = ref<HTMLElement | null>(null);
    const tabHeaders = ref<ITabHeader[]>([...setTabHeaders()]);
    const activeTabIndex = ref<number>(props.activeIndex || 0);

    function handleChangeTab(tabIndex: number){
        activeTabIndex.value = tabIndex;
        tabHeaders.value = tabHeaders.value.map((tabRow, index) => ({
            ...tabRow,
            active: index === tabIndex,
        }));
        emit("on-tab-change", tabIndex);
    }

</script>



<template>
    <div>
        <ul ref="tabListRef">
            <li v-for="(tabRow,index) in tabHeaders" :key="tabRow.id" 
            :class="['inline-flex transition-all  px-[1rem] pb-[0.5rem] py-[0.5rem] mt-2 rounded-md whitespace-nowrap',tabRow.active?'bg-green-300 text-gray-600 font-semibold transition-all ease':'']">
            <button @click="()=>handleChangeTab(index)">{{ tabRow.label }}</button>
            </li>
        </ul>
        <slot name="actions" v-bind="{ ...tabHeaders[activeTabIndex] }" />
    </div>
</template>



<style scoped>

</style>