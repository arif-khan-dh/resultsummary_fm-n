<div class="btn">
    <button>Continue</button>
</div>

<style lang="scss">
    button {
        // all: unset;
        width: 100%;
        height: 54px;
        padding: 0;
        border: none;
        outline: none;
        border-radius: 24px;
        box-shadow: 0px 0px 3px 3px hsla(241, 81%, 54%, .2);
        cursor: pointer;
        position: relative;

        background: none;
        // background-image: linear-gradient($bgLightSlateBlue, $bgLightRoyalBlue);
        background-color: $bgLightRoyalBlue;
        transition: background-color .2s ease-in;

        font-family: inherit;
        font-weight: 700;
        color: $white;

        &:hover {
            // background-image: linear-gradient($darkGrayBlue, $darkGrayBlue);
            background-color: $darkGrayBlue;
            box-shadow: 0px 0px 3px 3px hsla(224, 30%, 27%, .2); //$darkGrayBlue
        }

        &:active::after{
            content: "I do nothing";
            position: absolute;
            bottom: 35%;
            left: 10%;
            border: 1px solid $white;
            border-radius: 4px;
            padding: 2px 5px;
           
            color: $white;            
            font-size: 18px;
            font-family: "Comic Neue";

            transform: rotateZ(-20deg);
            mix-blend-mode: luminosity; 
        }
    }
    
    .btn {
        margin-top: 36px;
    }
</style>