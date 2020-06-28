<template>
  <div
    class="rectangle"
    :style="rectangleStyle"
  >
  </div>
</template>

<script>
  export default {
    name: 'Rectangle',
    props: {
      color: {
        type: String,
        required: true
      },
    },
    computed: {
      rectangleStyle () {
        return {
          background: `${this.color}`
        }
      }
    },
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
  .rectangle {
    width: 30rem;
    height: 15rem;
  }

</style>
