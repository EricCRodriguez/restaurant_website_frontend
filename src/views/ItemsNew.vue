<template>
  <div class="container">
    <h1>New Item</h1>
    <form v-on:submit.prevent="createItem()">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="newItemName" />
      Ingredients:
      <input type="text" v-model="newItemIngredients" />
      Price:
      <input type="text" v-model="newItemPrice" />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      newItemName: "",
      newItemIngredients: "",
      newItemPrice: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    createItem: function() {
      var params = {
        name: this.newItemName,
        ingredients: this.newItemIngredients,
        price: this.newItemPrice
      };
      axios
        .post("/api/items", params)
        .then((response) => {
          this.$router.push("/items");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
