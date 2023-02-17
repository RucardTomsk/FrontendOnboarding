<template>
  <header>
    <div class="logo">
      <div id="logo-picture"></div>
      <div id="logo-name"><h4>Продукт</h4></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
#logo-picture{
  width: 20px;
  height: 20px;
  background: #B3E427;
  border-radius: 50%;
}
#logo-name{
  color: #B3E427;
  height: 10px;
}
</style>