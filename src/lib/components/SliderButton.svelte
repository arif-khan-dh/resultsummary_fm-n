<button class="slider">
    <span class="name">
        <span class="icon">
            <img src="" alt="">
        </span><span class="title"></span>
        <span class="score">
            
            <span class="out-of">/ 100</span>
        </span>
    </span>
</button>

<style lang="scss">
    button  {
        all:unset;
        width: 100%;
        height: 56px;
        border: 1px solid $lightRed;
        border-radius: 10px;

        $color: $lightRed;
        $colorDeep: hsla(hue($color), saturation($color), lightness($color), .2);
        $colorDeeper: hsla(hue($color), saturation($color), lightness($color), .3);
        color: $color;
        background-color: hsla(hue($color), saturation($color), lightness($color), .1);                
        background-image: linear-gradient($colorDeep, $colorDeeper);


        &:hover {
            box-shadow: 0px 0px 1px 1px $lightRed;
        }

        span {
            display: block;
        }
    }
</style>