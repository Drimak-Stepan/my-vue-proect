//checked not backend

<template>
  <main class="apartment-page">
    <SectionWithHeaderSpacer>
      <Container>
        <div v-if="apartment" class="apartment-page__content">
          <ApartmentsMainInfo :apartment="apartment" />
          <div class="apartment-page__additional-info">
            <ApartmentsOwner
              class="apartment-page__owner"
              :owner="apartment.owner"
            />
            <Reviews :reviews="reviewsList" />
          </div>
        </div>
      </Container>
    </SectionWithHeaderSpacer>
  </main>
</template>

<script>
import Container from "../components/shared/Container";
import ApartmentsMainInfo from "../components/apartment/ApartmentsMainInfo";
import ApartmentsOwner from "../components/apartment/ApartmentsOwner";
import Reviews from "../components/reviews";
import SectionWithHeaderSpacer from "../components/shared/SectionWithHeaderSpacer";
import reviewsList from "../components/reviews/reviews.json";
// import { getApartmentById } from "../services/apartments.service";
import apartaments from "../components/apartment/apartaments";

export default {
  name: "ApartmentPage",
  components: {
    Container,
    ApartmentsMainInfo,
    ApartmentsOwner,
    Reviews,
    SectionWithHeaderSpacer,
  },
  computed: {
    apartment() {
      return apartaments.find(
        (apartment) => apartment.id === this.$route.params.id
      );
    },
    reviewsList() {
      return reviewsList;
    },
  },
  // data() {
  //   return {
  //     apartment: null,
  //   };
  // },

  // async created() {
  //   try {
  //     const { id } = this.$route.params;
  //     const { data } = await getApartmentById(id);
  //     console.log("dataId", data);
  //     // this.apartment = data;
  //   } catch (error) {
  //     console.error(error.response.statusText);
  //   }
  // },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;
  &__content {
    display: flex;
    align-items: flex-start;
  }
  &__additional-info {
    margin-left: 30px;
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }
}
</style>
