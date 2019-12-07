<template>
    <div class="route-input">
        <h1>Select your route</h1>
        <form>
            <div class="inputs">
                <input type="text" name="start" placeholder="Start" v-model="start">
                <input type="text" name="end" placeholder="End" v-model="end">
            </div>
            <button type="submit">Find</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                start: '',
                end: ''
            }
        }
    }
</script>

<style scoped>
    h1 {
        font-weight: bold;
        font-size: 48px;
        margin-bottom: 100px;
    }
    .route-input {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 70vh;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input {
        font-size: 18px;
        border: none;
        border-bottom: 5px solid yellow;
        padding: 2px;
        margin: 15px;
    }
    button {
        margin-top: 40px;
        padding: 10px 25px;
        background-color: yellow;
        border: none;
        border-radius: 15px;
        font-size: 24px;
        font-weight: bold;
    }
    input:focus{
        outline: none;
    }
</style>
