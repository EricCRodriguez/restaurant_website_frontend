<template>
  <div class="items">
    <div class="container">
      <h1>Menu</h1>
      <section class="page-section clearfix"></section>

      <section class="page-section cta">
        <div class="container">
          <div class="row">
            <div class="col-xl-9 mx-auto">
              <div class="cta-inner text-center rounded">
                <h2 class="section-heading mb-4">
                  <span class="section-heading-upper">El Cocina Fresca</span>
                  <span class="section-heading-lower">Menu</span>
                </h2>
                <p class="mb-0"></p>
                <div v-for="item in items">
                  <h2>{{ item.name }}</h2>
                  <p>Ingredients: {{ item.ingredients }}</p>
                  <p>Price: {{ item.price }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      items: []
    };
  },
  created: function() {
    axios.get("/api/items").then((response) => {
      this.items = response.data;
    });
  },
  methods: {}
};
</script>
