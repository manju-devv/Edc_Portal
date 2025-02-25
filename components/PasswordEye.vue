<script setup lang="ts">

    const showPassword = ref(false);
    const inputType = ref('password');
    const togglePassword = () => {
        showPassword.value = !showPassword.value;
        inputType.value = showPassword.value? 'text' : 'password';
    }
</script>

<template>
    <div class="password">
        <input :type="inputType" id="password" placeholder="password" maxlength="15">
        <img @click="togglePassword" id="pass" :src="showPassword ? 'https://cdn-icons-png.flaticon.com/128/44/44326.png' : 'https://cdn-icons-png.flaticon.com/128/8173/8173177.png'" alt="">
    </div>
    <form >
        <label for="text">enter</label>
        <input type="text" id="text" required>
        <button type="submit" class="bg-pink-300">submit</button>
    </form>

</template>



<style scoped>
    .password{
        position: relative;
        display: inline-block;
        border: 1px solid black;
        margin-bottom: 2rem;
    }
    .password input{
        padding: 10px 15px;
        outline: none;
        border: 0;
    }
    .password img{
        position: absolute;
        width: 30px;
        right: 10px;
        top: 10px;
        cursor: pointer;
     
    }
</style>


