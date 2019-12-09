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
                <!--                <input type="text" name="start" placeholder="Start" v-model="start" autofocus>-->
                <!--                <input type="text" name="end" placeholder="End" v-model="end">-->
            </div>
            <button type="submit">Find</button>
        </form>
    </div>
</template>

<script>
    import VueSimpleSuggest from 'vue-simple-suggest';
    import 'vue-simple-suggest/dist/styles.css' // Optional CSS
    import Helper from "../helper";
    import router from "../router";
    export default {
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
                // this.$emit('createOrUpdate', this.station);
                router.push({path: 'trip/' + this.start + '/' + this.end });
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
    .inputs {
        display: flex;
        flex-direction: row;
        margin: 0 20px;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
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
</style>
