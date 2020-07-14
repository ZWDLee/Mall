<template>
  <div id="tab-bar">

    <slot name='tabbar'></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#tab-bar{
    display: flex;
    background-color: #f5f5f5;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 3px rgba(200, 200, 200, 0.4);
  }
 
</style>