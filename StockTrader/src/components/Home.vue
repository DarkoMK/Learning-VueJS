<template>
    <div>
        <h1>Trade or view</h1>
        <h6>You may save & load data</h6>
        <h6>Click end day to begin new day</h6>
        <hr>
        <p>Your Funds: {{ funds | currency }}</p>
    </div>
</template>

<script>
    export default {
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        }
    }
</script>