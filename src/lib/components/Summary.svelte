<script>
    import Category from "./Category.svelte";
    import Categories from "../../data/data.json";
    import Button from "./Button.svelte";
    import { isBlinking } from "../stores/Blink";
    import { onMount } from "svelte";
    
    let _isBlinking = true;
    onMount(() => {
        isBlinking.subscribe((newValue) => {
            _isBlinking = newValue;
        });
    });
</script>

<div class="summary">
    <div class:hide={!_isBlinking} class:helicopter={_isBlinking} class:blink={_isBlinking}>
        <span>Hover over & click</span>
    </div>
    <div class="title">Summary</div>
    <ul class="categories">
        {#each Categories as category, i}        
            <Category 
                title={category.category} 
                score={category.score}
                icon={category.icon}
                index={i}
                />
        {/each}
    </ul>
    <Button />
</div>

<style lang="scss">    
    .summary {        
        width: 50%;
        padding: 36px;  
        position: relative; 

        @include breakpoint-down(small) {
            width: 100%;
        }
    }

    .title {
        color: $darkGrayBlue;
        font-weight: 700;     
        font-size: 1.2rem;
    }

    ul.categories {
        list-style: none;
        padding: 0px;
        margin-top: 26px;
        position: relative;
    }

    .hide {
        display: none;
    }

    .helicopter {
        position: absolute;
        left: 150px;
        top: 30px;
        font-size: 18px;
        font-family: "Comic Neue";
        color: #BA55D3;
        // color: #000000;
        top: 20px;
        transform: rotateZ(-7deg);
    }
    .helicopter::after {
        --x: 55px;
        content: "";
        position: absolute;
        // background-image: url(../../assets/icons/down-right-curved-black-arrow.svg);
        background-image: url(./assets/icons/down-right-curved-black-arrow.svg);
        background-size: var(--x) var(--x);
        display: block;
        height: var(--x);
        width: var(--x);
        left: 75%;
        top: 16px;
        transform: rotate(45deg);
    }

    .blink {
        animation-name: blinking;
        animation-duration: 2s;
        animation-iteration-count: infinite;
    }

    @keyframes blinking {
        0% {
            opacity: 0;
        }
        
        35% {
            opacity: 1;
        }
        
        75% {
            opacity: 1;
        }
        
        100% {
            opacity: 0;
        }
    }
</style>