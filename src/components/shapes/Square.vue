<template>
  <div
    class="square"
    :style="squareStyle"
  >
  </div>
</template>

<script>
  export default {
    name: 'Square',
    props: {
      color: {
        type: String,
        required: true
      },
    },
    computed: {
      squareStyle () {
        return {
          background: `${this.color}`
        }
      }
    },
    data () {
      return {
        style: null,
      }
    }
  }
</script>

<style scoped>
  .square {
    width: 20rem;
    height: 20rem;
  }

</style>
