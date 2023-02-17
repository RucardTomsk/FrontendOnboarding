<template>
  <footer class="myFooter">
    <div class="m-4">
      <div>
         <a>Контакты</a>
      </div>
      <div>
         <a>Партнёрам</a>
      </div>
      <div>
         <a>Помощь</a>
      </div>
      <div>
        <a>FAQ</a>
      </div>
      <div>
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

<style>
.myFooter{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 210px;
  background-color: #ECE8FF;
  color: #3A3A3A;
}

.wrap>div {
  margin-left: 1rem;
  margin-top: 0.5rem;
}


</style>