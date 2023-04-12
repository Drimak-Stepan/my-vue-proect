//checked but not backend

<template>
  <main class="homepage">
    <SectionWithHeaderSpacer>
      <Container>
        <ApartmentsFilterForm class="apartments-filter" @submit="filter" />
      </Container>
      <Container>
        <p v-if="!filteredApartments.length">Not found</p>
        <ApartmentsList v-else :items="filteredApartments">
          <template v-slot:apartment="{ apartment }">
            <ApartmentsItem
              :key="apartment.id"
              :id="apartment.id"
              :descr="apartment.descr"
              :rating="apartment.rating"
              :imgSrc="apartment.imgUrl"
              :price="apartment.price"
            />
          </template>
        </ApartmentsList>
      </Container>
    </SectionWithHeaderSpacer>
  </main>
</template>

<script>
import ApartmentsList from "../components/apartment/ApartmentsList";
import ApartmentsItem from "../components/apartment/ApartmentsItem";
import ApartmentsFilterForm from "../components/apartment/ApartmentsFilterForm";
import Container from "../components/shared/Container";
import { getApartmentsList } from "../services/apartments.service";
import SectionWithHeaderSpacer from "../components/shared/SectionWithHeaderSpacer";

import apartments from "../components/apartment/apartaments";

export default {
  name: "App",
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentsFilterForm,
    SectionWithHeaderSpacer,
    Container,
  },
  data() {
    return {
      apartments,
      filters: {
        city: "",
        price: 0,
      },
    };
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },
  async created() {
    try {
      const { data } = await getApartmentsList();
      // this.apartments = data;
      console.log("data backend", data);
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    filter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
    },
    filterByCityName(apartments) {
      if (!this.filters.city) return apartments;

      return apartments.filter((apartment) => {
        return apartment.location.city === this.filters.city;
      });
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;

      return apartments.filter((apartment) => {
        return apartment.price >= this.filters.price;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-filter {
  margin-bottom: 40px;
}
</style>
