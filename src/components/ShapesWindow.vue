<template>
  <div
    class="color-window"
    @click="setRandoms"
  >
    <h1 class="strokeme">Learn Shapes</h1>
    <div class="shapeContainer">
      <component
        v-bind:is="shapeComponent"
        v-bind="shapeProperties"
      />
    </div>
  </div>
</template>

<script>
  import Triangle from './shapes/Traingle';
  import MyCircle from './shapes/MyCircle';
  import Square from './shapes/Square';
  import Star from './shapes/Star';
  import Oval from './shapes/Oval';

  const RED = '#FF0000'
  const BLUE = '#0000FF'
  const YELLOW = '#FFFF00'
  const PRIMARY_COLORS = [RED, BLUE, YELLOW]

  const GREEN = '#00FF00'
  const PURPLE = '#6600FF'
  const ORANGE = '#FF6600'
  const SECONDARY_COLORS = [ ...PRIMARY_COLORS, GREEN, PURPLE, ORANGE ]

  const BLACK = '#000000';


  export default {
    name: 'ColorWindow',
    components: {Triangle, MyCircle, Square, Star, Oval},
    props: {
      shapeSet: {
        type: String,
        required: false
      }
    },
    computed: {
      colors () {
        return [ ...SECONDARY_COLORS, BLACK]
      },
      shapeProperties () {
        return {
          color: this.currentColor
        }
      },
      shapes () {
        return ['MyCircle', 'Triangle', 'Square', 'Star', 'Oval']
      }
    },
    data () {
      return {
        shapeComponent: null,
        currentColor: null,
      }
    },
    methods: {
      setRandomColor () {
        const randomIndex = Math.floor(Math.random() * this.colors.length)
        const newColor = this.colors[randomIndex]
        if (newColor === this.currentColor){
          this.setRandomColor()
        } else {
          this.currentColor = newColor
        }
      },
      setRandomShape () {
        const randomIndex = Math.floor(Math.random() * this.shapes.length)
        const newShape = this.shapes[randomIndex]
        if (newShape === this.shapeComponent){
          this.setRandomShape()
        } else {
          this.shapeComponent = newShape
        }
      },
      setRandoms () {
        this.setRandomColor()
        this.setRandomShape()
      }
    },
    beforeMount () {
      this.setRandoms()
    }
  }
</script>

<style scoped>
  .color-window {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .strokeme {
    color: white;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  }

  .shapeContainer {
    display: flex;
    align-items: center;
    justify-content: center;
  }


  html, body {
    height: 100%;
    margin: 0;
  }

</style>
