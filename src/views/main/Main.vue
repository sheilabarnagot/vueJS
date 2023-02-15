<script setup></script>

<template>
  <div id="backgroundMain">
    <router-link to="/characters" id="styleButton"
      ><button id="getStarted">GET STARTED</button></router-link
    >
  </div>

  <!-- <router-view></router-view> -->
</template>

<style scoped>
#backgroundMain {
  width: 100%;
  height: 100vh;
  background-image: url("../../assets/images/Homepicture.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
#getStarted {
  /* font-family: 'GamesOfThrones'; */
  background-color: #a0522d;
  color: #fff;
  font-size: 30px;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  width: 100%;
  height: 100%;
}
#getStarted:hover {
  background-color: #8b451377;
}
#styleButton {
  position: relative;
  top: 38%;
  margin: 0 auto;
  width: 400px;
  height: 100px;
}
</style>
