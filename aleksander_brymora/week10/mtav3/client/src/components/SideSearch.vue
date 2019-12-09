<template>
    <div class="route-input">
        <h1>Select your route</h1>
        <form action="#" @submit.prevent="onSubmit">
            <div class="inputs">
                <vue-simple-suggest
                        name="start"
                        placeholder="Start"
                        autofocus
                        v-model="start"
                        :list="stations"
                        :filter-by-query="true">
                </vue-simple-suggest>
                <vue-simple-suggest
                        name="end"
                        placeholder="End"
                        v-model="end"
                        :list="stations"
                        :filter-by-query="true">
                </vue-simple-suggest>
            </div>
            <button type="submit">Find</button>
        </form>
    </div>
</template>

<script>
    import VueSimpleSuggest from 'vue-simple-suggest';
    import 'vue-simple-suggest/dist/styles.css' // Optional CSS
    import Helper from "../Helper";
    import router from "router"

    export default {
        name: 'side-form',
        components: {
            VueSimpleSuggest
        },
        data() {
            return {
                stations: [],
                error: '',
                start: '',
                end: ''
            }
        },
        methods: {
            onSubmit() {
                router.push({path: 'trip'});
            }
        },
        created: async function () {
            try {
                this.stations = [...new Set([].concat.apply([], await Helper.getLinesArr()))]
            } catch (e) {
                this.error = e.message;
            }
        }
    }
</script>

<style scoped>
    .route-input {
        background-color: yellow;
        padding: 10px;
        border-radius: 15px;
        margin: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
    form {
        width: 100%;
        margin: 1rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    button {
        margin: 15px 0;
        padding: 5px 25px;
        color: black;
        border-radius: 15px;
        border: white solid 2px;
    }
</style>