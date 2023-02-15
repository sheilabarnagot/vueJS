<script setup>

import Navbar from '../../components/navbar/Navbar.vue'
import Footer from '../../components/footer/Footer.vue'

</script>

<script>
 export default {
  data(){
    return {
      posts: [],
      currentPage: 0,
      perPage: 12

    }
  },
  created(){
    fetch("https://thronesapi.com/api/v2/Characters")
    .then((response)=> response.json())
    .then((data)=> this.posts = data)
  },
  methods:{
    scrollToTop(){
      window.scrollTo(0,0)
    },
    previousPage(){
    this.currentPage--;
    },
    nextPage(){
    this.currentPage++;
    }
  },
  computed:{
    displayedPosts(){
      const start= this.currentPage*this.perPage;
      const end= start+this.perPage;
        return this.posts.slice(start, end)
    },
    totalPages(){
      return Math.ceil(this.posts.length/this.perPage)
    },
    previousButton(){
      this.scrollToTop()
      return this.currentPage > 0;
    },
    nextButton(){
      this.scrollToTop()
      return this.currentPage < this.totalPages -1
    }
  }
}
</script>

<template>

  <Navbar />
  <div id="charactersButtonsContainer">
    <div id="charactersContainer">
      <div v-for="post in displayedPosts" :key="post.id" id="characters">
        <router-link :to="'/character/'+ post.id">
          <img :src="post.imageUrl" id="image" />
          <h3 class="text">{{ post.title }}</h3>
          <h3 class="text">{{ post.fullName }}</h3>
        </router-link>
      </div>
    </div>
    <div id="buttonsContainer">
      <button @click="previousPage" :disabled="!previousButton" class="buttons">PREVIOUS</button>
      <button @click="nextPage" :disabled="!nextButton" class="buttons">NEXT</button>
    </div>
  </div>
  <Footer />

</template>

<style scoped>

#charactersButtonsContainer{
  width: 100%;
  height: auto;
  background-image: url('../../assets/images/wallpaperbrown.jpg');
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  flex-direction:column;
}
#charactersContainer{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 140px;
  /* border: 2px solid #A0522D; */

}
#characters{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 33%;
  position: relative;
  z-index: 50;
  margin-top: 20px;

  /* background-color: #8888; */
}


#image {
  width: 350px;
  height: 400px;
  object-fit: cover;
  object-position: center;
  border-radius: 30px;
  border: 2px solid #A0522D;
  box-shadow: 2px 2px 4px #A0522D;
}

#image:hover {
  box-shadow: 4px 4px 8px #A0522D;
}

.text{
  color: #fff;
  font-size: 25px;
  text-shadow: 2px 2px 2px #A0522D;
  margin: 15px 0 20px 0;
}

#buttonsContainer{
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 0 60px 0;
}
.buttons{
  margin: 60px;
  padding: 10px 30px 10px 30px;
  background-color: #A0522D;
  color: #fff;
  font-size: 20px;
  border: none;
  cursor: pointer;
  border-radius: 20px;
}
.buttons:hover{
  background-color: #8B451377;
}

</style>
