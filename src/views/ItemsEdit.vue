<template>
  <div class="container">
    <h1>Edit Item</h1>
    <form v-on:submit.prevent="updateItem(item)">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="item.name" />
      Ingredients:
      <input type="text" v-model="item.ingredients" />
      Price:
      <input type="text" v-model="item.price" />
      <input type="submit" value="Update" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      item: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/items/" + this.$route.params.id).then((response) => {
      this.item = response.data;
    });
  },
  methods: {
    updateItem: function(item) {
      var params = {
        name: item.name,
        ingredients: item.ingredients,
        price: item.price
      };
      axios
        .patch("/api/items/" + item.id, params)
        .then((response) => {
          this.$router.push("/items");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
