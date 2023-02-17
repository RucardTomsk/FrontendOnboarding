<template>
  <footer class="myFooter">
    <div>
      <p>Контакты</p>
    </div>
    <div>
      <p>Партнёрам</p>
    </div>
    <div>
      <p>Помощь</p>
    </div>
    <div>
      <p>FAQ</p>
    </div>
    <div>
      <p>Telegram</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style>
.myFooter{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 210px;
  background-color: #ECE8FF;
  color: #3A3A3A;
}

.myFooter>div {
  margin-left: 1rem;
  margin-top: 0.5rem;
}
</style>