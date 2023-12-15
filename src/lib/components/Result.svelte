<script>
    import Score from "./Score.svelte";
    import Messages from "../../data/result_messages.json";
    import { subscribe } from "../stores/FinalScore";
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    let congratulatory_msg = "Great";
    let percentage = 60;
    let isPassed = true;

    onMount(() => {
        subscribe((finalScore) => {
            for(const message of Messages) {
                if (finalScore > message.greater_than) {
                    congratulatory_msg = message.congratulatory_msg;
                    percentage = message.percentage;
                    isPassed = true;
                    break;
                }
                congratulatory_msg = "Unsuccessful";
                percentage = 70;
                isPassed = false;
            }
        });
    });
</script>

<div class="result">
    <div class="title">Your Result</div>
    <Score />
    <div class="description">
        {#key percentage}
        <div class="congratulatory_msg" in:fade={{duration: 800}}>
            { congratulatory_msg }
        </div>
        {/key}
        <div class="message">You scored 
            {#key isPassed}
                <span in:fade={{duration: 800}}>
                    {#if isPassed}
                        higher
                    {:else}
                        lower
                    {/if}
                </span>
            {/key}
            than 
            {#key percentage}
                <span in:fade={{duration: 800}}>{percentage}</span>
            {/key}% of the people who have taken these tests.</div>
    </div>
</div>

<style lang="scss">    
    .result {
        width: 50%;
        background-image: linear-gradient($bgLightSlateBlue, $bgLightRoyalBlue); 

        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem 0;
        border-radius: 5%;
        color: $lightLavender;   
        
        @include breakpoint-down(small) {
            width: 95%;
            border-radius: 0 0 30px 30px;
            padding: 1.5rem 0;
        }
    }

    .title {
        font-size: 1.4rem;

        @include breakpoint-down(small) {
            font-size: 1.2rem;
        }
    }

    .description {
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .congratulatory_msg {
        font-size: 1.4rem;
        font-weight: 700;
        color: $paleBlue;

        @include breakpoint-down(small) {
            font-size: 1.2rem;
        }
    }

    .message {
        margin-top: 20px;
        text-align: center;
        font-size: 1.1rem;

        @include breakpoint-down(small) {
            font-size: 1rem;
            margin-top: 16px;
        }
    }

</style>
