<template>
  <div>
    <div class = "first-row">
      <b-card title="The University of Montana Mobile App website"
              img-src="https://i.imgur.com/JhPx156.jpg"
              img-alt="The University of Montana Mobile app website"
              img-top
              tag="article"
              style = "height: 100%"
              class="mb-2">
              <p class="image-text">
                  I aided in designing the University of Montana Mobile App page.
                  For this project, I collaborated with a co-worker to decide the layout, color palette, and aesthetic of the website.
                  Then, we built the site within the Cascade CMS used by the University.
                  <br><br>
                  This website was built using the Cascade CMS, CSS for styling, and the Ponderosa Template used by the University of Montana.
              </p>
        <b-button href="https://www.umt.edu/mobile/" target="_blank" variant="secondary">Visit this project</b-button>
      </b-card>
      <b-card title="What's at the Food Bank?"
              img-src="https://i.imgur.com/jkN2q43.png"
              img-alt="Food Bank inventory application"
              img-top
              tag="article"
              class="mb-2">
              <p class="image-text">
                  I was part of a team that built an app named
                  "What's at the food bank?". A web app to track a food bank's inventory and provide suggestions of recipes based on what is available that week.
                  <br><br>
                  It offers dual user and admin views. Admins maintain the inventory and users can
                  see availability of items that week and have the opportunity to better meal plan for their household.
                  <br><br>
                  This application was built using the MERN stack,
                  and deployed using Heroku.
              </p>
        <b-button href="https://rocky-refuge-16506.herokuapp.com/" target="_blank" variant="secondary">Visit this project</b-button>
      </b-card>
    </div>
    <div class = "second-row">
      <b-card title="The University of Montana Writing Center website"
              img-src="https://i.imgur.com/rPwhiir.jpg"
              img-alt="The Universiry of Montana Writing Center website"
              img-top
              tag="article"
              class="mb-2">
              <p class="image-text">
                  I designed and implemented a website re-design for the
                  University of Montana Writing and Public Speaking Center.
                  The main portion of the project was re-designing the homepage.
                  It was mostly a simple revamp of choosing a color palette, creating new images for the site, and changing the layout.
                  <br><br>
                  This website was built using the Cascade CMS, CSS for styling, and the Ponderosa Template used by the University of Montana.
              </p>
        <b-button href="https://www.umt.edu/writingcenter/" target="_blank" variant="secondary">Visit this project</b-button>
      </b-card>
      <b-card title="Banana Hat: a Pig Latin translator"
              img-src="https://i.imgur.com/wh5xYB9.png"
              img-alt="Pig latin application"
              img-top
              tag="article"
              class="mb-2">
              <p class="image-text">
                  I was part of a project to create a pig latin library. This project started as a way to practice Javascript but turned into a
                  <a style = "color: black" href="https://www.npmjs.com/package/pig-latin-library" target="_blank" alt="Pig Latin library npm package">
                      npm package
                  </a>
                  and an application that we deployed to Heroku.
                  This was a really fun way to practice working with javascript while modifying strings - which can be a challenging endeavor.
                  <br><br>
                  This application was built using Vue.js, Javascript, Express.js, Node.js,
                  and deployed using Heroku.
              </p>
        <b-button href="https://pig-latin-library.herokuapp.com/" target="_blank" variant="secondary">Visit this project</b-button>
      </b-card>
    </div>
    <div class = "third-row">
      <b-card title="Hangman game"
              img-src="https://i.imgur.com/URtztkl.png"
              img-alt="Hangman game"
              img-top
              tag="article"
              class="mb-2">
              <p class="image-text">
                  This is a Hangman game that was born from a love of
                  playing Hangman to relax during breaks.
                  Its main purpose was to help us learn how to use Vue.js.
                  <br><br>
                  This application was built using Vue.js, Javascript, Express.js, Node.js
                  and deployed using Heroku.
              </p>
        <b-button href="https://obscure-inlet-95154.herokuapp.com/" target="_blank" variant="secondary">Visit this project</b-button>
      </b-card>
      <b-card title="A Language Between Worlds"
              img-src="https://i.imgur.com/R1GuFLe.jpg"
              img-alt="Legend of Zelda Translator application"
              img-top
              tag="article"
              class="mb-2">
              <p class="image-text">
                "A Language Between Worlds" is a Hyrulean translator application
                which allows users to choose between multiple Hyrulean languages and translate to another
                chosen language. Then, the user can download the translation.
                <br><br>
                This application was built using the PEVN stack,
                and deployed using Heroku.
              </p>
        <b-button href="https://powerful-lake-84714.herokuapp.com/" target="_blank" variant="secondary">Visit this project</b-button>
      </b-card>
  </div>
</template>

<script>

export default {
    data() {
            return {

            }
        },
}

</script>

<style>
  .first-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: auto;
    display: table;
    border-spacing: 15px;
    background-color: #706363;
  }

  .second-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: auto;
    display: table;
    border-spacing:15px;
    background-color: #706363;
  }

  .third-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: auto;
    display: table;
    border-spacing:15px;
    background-color: #706363;
  }

  article.card.mb-2 {
    margin: 1%;
    padding: 5px;
    display: table-cell;
  }

</style>
