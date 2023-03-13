<script setup></script>

<template>
  <nav id="nav">
    <img src="../../assets/images/icon.png" alt="wolfLogo" id="wolfLogo" />
    <ul id="linksContainer">
      <li class="linkContainer">
        <RouterLink to="/" class="links">Home</RouterLink>
      </li>
      <li class="linkContainer">
        <RouterLink to="/characters" class="links">Characters</RouterLink>
      </li>
      <li class="linkContainer">
        <RouterLink to="/form" class="links">Contact</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
$nav-bg-color: #a0522d;
$link-margin: 30px;
$link-padding: 5px 20px;
$link-color: #fff;
$link-hover-color: underline;
$shadow: 2px 2px 4px #000;

#nav {
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  background-color: $nav-bg-color;
  position: fixed;
  z-index: 100;
  box-shadow: $shadow;
}
#linksContainer {
  display: flex;
  flex-direction: row;
  padding-right: 70px;
}
.linkContainer {
  margin-right: $link-margin;
  padding: $link-padding;
}
.links {
  color: $link-color;
  font-size: 30px;
}
.links:hover {
  text-decoration: $link-hover-color;
}
</style>
