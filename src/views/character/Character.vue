<script setup>
import Navbar from "../../components/navbar/Navbar.vue";
import Footer from "../../components/footer/Footer.vue";
</script>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },

  computed: {
    userId() {
      return this.id;
    },
  },
  data() {
    return {
      character: {},
    };
  },
  created() {
    fetch("https://thronesapi.com/api/v2/Characters/" + this.id)
      .then((response) => response.json())
      .then((data) => (this.character = data));
  },
};
</script>

<template>
  <Navbar />
  <div id="characterContainer">
    <div id="character">
      <img :src="character.imageUrl" id="image" />
      <h3 class="text">First name: {{ character.firstName }}</h3>
      <h3 class="text">Last name: {{ character.lastName }}</h3>
      <h3 class="text">Family name: {{ character.family }}</h3>
      <h3 class="text">Title: {{ character.title }}</h3>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
#characterContainer {
  width: 100%;
  height: auto;
  background-image: url("../../assets/images/characterWallpaper.jpg");
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  /* padding-top: 150px; */
  padding: 110px 30px 0 0;
}

#image {
  width: 250px;
  height: 300px;
  object-fit: cover;
  object-position: center;
  border-radius: 30px;
  border: 2px solid #a0522d;
  box-shadow: 2px 2px 4px #a0522d;
}
#image:hover {
  box-shadow: 4px 4px 8px #a0522d;
}
.text {
  color: #fff;
  font-size: 15px;
  text-shadow: 2px 2px 2px #a0522d;
  margin: 10px 0 10px 0;
}
</style>
