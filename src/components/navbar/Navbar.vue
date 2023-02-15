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

<style scoped>
#nav {
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  background-color: #a0522d;
  position: fixed;
  z-index: 100;
  box-shadow: 2px 2px 4px black;
}
#linksContainer {
  display: flex;
  flex-direction: row;
  padding-right: 70px;
}
.linkContainer {
  margin-right: 30px;
  padding: 5px 20px;
}
.links {
  color: #fff;
  font-size: 30px;
}
.links:hover {
  text-decoration: underline;
}
</style>
