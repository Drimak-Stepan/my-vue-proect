<template>
  <div :id="$style.app">
    <CustomSelect :items="[name, label]" />
    <ApartmentsList :items="apartments">
      <!-- <template v-slot:title>Title</template> -->
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem
          :key="apartment.id"
          :descr="apartment.descr"
          :rating="apartment.rating"
          :imgSrc="apartment.imgUrl"
          :price="apartment.p" /></template
    ></ApartmentsList>
  </div>
</template>

<script>
import ApartmentsList from "./components/apartment/ApartmentsList";
import ApartmentsItem from "./components/apartment/ApartmentsItem";
import CustomSelect from "./components/shared/CustomSelect";
import apartments from "./components/apartment/apartaments";
export default {
  name: "App",
  components: { ApartmentsList, ApartmentsItem, CustomSelect },
  data() {
    return {
      apartments,
    };
  },
};
</script>

<style module>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
