<script lang="ts">
    export let minV: number;
    export let maxV: number;
    export let value: number;

    console.log({minV,maxV,value});
    const height: number = ((value-minV) /(maxV-minV))*100;
</script>

<div class="root">
    <div class="item" style={`height: ${height}%`}/>
</div>

<style lang="scss">
    .root{
        flex: 1 0;
        background: #0f3;
        border: solid 3px #000;
        position: relative;
        .item{
            width:100%;
            position: absolute;
            bottom: 0;
            background: #f30;
        }
    }
</style>