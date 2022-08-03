<script lang="ts">
    export let data: number[];
    export let title : string;
    export let guideCount: number = 5;
    export const min = Math.min(...data);
    export const max = Math.max(...data);
    const range = max-min;
    const diff=range/guideCount;

    const leftGuides: number[]=[];
    for (let i =0; i <guideCount; i++){
        leftGuides.push(min+i*diff);
    }
</script>

<div class="root">
    <div class="title-field">(title)</div>
    <div class="graph-field">
        <div class="l-guide">
            {#each leftGuides as v}
                <div class="guide-item">{v}</div>
            {/each}
        </div>
        <div class="graphics">
            <slot />
        </div>
    </div>
    <div class="under-field">// under</div>
</div>

<style lang="scss">
    .root{
        $title-height:48px;
        $under-height:32px;
        height: 100%;
        width: 100%;
        .title-field {
            height:48px;
            background: #f00;
        }
        .graph-field{
            height: calc(100% - $title-height - $under-height);
            display:flex;
            position: relative;
            .l-guide{
                height: 100%;
                width:100%;
                background: #ff0;
                display: flex;
                flex-direction: column;
                .guide-item{
                    flex: 1 0;
                    border-bottom: solid 1px #000;
                }
            }
            .graphics{
                flex:1 0;
                background: #0f0;
            }
        }
        .under-field{
            height: 32px;
        }
    }
    
</style>