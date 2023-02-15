<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <div id="footer">
    <p id="copyRight">&copy; Sheila Martínez - {{ year }}</p>
  </div>
</template>

<style lang="scss">
#footer {
  font-family: "GamesOfThrones";
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: #fff;
  font-size: 10px;
}
</style>
