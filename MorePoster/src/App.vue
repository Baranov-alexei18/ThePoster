<script setup lang="ts">

</script>

<template>
<div>
  <header>
    <nav class="nav-router">
      <Breadcrumbs />
      <RouterLink to="/">Home</RouterLink>
      <p style="color: rgb(220, 233, 43); margin-left: auto; margin-right: 20px;">
        Test Work
      </p>
    </nav>
  </header>
  <router-view />
</div>
</template>

<style lang="scss">
body{
  background-color: var(--vt-c-white-whitesmoke);
}

header {
  place-items: center;
  background-color: var(--vt-c-black);
  width: 100%;
  height: 40px;


  .nav-router { 
  display: flex;
  align-items: center;
  font-size: 15px;
  padding-top: 8px;

    a { 
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
    text-decoration: none;
    color: var(--vt-c-white-whitesmoke);
    }
    .router-link-exact-active {
    color: hsla(160, 100%, 37%, 1);
    }
    .router-link-exact-active:hover {
    background-color: transparent;
    }
  }
}
</style>
