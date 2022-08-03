<script lang="ts">
    import {BarGraph,BarItem} from '@src/component/bargraph'

    let data: number[] = [1,2,3,5,8];
    let title: string = 'hello';
</script>

<div class="root">
    <BarGraph {data} title="안녕" bind:minV  bind:maxV>
        {#each data as d}
            <BarItem></BarItem>>
        {/each}
    </BarGraph>
    <div class="parent" />
</div>

<style lang="scss">
    .root {
        padding: 100px;
        background: #f0f;
        height: 80vh;
        border: solid 2px #000;
    }
</style>