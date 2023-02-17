<template>
  <footer class="myFooter">
    <div class="m-4">
      <div class="links-in-footer">
        <a>Контакты</a>
      </div>
      <div class="links-in-footer">
         <a>Партнёрам</a>
      </div>
      <div class="links-in-footer">
         <a>Помощь</a>
      </div>
      <div class="links-in-footer">
        <a>FAQ</a>
      </div>
      <div class="links-in-footer">
        <a>Telegram</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.myFooter{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 210px;
  background-color: #ECE8FF;
  color: #3A3A3A;
}

.links-in-footer{
  color: #3A3A3A;
  margin-left: 1rem;
  margin-top: 0.5rem;
  font-family: sans-serif;
}

</style>