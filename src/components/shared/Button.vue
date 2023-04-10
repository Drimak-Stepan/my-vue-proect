<template>
  <button
    v-on="listeners"
    v-bind:type="type"
    :class="{ btn: true, 'btn--outlined': outlined }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonAll",
  props: {
    type: { type: String, default: "button" },
    outlined: { type: Boolean, default: true },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  font-size: 18px;
  background: #ff662d;
  color: #fff;
  cursor: pointer;
  min-width: 220px;
  border: 1px solid transparent;
  padding: 8px 15px;

  &--outlined {
    background: none;
    border: 1px solid #ff662d;
    color: #ff662d;
  }
}
</style>
