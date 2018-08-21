<template>
  <div id="app">
    <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
      <template slot="header">
        <img src="./assets/claire-logo.png" >
        Claire O'Brien
      </template>
      <template slot="lead">
      Sleek design combined with utility and accessibility.
    </template>
    </b-jumbotron>
    <h1>{{ msg }}</h1>
    <div class = "carousel">
      <carousel></carousel>
    </div>
  </div>
</template>

<script>
import Carousel from './Carousel.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Portfolio',
      slide: 0,
      sliding: null
    }
  },
  components:{
      Carousel
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<!-- carousel-1.vue -->
<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
  font-family: Rockwell;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#carousel1 {
  height: 600px;
}

.carousel {
  display:flex;
  justify-content: center;
  align-items:center;
}

.carousel-control-next-icon {
  background-image: url("https://i.imgur.com/LqUjSKT.png");
}

.carousel-control-prev-icon {
  background-image: url("https://i.imgur.com/jKZ5h9O.png");
}
</style>
