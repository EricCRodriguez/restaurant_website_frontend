<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/items">All items</router-link>
      |
      <router-link to="/items/new">New item</router-link>
    </div>
    <router-view />
  </div>
</template>

<style></style>
