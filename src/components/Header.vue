<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
          <div id="logo-picture"></div>
          <div id="logo-name"><h4>Продукт</h4></div>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">О подразделении</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">О команде</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Документация</a>
          </li>
        </ul>
        <form class="form-inline">
          <a class="btn btn-outline-secondary m-2" href="#">Войти</a>
        </form>
      </div>
    </nav>

  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.navbar-brand{
  padding-bottom: 0;
}

#logo-name{
  color: #B3E427;
  margin-left: 1rem;
  float: left;
}
#logo-picture{
  width: 20px;
  height: 20px;
  background: #B3E427;
  border-radius: 50%;
  margin-left: 1rem;
  float: left;
  margin-top: 0.4rem;
}
</style>