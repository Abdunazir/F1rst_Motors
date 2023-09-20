<template>
  <div class="back">
    <div class="container-fluid pb-3">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img :src="route.car.card_img[0]" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img :src="route.car.card_img[1]" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img :src="route.car.card_img[2]" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img :src="route.car.card_img[3]" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <!-- --------------------------------------------------------------------- -->
      <div class="row pt-5 box">
        <h1 class="name">{{ route.car.name }}</h1>
        <!-- <div class="col-9 d-flex flex-column justify-content-center align-items-center">
            <img class="img" :src="route.car.img[0]" alt="" />
            <img class="img" :src="route.car.img[1]" alt="" />
          </div> -->
        <div class="col-12 pt-2">
          <h4 class="des fw-bolder">Description</h4>
          <h4 class="text">YEAR: {{ route.car.year }}</h4>
          <h4 class="text">MAXIMUM POWER: {{ route.car.hp }}</h4>
          <h4 class="text">MAXIMUM TORQUE: {{ route.car.nm }}</h4>
          <h4 class="text">TOP SPEED: {{ route.car.topspeed }}</h4>
          <h4 class="text">0-100 KM/H (62MPH): {{ route.car.to100 }}</h4>
          <h4 class="text">0-200 KM/H (124MPH): {{ route.car.to200 }}</h4>
          <h4 class="text">BREAKING (100 - 0 KM/H): {{ route.car.break }}</h4>
          <h4 class="text">PRICE: {{ route.car.price }}</h4>
        </div>
      </div>

      <div class="row d-flex  ">
        <div class="col-4">
          <div class="row">
              <div class="col-12">
                <img class="imgg" :src="route.car.img[0]" alt="" srcset="" />
              </div>
              <div class="col-12">
                <img class="imgg mt" :src="route.car.img[1]" alt="" srcset="" />
              </div>
          </div>
        </div>
        <div class="col">
          <img class="imgg " :src="route.car.img[2]" alt="" srcset="" />
        </div>
      </div>

      <div class="row d-flex mt">
          <div class="col">
            <img class="imgg" :src="route.car.img[3]" alt="" srcset="" />
          </div>
        <div class="col-4">
          <div class="row">
            <img class="imgg" :src="route.car.img[4]" alt="" srcset="" />
          </div>
          <div class="row">
            <img class="imgg mt" :src="route.car.img[5]" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = defineProps({
  car: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped>
.back {
  background: rgb(104, 102, 102);
  // height: 100vh;
}
.img {
  margin-top: 50px;
  width: 80%;
  border-radius: 20px;
}

.box {
  margin-left: 200px;
}

.name {
  font-size: 23px;
  color: rgb(0 0 0 / var(--tw-text-opacity));
  letter-spacing: 0.1rem;
  font-weight: 600;
}
.des {
  font-size: 18px;
  color: rgb(0 0 0 / var(--tw-text-opacity));
  letter-spacing: 0.1rem;
  font-weight: 700;
}

h4 {
  margin-top: 10px;
  font-size: 15px;
  color: rgb(96 96 96 / var(--tw-text-opacity));
  letter-spacing: 0.05rem;
  font-weight: 600;
}

.name {
  font-weight: 700;
  color: #fff;
  //   background-image: linear-gradient(45deg, #f30000, #fc0000);
  //   background-clip: text;
  //   -webkit-text-fill-color:transparent;
  //   background: -webkit-linear-gradient(#eee, #333);
  //   -webkit-background-clip: text;
  //   -webkit-text-fill-color: transparent;
}

.text {
  color: #fff;
}

.qator1 {
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ustun1 {
  width: 30%;
  height: 400px;
}

.ustun2 {
  width: 67%;
  height: 100%;
}
.imgg {
  width: 100%;
}

.mt{
    margin-top: 15px;
}

.rasm1 {
  width: 100%;
  height: 200px;
}
</style>
