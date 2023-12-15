<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import { subscribe } from "../stores/FinalScore";
    let _finalScore = 76;

    onMount(() => {
        subscribe((newFinalScore) => {
            _finalScore = newFinalScore;
        });
    });
</script>

<div class="score">
    {#key _finalScore}
        <div class="scored" in:fade={{duration: 800}}>{ _finalScore }</div>
    {/key}
    <div class="total">of 100</div>
</div>

<style lang="scss">    
    .score {
        height: 200px;
        width: 200px;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;        
        
        border-radius: 50%;
        background-image: linear-gradient($circleVioletBlue, $circlePersianBlue);
        margin: 40px 0 30px;
        
        @include breakpoint-down(small) {
            height: 140px;
            width: 140px;  
            margin: 28px 0 18px; 
        }
    }

    .scored {
        font-size: 4.8rem;
        font-weight: 800;
        color: $white;

        
        @include breakpoint-down(small) {
            font-size: 3.5rem;
        }
    }
    
    .total {
        color: $lightLavender;
    }
</style>