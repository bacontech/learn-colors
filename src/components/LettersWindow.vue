<template>

  <div
    class="color-window"
    @click="updateTheLetter"
  >
    <h1 class="strokeme">Learn Letters</h1>
    <p class="strokeme huge" :style="`color: ${currentColor}`">{{currentLetter}}</p>
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

  const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];

  export default {
    name: 'LettersWindow',
    props: {
      colorSet: {
        type: String,
        required: true
      },
      ordered: {
        type: Boolean,
        required: false,
        default: false
      }
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
        currentLetter: null,
        currentLetterIndex: null,
      }
    },
    methods: {
      updateTheLetter () {
        if (this.ordered) {
          if (!this.currentLetter || this.currentLetter == 'Z') {
            this.currentLetterIndex = 0;
          } else {
            this.currentLetterIndex++
          }
          this.currentLetter = LETTERS[this.currentLetterIndex]
        } else {
          this.setRandomLetter()
        }
        this.setRandomColor()
      },
      setRandomColor () {
        const randomIndex = Math.floor(Math.random() * this.colors.length)
        const newColor = this.colors[randomIndex]
        if (newColor === this.currentColor){
          this.setRandomColor()
        } else {
          this.currentColor = newColor
        }
      },
      setRandomLetter () {
        const randomIndex = Math.floor(Math.random() * LETTERS.length)
        const newLetter = LETTERS[randomIndex]
        if (newLetter === this.currentLetter){
          this.setRandomColor()
        } else {
          this.currentLetter = newLetter
        }
      }
    },
    beforeMount () {
      this.updateTheLetter()
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

  .huge {
    font-size: 200px;
  }

  html, body {
    height: 100%;
    margin: 0;
  }

</style>
