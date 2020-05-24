<template>

  <div
    class="color-window"
    :style="`background-color: ${currentColor}`"
    @click="setRandomColor"
  >
    <h1 class="strokeme">Learn Colors</h1>
  </div>
</template>

<script>
  const RED = '#FF0000'
  const BLUE = '#0000FF'
  const YELLOW = '#FFFF00'
  const PRIMARY_COLORS = [RED, BLUE, YELLOW]

  const GREEN = '#00FF00'
  const PURPLE = '#6600FF'
  const ORANGE = '#FF6600'
  const SECONDARY_COLORS = [ ...PRIMARY_COLORS, GREEN, PURPLE, ORANGE ]

  const BLACK = '#000000';
  const WHITE = '#FFFFFF';
  const SECONDARY_PLUS = [ ...SECONDARY_COLORS, BLACK, WHITE ]

  const MINT = '#DAFFE7'
  const QUINN_COLORS = [ ...SECONDARY_PLUS, MINT ]

  export default {
    name: 'ColorWindow',
    props: {
      colorSet: {
        type: String,
        required: true
      },
    },
    computed: {
      colors () {
        if (this.colorSet === 'secondary') {
          return SECONDARY_PLUS
        } else if (this.colorSet === 'quinn') {
          return QUINN_COLORS
        } else {
          return PRIMARY_COLORS
        }
      }
    },
    data () {
      return {
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
      }
    },
    beforeMount () {

      this.setRandomColor()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

  html, body {
    height: 100%;
    margin: 0;
  }

</style>
