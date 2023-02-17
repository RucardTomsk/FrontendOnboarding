<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
          <div class="logo">
          <div id="logo-picture"></div>
          <div id="logo-name"><h4>Продукт</h4></div>
      </div>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
        </ul>
        <span class="navbar-text">
      Navbar text with an inline element
    </span>
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