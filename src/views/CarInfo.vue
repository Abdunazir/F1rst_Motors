<template>
  <div>
    <CarInfo :car="car" />
  </div>
</template>

<script setup>
import CarInfo from "../components/CarInfo.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";

const route1 = useRoute();

const cars = ref([
  {
    id: 1,
    name: "BUGATTI CHIRON PUR SPORT",
    year: "2023",
    hp: "1500 HP",
    nm: "1600 NM",
    topspeed: "400 KM/H",
    to100: "APPROXIMATELY 2.3 S",
    to200: "APPROXIMATELY 5.5 S",
    break: " 33M",
    price: "$3.000.000",
    main_img:
      "https://strapiadmin.f1rstmotors.com/uploads/WEBSITE_THUMBNAIL_1_c315934ccb.jpg?w=3840&q=75",
    card_img: [
      "https://strapiadmin.f1rstmotors.com/uploads/website_template1_c897ef6761.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/website_template2_972f5825ce.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/website_template3_b744f4a5f7.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/website_template4_79c06aad63.jpg?w=3840&q=75",
    ],
    img: [
      "https://strapiadmin.f1rstmotors.com/uploads/chiron_0022_F1rst_Motors_7_8bdc5072b4.png?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/chiron_0023_F1rst_Motors_6_71f58a19ec.png?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/chiron_0024_F1rst_Motors_5_bd8f75bee3.png?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/chiron_0017_F1rst_Motors_12_a42820db84.png?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/chiron_0021_F1rst_Motors_8_50494f81d0.png?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/chiron_0020_F1rst_Motors_9_1fdafe4013.png?w=3840&q=75",
    ],
  },
  {
    id: 2,
    name: "ROLLS ROYCE CULLINAN BLACK BADGE",
    year: "2023",
    hp: "563 HORSEPOWER",
    nm: "852 NM",
    topspeed: "250 KM/H",
    to100: "APPROXIMATELY 4.5 S",
    to200: "APPROXIMATELY 12.5 S",
    break: "42M",
    price: "$452.000",
    main_img:
      "https://strapiadmin.f1rstmotors.com/uploads/WEBSITE_THUMBNAIL_24a49d27e4.jpg?w=3840&q=75",
    card_img: [
      "https://strapiadmin.f1rstmotors.com/uploads/website_template1_434763ae48.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/website_template2_1ac412d409.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/website_template4_9b6bf8fc60.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/website_template3_e601770f6a.jpg?w=3840&q=75",
    ],
    img: [
      "https://strapiadmin.f1rstmotors.com/uploads/F1rst_Motors_17_cfff903175.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/F1rst_Motors_20_718d292cc8.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/F1rst_Motors_15_5be759268d.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/F1rst_Motors_1_f06a878b56.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/F1rst_Motors_6_9a03cac8db.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/F1rst_Motors_5_21316d3f92.jpg?w=3840&q=75",
    ],
  },
  {
    id: 3,
    name: "FERRARI SF90 STRADALE - ASSETO ",
    year: "2023",
    hp: "986 HP",
    nm: "800 NM",
    topspeed: "350 KM/H",
    to100: "APPROXIMATELY 2.5 S",
    to200: "APPROXIMATELY 6.7 S",
    break: "29.5 METERS",
    price: "$3.500.000",
    main_img:
      "https://strapiadmin.f1rstmotors.com/uploads/thum_eee246fa54.jpg?w=3840&q=75",
    card_img: [
      "https://strapiadmin.f1rstmotors.com/uploads/F1rst_Motors_1_5d9c1d9f34.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/F1rst_Motors_2_8870dff3a5.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/F1rst_Motors_3_5dea1f5500.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/F1rst_Motors_4_4081a83c5b.jpg?w=3840&q=75",
    ],
    img: [
      "https://strapiadmin.f1rstmotors.com/uploads/F1rst_Motors_4_4081a83c5b.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/website_8_8c4c620349.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/website_6_25b529a16f.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/website_19_d9bc0546e2.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/website_14_0d999df1ce.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/website_11_7800659ecc.jpg?w=3840&q=75",
    ],
  },
  {
    id: 4,
    name: "MERCEDES BENZ G63 AMG BRABUS G800",
    year: "2023",
    hp: "800 HP",
    nm: "1000 NM",
    topspeed: "240 KM/H",
    to100: "APPROXIMATELY 4.1 S",
    to200: "APPROXIMATELY 9.3 S",
    break: "38M",
    price: "$500.000",
    main_img:
      "https://strapiadmin.f1rstmotors.com/uploads/WEBSITE_THUMBNAIL_d88e516424.jpg?w=3840&q=75",
    card_img: [
      "https://strapiadmin.f1rstmotors.com/uploads/website_template1_44b0fabbaa.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/website_template2_fa49f06090.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/website_template3_8b9751c716.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/website_template4_1fd8865c7a.jpg?w=3840&q=75",
    ],
    img: [
      "https://strapiadmin.f1rstmotors.com/uploads/F1rst_Motors_8_83d12dda85.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/F1rst_Motors_7_ce0f23585f.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/F1rst_Motors_5_752a15cd35.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/F1rst_Motors_15_db9d3d7eea.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/F1rst_Motors_16_7c537b9cf0.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/F1rst_Motors_20_4130b7b0aa.jpg?w=3840&q=75",
    ],
  },
  {
    id: 5,
    name: "LAMBORGHINI AVENTADOR SVJ ROADSTER",
    year: "2023",
    hp: "770 HP",
    nm: "852 NM",
    topspeed: "350 KM/H",
    to100: "APPROXIMATELY 2.9 S",
    to200: "APPROXIMATELY 8.7",
    break: "30 METERS",
    price: "$1.500.000",
    main_img:
      "https://strapiadmin.f1rstmotors.com/uploads/WEBSITE_THUMBNAIL_502abc617e.jpg?w=3840&q=75",
    card_img: [
      "https://strapiadmin.f1rstmotors.com/uploads/website_template1_2b301fb3f5.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/website_template2_76d4b7c884.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/website_template3_767cf84c27.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/website_template4_5ef62a1c69.jpg?w=3840&q=75",
    ],

    img: [
      "https://strapiadmin.f1rstmotors.com/uploads/08_7f1214d65f.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/09_f42340bb4e.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/26_0856528fb3.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/Untitled_3jpg_177246a092.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/00_d233aeecb7.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/000_47796b4b3d.jpg?w=3840&q=75",
    ],
  },
  {
    id: 6,
    name: "LAMBORGHINI AVENTADOR SVJ ROADSTER",
    year: "2023",
    hp: "530 HP",
    nm: "750 NM",
    topspeed: "250 KM/H",
    to100: "APPROXIMATELY 4.6 S",
    to200: "APPROXIMATELY 8.7 S",
    break: "30M",
    price: "$280.000",
    main_img:
      "https://strapiadmin.f1rstmotors.com/uploads/WEBSITE_THUMBNAIL_e92e1e5665.jpg?w=3840&q=75",
    card_img: [
      "https://strapiadmin.f1rstmotors.com/uploads/website_template1_2003db84e8.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/website_template2_0d09b4a80e.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/website_template3_3a0f9f9481.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/website_template4_07a47d3d54.jpg?w=3840&q=75",
    ],

    img: [
      "https://strapiadmin.f1rstmotors.com/uploads/F1rst_Motors_16_1253e9e6a0.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/F1rst_Motors_17_2f0c07f72a.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/F1rst_Motors_9_dde1f28004.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/F1rst_Motors_18_3daef56417.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/F1rst_Motors_12_0f7ca419f7.jpg?w=3840&q=75",
      "https://strapiadmin.f1rstmotors.com/uploads/F1rst_Motors_15_b76714a1dc.jpg?w=3840&q=75",
    ],
  },
]);
const car = cars.value.filter((item) => item.id == route1.params.id)[0];
</script>

<style lang="scss" scoped></style>
