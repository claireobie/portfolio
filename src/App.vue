
<template>
  <div id="app">
      <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
          <template slot="header">
              <img src="https://i.imgur.com/oLXEigP.png" alt="Squiggly brackets with three dots in the middle"> Claire O'Brien
          </template>
          <template slot="lead" class="lead">
              Sleek design combined with utility and accessibility.
          </template>
          <p class="contact">
              Missoula, MT • <a href="mailto:claireobie15@gmail.com" alt="Claire's email" style="color: white">claireobie15@gmail.com</a> • <a href="https://github.com/claireobie" alt="Claire's Github" style="color: white">github.com/claireobie</a>
          </p>
      </b-jumbotron>
      <h1>{{ msg }}</h1>
      <div class="carousel">
          <cards></cards>
      </div>
  </div>
</template>

<script>

import Cards from './Cards.vue'

export default {
    name: 'app',
    data() {
        return {
            msg: 'Portfolio',
        }
    },
    components: {
        Cards
    },
}

</script>

<style >

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

h1,
h2 {
    font-weight: normal;
    font-family: Rockwell;
}

ul {
    list-style-type: none;
    padding: 0;
}

a {
    color: #42b983;
}

#carousel1 {
    height: 600px;
}

.contact {
    font-family: Rockwell;
}

.lead {
    font-weight: bold;
}

</style>
