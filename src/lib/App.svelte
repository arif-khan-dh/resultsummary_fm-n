<script>
    import Result from "./components/Result.svelte";
    import Summary from "./components/Summary.svelte";
</script>

<main class="container" >
    <!-- Result component -->
    <Result />
    <Summary />
</main>

<style lang="scss">
    main.container {
        display: flex;
        width: 742px;
        box-shadow: 0px 0px 16px 16px $paleBlue;
        border-radius: 5%;

        @include breakpoint-down(small) {
            flex-direction: column;
            align-items: center;
            width: 375px;
            box-shadow: none;
        }
    }
</style>
