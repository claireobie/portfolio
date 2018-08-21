<template>
  <div>
      <b-carousel id="carousel1" style="text-shadow: 1px 1px 2px #333; width:100%; height: 450px; margin-bottom:50px; background-color:#FFFFFF" controls indicators background="#ababab" img-width="800" img-height="480" v-model="slide" @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">
          <b-carousel-slide img-src="https://i.imgur.com/JhPx156.jpg" alt="The University of Montana Mobile app website" style="height:450px; width:900px">
              <p class="image-text">
                  I aided in designing the
                  <a href="https://www.umt.edu/mobile/" target="_blank" alt="The University of Montana Mobile app website" style="color: white">
                  University of Montana Mobile App page.
              </a> For this project, I collaborated with a co-worker to decide the layout, color palette, and aesthetic of the website. Then, we built the site within the Cascade CMS used by the University.
              </p>
          </b-carousel-slide>
          <b-carousel-slide img-src="https://i.imgur.com/jkN2q43.png" alt="Food Bank application" style="height:450px; width:900px">
              <p class="image-text">
                  I was part of a team that built an app named
                  <a href="https://rocky-refuge-16506.herokuapp.com/" target="_blank" alt="A food bank application for tracking inventory and creating meal plans." style="color: white">
              "What's at the food bank?"
              </a>
                  <br> A web app to track a food bank's inventory and provide suggestions of recipes based on what is available that week.
                  <br>
                  <br> It offers dual user and admin views. Admins maintain the inventory and users can see availability of items that week and have the opportunity to better meal plan for their household.
                  <br>
                  <br> It was built using the MERN stack and hosted by Heroku.
              </p>
          </b-carousel-slide>
          <b-carousel-slide img-src="https://i.imgur.com/rPwhiir.jpg" alt="The Universiry of Montana Writing Center" style="height:450px; width:900px">
              <p class="image-text">
                  I designed and implemented a website re-design for the
                  <a href="https://www.umt.edu/writingcenter/" target="_blank" alt="The University of Montana Writing Center" style="color: white">
                  University of Montana Writing and Public Speaking Center.
                </a> The main portion of the project was re-designing the homepage. It was mostly a simple revamp of choosing a color palette, creating new images for the site, and changing the layout.
              </p>
          </b-carousel-slide>
          <b-carousel-slide img-src="https://i.imgur.com/wh5xYB9.png" alt="Pig latin application" style="height:450px; width:900px">
              <p class="image-text">
                  This project started as a way to practice Javascript but turned into an
                  <a href="https://www.npmjs.com/package/pig-latin-library" target="_blank" alt="Pig Latin library npm package" style="color: white">
                    npm package
                  </a> and
                  <a href="https://pig-latin-library.herokuapp.com/" target="_blank" alt="Pig latin library application" style="color: white">
                    an application
                  </a> that we deployed to Heroku. This was a really fun way to practice working with javascript while modifying strings - which can be a challenging endeavor.
              </p>
          </b-carousel-slide>
          <b-carousel-slide img-src="https://i.imgur.com/URtztkl.png" alt="Hangman game" style="height:450px; width:900px">
              <p class="image-text">
                  This is a
                  <a href="https://obscure-inlet-95154.herokuapp.com/" target="_blank" alt="Hangman game" style="color: white">
                  Hangman game
                </a> that was born from a love of playing Hangman to relax during breaks. Its main purpose was to help us learn how to use Vue.js.
              </p>
          </b-carousel-slide>
          <b-carousel-slide img-src="https://i.imgur.com/R1GuFLe.jpg" alt="Legend of Zelda Translator application" style="height:450px; width:900px">
              <p class="image-text">
                  <a href="https://powerful-lake-84714.herokuapp.com/" target="_blank" alt="Legend of Zelda Translator application" style="color: white">
              "A Language Between Worlds"
            </a> is a Hyrulean translator application which allows users to choose between multiple Hyrulean languages and translate to another chosen language. Then, the user can download the translation.
                  <br>
                  <br> This application was built using the PEVN stack, and deployed using Heroku.
              </p>
          </b-carousel-slide>
      </b-carousel>
  </div>
</template>

<script>

export default {
    data() {
      return {
        slide: 0,
        sliding: null
            }
        },
    methods: {
      onSlideStart(slide) {
          this.sliding = true
        },
      onSlideEnd(slide) {
          this.sliding = false
    }
  }
}

</script>

<style>

.image-text {
    background-color: black;
    padding: 10px;
    margin: auto;
    color: white;
    opacity: 0.875;
}

</style>
