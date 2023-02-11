<template>
    <nav>
      <router-link class="logo" to="/" exact><img src="../../assets/shiba-hero-transformed.png"></router-link>
      <router-link to="/" exact>Home</router-link>
      <router-link to="/register" exact>Crie seu Herói</router-link>
      <router-link to="/lista" exact>Lista de heróis</router-link>
    </nav>
  </template>
  
  <script>
  export default {}
  </script>
  
  <style>
  nav {
    text-align: right;
    padding: 1rem;
    background-color: #2a2a2a;
    color: #fff;
  }
  nav > a{
    padding: 5px 20px;
  }
  
  router-link {
    color: #fff;
    text-decoration: none;
    margin-right: 1rem;
  }

  .logo{
    height: auto;
    position: absolute;
    left: 0;
    top: 0;
  }
  .logo > img{
    width: 100px;
  }
  </style>
  