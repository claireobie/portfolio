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
    <div> <div>
      <b-carousel id="carousel1"
                  style="text-shadow: 1px 1px 2px #333;"
                  controls
                  indicators
                  background="#ababab"
                  :interval="4000"
                  img-width="400"
                  img-height="200"
                  v-model="slide"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
      >

        <b-carousel-slide
          img-src="https://i.imgur.com/l8Ludme.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://i.imgur.com/XekVUZF.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://i.imgur.com/37wwLYA.png"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://i.imgur.com/XekVUZF.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://i.imgur.com/uRH3QwJ.png"
        ></b-carousel-slide>
      </b-carousel>
      <p class="mt-4">
        Slide #: {{ slide }}<br>
        Sliding: {{ sliding }}
      </p>

    </div></div>
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
</style>
