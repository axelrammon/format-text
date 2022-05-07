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
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
  }

</style>
