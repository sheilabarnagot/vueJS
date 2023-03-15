<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <div id="footer">
    <p id="copyRight">&copy; Sheila Martínez - {{ year }}</p>
  </div>
</template>

<style lang="scss">
$font-family: "GamesOfThrones";
$font-size: 10px;

@mixin center-both {
  display: flex;
  align-items: center;
  justify-content: center;
}
#footer {
  font-family: $font-family;
  width: 100%;
  height: 60px;
  @include center-both;
  background-color: black;
  color: #fff;
  font-size: $font-size;

  a {
    color: #fff;
    text-decoration: none;
  }
}
</style>
