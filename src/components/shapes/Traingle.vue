<template>
  <div
    class="triangle"
    :style="triangleStyle"
  >
  </div>
</template>

<script>
  export default {
    name: 'Triangle',
    props: {
      color: {
        type: String,
        required: true
      },
    },
    computed: {
      triangleStyle () {
        return {
          borderBottom: `10rem solid ${this.color}`
        }
      }
    },
    data () {
      return {
        style: null,
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .triangle {
    width: 0;
    height: 0;
    border-left: 5rem solid transparent;
    border-right: 5rem solid transparent;
    /*border-bottom: 100px solid red;  in-line for dynamic colors*/
  }

</style>
