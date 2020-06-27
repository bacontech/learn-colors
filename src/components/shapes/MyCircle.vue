<template>
  <div class="circle"
       :style="circleStyle"
  ></div>
</template>

<script>
  export default {
    name: 'MyCircle',
    props: {
      color: {
        type: String,
        required: true
      },
    },
    computed: {
      circleStyle () {
        return {
          backgroundColor: this.color
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
  .circle {
    height: 20rem;
    width: 20rem;
    border-radius: 50%;
    display: inline-block;
  }

</style>
