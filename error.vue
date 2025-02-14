<script setup lang="ts">
    import errorGif from "./assets/icons/sygic.gif";
    import error404 from "./assets/icons/404.gif"
    import rocket from "./assets/icons/anime-rocket.gif"
</script>

<template>
    <div class="relative">
        <div class="imagee">
            <img class="err w-full h-[100vh]" :src="error404" alt="">
        </div>
        <img :src="rocket" alt="" class="rocket w-[50px]">
        <NuxtLink to="/" class="home absolute top-[35%] left-[65%] text-[2rem] border-2 border-blue-200 rounded-md px-6 text-gray-300">Home</NuxtLink>
    </div>
</template>



<style scoped>
    .home{
        transition: 1s ease;
        animation: glow 3s infinite alternate;
    }
    .home:hover{
        transform: translateX(-3px) translateY(-3px);
        box-shadow: 10px 10px 9px black;
    }
    @keyframes glow {
        0% { text-shadow: 0 0 5px white, 0 0 10px skyblue; }
        50% { text-shadow: 0 0 10px white, 0 0 40px skyblue; }
        100% { text-shadow: 0 0 5px white, 0 0 10px skyblue; }
    }

    .rocket{
        position: absolute;
        top: 0;
        /* filter: invert(1); */
        /* mix-blend-mode: multiply; */
        /* mix-blend-mode:color; */
        top: 26%;
        left: 67%;
        /* transform-origin: center 100px; */
        animation: orbit 10s linear infinite;
    }

    @keyframes orbit {
    0% {
        transform: translateX(0px) translateY(5px) rotate(0deg);
    }
    25% {
        transform: translateX(100px) translateY(-50px) rotate(90deg);
    }
    50% {
        transform: translateX(150px) translateY(100px) rotate(200deg);
    }
    75% {
        transform: translateX(-130px) translateY(130px) rotate(290deg);
    }
    85% {
        transform: translateX(-20px) translateY(-50px) rotate(340deg);
    }
    100% {
        transform: translateX(0px) translateY(0px) rotate(360deg);
    }
}

</style>
