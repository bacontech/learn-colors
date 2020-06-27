<template>
<!--  <svg height="210" width="200">-->
  <div class="container">
    <svg viewBox="0 0 200 210">
      <polygon points="100,10 40,198 190,78 10,78 160,198"
               :style="`fill:${color};stroke:${color};stroke-width:5;fill-rule:nonzero;`" />
    </svg>
  </div>


</template>

<script>
  export default {
    name: 'Star',
    props: {
      color: {
        type: String,
        required: true
      },
    },
    computed: {
      starStyle () {
        return {
          borderBottom: `7rem solid ${this.color}`,
          'border-bottom:after': `7rem solid pink`
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

  .star {
    margin: 10rem 0;
    position: relative;
    display: block;
    color: red;
    width: 0rem;
    height: 0rem;
    border-right: 20rem solid transparent;
    border-bottom: 14rem solid red;
    border-left: 20rem solid transparent;
    transform: rotate(35deg);
  }
  .star:before {
    border-bottom: 16rem solid red;
    border-left: 6rem solid transparent;
    border-right: 6rem solid transparent;
    position: absolute;
    height: 0;
    width: 0;
    top: -8rem;
    left: -12rem;
    display: block;
    content: '';
    transform: rotate(-35deg);
  }
  .star:after {
    position: absolute;
    display: block;
    color: red;
    top: .6rem;
    left: -21rem;
    width: 0rem;
    height: 0rem;
    border-right: 20rem solid transparent;
    border-bottom: 14rem solid red;
    border-left: 20rem solid transparent;
    transform: rotate(-70deg);
    content: '';
  }

  .container {
    height: 0;             /* collapse the container's height */
    width: 20em;    /* specify any width you want (a percentage value, basically) */
    /* apply a padding using the following formula */
    /* this formula makes sure the aspect ratio of the container equals that of the svg graphic */
    position: relative;    /* create positioning context for svg */
  }

</style>
