<template>
  <div class="wrap">
    <page-title />
    <contents-with-filter />
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import ContentsWithFilter from "../components/ContentsWithFilter.vue";

export default {
  name: "News",
  components: { ContentsWithFilter, PageTitle },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
