<template>
  <div class="back">
    <div class="container">
      <div class="row">
        <div class="home col-12 d-flex justify-content-end">
          <router-link class="link" active-class="active_link" to="login">{{
            next
          }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const next = ref("Next -->");
</script>

<style lang="scss" scoped>
.back {
  background-image: url("https://strapiadmin.f1rstmotors.com/uploads/Logo_2_f0a34f01c7.jpeg?w=3840&q=75");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  padding-top: 450px;
}

.link {
  margin-top: 50px;
  margin: 0 auto;
  text-decoration: none;
  text-align: center;
  color: #fff;
  font-size: 25px;
  padding: 15px 30px;
  border-radius: 10px;
  border: 1px solid #fff;
  // filter: blur(8px);
  // -webkit-filter: blur(8px);
}
</style>
