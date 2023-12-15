<script>
    import { add } from "../stores/FinalScore";
    import { isBlinking } from "../stores/Blink";

    export let title;
    export let score;
    export let icon;
    export let index;
    
    function slider(element, params) {
        // let currentMousePosLeft = 0;
        let lastClickedPosLeft;
        let isSlidable = true;
        
        init();

        function init() {
            const initialLeft = Math.round(element.clientWidth * (score / 100));            
            slide(initialLeft);
            lastClickedPosLeft = initialLeft;
        }

        // distance from left=0 to score(width)
        function updateLastClickedPosLeft() {
            lastClickedPosLeft = Math.round((score/100) * element.clientWidth);
        }

        function onMousemove(event) {
            if (isSlidable) {
                element.parentNode.style.removeProperty("transition");
                const layerX = event.layerX;
                slide(layerX);
                updateCurrentScore(layerX);
                if (isBlinking) {
                    isBlinking.set(false);
                }
            }        
        }

        function onMouseleave(event) {
            element.parentNode.style.transition = "background-size .3s ease-in";
            slide(lastClickedPosLeft);
            updateCurrentScore(lastClickedPosLeft);
        }

        function onClick(event) {
            const layerX = event.layerX;
            slide(layerX);   
            if (isSlidable) {
                updateCurrentScore(layerX);
                updateLastClickedPosLeft();
            }
            add(score, index);
            isSlidable = !isSlidable;            
        }

        function updateCurrentScore(layerX) {
            // let currentScore = Math.round((currentMousePosLeft / element.clientWidth) * 100);
            // score = currentScore;            
            score = Math.round((layerX / element.clientWidth) * 100);
        }

        function slide(layerX) {
            // currentMousePosLeft = layerX;
            element.parentNode.style.backgroundSize = layerX + "px";            
        }

        element.addEventListener("mousemove", onMousemove);
        element.addEventListener("click", onClick);
        element.addEventListener("mouseleave", onMouseleave);

        return {
            destroy() {
                element.removeEventListener("mousemove", onMousemove);
                element.removeEventListener("click", onClick);
                element.removeEventListener("mouseleave", onMouseleave);
            }
        }
    }

</script>
<li>
    <!-- <a 
        class="category"    
        href={"#!"}
        use:slider
        >
        <div class="name">
            <div class="icon">
                <img src={icon} alt="icon" />
            </div>
            <div class="title">{ title }</div>
        </div>
        <div class="score">
            { score } 
            <span class="out-of">/ 100</span>
        </div>
    </a> -->
    <button class="category" use:slider>
        <span class="name">
            <span class="icon">
                <img src="{ icon }" alt="icon">
            </span>
            <span class="title">{ title }</span>
        </span>
        <span class="score">
            { score }
            <span class="out-of">/ 100</span>
        </span>
        
    </button>
</li>

<style lang="scss">
    li {
        border-radius: 10px;
        overflow: hidden;
        background-repeat: no-repeat; // debug
        background-size: 0;
        // transition: background-size .3s ease-in;

        &:not(:first-child) {
            margin-top: 16px;
        }

        @for $i from 1 through length($colors) {
            &:nth-child(#{$i}){
                $color: nth($colors, $i);
                $colorDeep: hsla(hue($color), saturation($color), lightness($color), .2);
                $colorDeeper: hsla(hue($color), saturation($color), lightness($color), .3);
                color: $color;
                background-color: hsla(hue($color), saturation($color), lightness($color), .1);                
                background-image: linear-gradient($colorDeep, $colorDeeper);

                &:hover {
                    box-shadow: 0px 0px 1px 1px $color;
                }
            }
        }
    }

    button {
        all:unset;          
        width: 100%;
        box-sizing: border-box;
        cursor: pointer;
    }

    .category {        
        height: 56px;  
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 10px 10px 12px;
    }

    // a {
    //     & > * {
    //         pointer-events: none;
    //     }
    // }
    // a, a:hover, a:visited, a:active {
    //     color: inherit;
    //     text-decoration: none;
    // }

    .name {
        display: flex;

        img {
            display: block;
        }

        .title {
            margin-left: 8px;
        }
    }

    .score {
        color: $darkGrayBlue;
        font-weight: 800;
    }

    .out-of {
        color: $lightLavender;
    }
</style>
