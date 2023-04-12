<template>
  <main class="my-orders-page">
    <SectionWithHeaderSpacer>
      <Container>
        <section class="my-orders-page__content">
          <MainTitle>Замовлення</MainTitle>
          <OrdersList :items="apartaments" />
        </section>
      </Container>
    </SectionWithHeaderSpacer>
  </main>
</template>

<script>
import Container from "../components/shared/Container";
import SectionWithHeaderSpacer from "../components/shared/SectionWithHeaderSpacer";
import MainTitle from "../components/shared/MainTitle";
import OrdersList from "../components/my-orders/OrdersList";
// import { getOrders } from "../services/order.service";
import apartaments from "../components/apartment/apartaments";
export default {
  name: "MyOrdersPage",
  components: {
    SectionWithHeaderSpacer,
    Container,
    MainTitle,
    OrdersList,
  },
  data() {
    return { apartaments };
  },
  //   async created() {
  //     try {
  //       const { data } = await getOrders();
  //       //   this.orders = data;
  //     } catch (error) {
  //       this.$notify({
  //         type: "error",
  //         title: "Виникла помилка",
  //         text: error.message,
  //       });
  //     }
  //   },
};
</script>

<style lang="scss" scoped>
.my-orders-page {
  &__content {
    max-width: 730px;
    margin: 0 auto 100px;
  }
}
</style>
