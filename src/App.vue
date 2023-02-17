<template>

  <div class="app">

    <Header>
    </Header>

    <main>
      <router-view></router-view>
    </main>

    <Footer>
    </Footer>

  </div>

</template>

<script>
import axios from "axios";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  components: {Footer, Header},
  data(){
    return{

    }
  },
  methods:{

  },
}
</script>
<style>

</style>

