<template>
  <div id="banner">
    <div class="container">
      <h2 class="welcome">Welcome</h2>
      <h3 class="text">
        Millions of movies, TV shows and people to discover. Explore now.
      </h3>
      <div class="search">
        <div class="icon" @click="search">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <input type="text" placeholder="Search..." v-model="text" @keyup.enter="search" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    search () {
      this.$router.push({ name: 'Search', params: { homeSearch: this.text }})
    }
  }
}
</script>

<style lang="scss" scoped>
#banner {
  background-image: url("../../assets/img/banner.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px 0;
}
.welcome {
  color: $--color-white;
  font-size: 48px;
  line-height: 56px;
  font-weight: 700;
}
.text {
  color: $--color-white;
  font-size: 36px;
  line-height: 48px;
  font-weight: 700;
}
.search {
  background-color: $--color-white;
  padding: 12px 24px;
  margin-top: 32px;
  display: flex;
  align-items: center;
  grid-gap: 8px;
  border-radius: 30px;
  .icon {
    color: $--color-black;
    cursor: pointer;
  }
  input {
    background: transparent;
    width: 100%;
    color: rgba(0, 0, 0, 0.8);
    border: none;
    outline: none;
  }
}
</style>