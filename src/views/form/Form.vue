<script setup>
import Navbar from "../../components/navbar/Navbar.vue";
import Footer from "../../components/footer/Footer.vue";
</script>

<script>
export default {
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      message: "",
    };
  },
  methods: {
    onClick() {
      this.send = `{hej ${this.name}, thanks for yor information, we will gaet in touch soon 😀}`;
    },
  },
};
</script>

<template>
  <Navbar />
  <div id="formContainer">
    <form id="form">
      <label for="name" class="text">Name:</label>
      <input v-model="name" type="text" class="inputs" />
      <p v-if="name.length < 3" class="errors">Write more than 3 carathers</p>
      <label for="surname" class="text">Surname:</label>
      <input type="text" class="inputs" v-model="surname" />
      <p v-if="surname.length < 3" class="errors">
        Write more than 3 carathers
      </p>
      <label for="email" class="text">Email:</label>
      <input type="email" class="inputs" v-model="email" />
      <p v-if="email.length < 10" class="errors">
        Write more than 10 carathers
      </p>
      <label for="message" class="text">Message:</label>
      <textarea class="inputs" v-model="message" />
      <p v-if="message.length < 5" class="errors">
        Write more than 5 carathers
      </p>
      <input type="button" value="Send" id="button" @click="onClick" />
    </form>
  </div>
  <Footer />
</template>

<style scoped>
#formContainer {
  background-image: url("../../assets/images/image.webp");
  width: 100%;
  height: 100vh;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}
#form {
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  background-color: #0007;
  border-radius: 20px;
}
.text {
  margin: 10px 0 5px 0;
  color: #fff;
  font-size: 10px;
  text-shadow: 2px 2px 2px #a0522d;
}

.inputs {
  width: 70%;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: #80400077;
  outline: none;
  color: #cc5017;
}

.inputs:focus {
  color: #e0115f;
}

#button {
  width: 100px;
  height: 30px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 20px;
  background-color: #a0522d;
  color: #fff;
  border: none;
  font-size: 10px;
}
#button:hover {
  background-color: #8b451377;
}

.errors {
  color: red;
  font-family: "Courier New", Courier, monospace;
  font-size: 15px;
}
</style>
