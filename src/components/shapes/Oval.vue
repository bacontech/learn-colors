<template>
  <div class="oval"
       :style="ovalStyle"
  ></div>
</template>

<script>
  export default {
    name: 'Oval',
    props: {
      color: {
        type: String,
        required: true
      },
    },
    computed: {
      ovalStyle () {
        return {
          background: this.color
        }
      }
    },
    data () {
      return {}
    },
    methods: {
    }
  }
</script>

<style scoped>
  .oval {
    width: 10rem;
    height: 20rem;
    border-radius: 10rem / 20rem;
  }

</style>
