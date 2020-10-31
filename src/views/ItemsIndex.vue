<template>
  <div class="container">
    <h1>All Items</h1>
    <div v-for="item in items">
      <h2>{{ item.name }}</h2>
      <p>Ingredients: {{ item.ingredients }}</p>
      <p>Price: {{ item.price }}</p>
      <router-link v-bind:to="`/items/${item.id}`">More details</router-link>
    </div>
  </div>
</template>

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
