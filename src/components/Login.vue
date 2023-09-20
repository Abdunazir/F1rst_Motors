<template>
  <div class="back">
    <div class="container">
        <div class="home ">
          <div class="box">
            <form action="">
              <input type="email" placeholder="Email">
              <input type="password" placeholder="Password">
            </form>
            <router-link class="link" active-class="active_link" to="cars">{{
              next
            }}</router-link>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const next = ref("Login");
</script>

<style lang="scss" scoped>
.back {
  background-image: url("https://strapiadmin.f1rstmotors.com/uploads/Logo_2_f0a34f01c7.jpeg?w=3840&q=75");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  // padding-top: 450px;
}

.home{
  text-align: center;
  margin-top: 50px;
  padding: 50px;
  width: 100%;
  // border: 1px solid red;
  margin: 0 auto ;
}

.box{
width: 60%;
  // margin-top: 100px;
  padding:70px 50px;
  margin: 100px auto 0 auto;
  // border: 1px solid red;
  background: #2c1515;
  border-radius: 15px;
}

form{
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 50px;
}

input{

  padding: 10px 50px 10px 15px ;
  font-size: 20px;
  color: #fff;
  font-weight: 600;
  border-radius:  10px;
  border:1px solid #fff;
  background: transparent;
}

.link {
  margin-top: 150px;
  margin: 0 auto;
  text-decoration: none;
  text-align: center;
  color: #fff;
  font-size: 23px;
  padding: 10px 45px;
  border-radius: 10px;
  border: 1px solid #fff;
  // filter: blur(8px);
  // -webkit-filter: blur(8px);
}
</style>
