<template>
  <div class="container">
    <h2>{{ item.name }}</h2>
    <p>Ingredients: {{ item.ingredients }}</p>
    <p>Price: {{ item.price }}</p>
    <button v-on:click="destroyItem(item)">Destroy item</button>
    <router-link v-bind:to="`/items/${item.id}/edit`">Edit item</router-link>
    <router-link to="/items">Back to all items</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      item: {}
    };
  },
  created: function() {
    axios.get("/api/items/" + this.$route.params.id).then((response) => {
      this.item = response.data;
    });
  },
  methods: {
    destroyItem: function(item) {
      axios.delete("/api/items/" + item.id).then((response) => {
        this.$router.push("/items");
      });
    }
  }
};
</script>
