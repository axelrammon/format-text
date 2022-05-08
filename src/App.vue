<template>
  <FormatText />
</template>

<script>
import FormatText from './components/FormatText.vue'

export default {
  name: 'App',
  components: {
    FormatText
  }
}
</script>

<style>
  
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: rgb(34,193,195);
    background: linear-gradient(0deg, rgba(49,71,94,1) 0%,rgba(63,185,132,1) 100%);
  }

</style>
