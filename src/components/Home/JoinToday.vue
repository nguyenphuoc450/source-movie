<template>
  <div id="join-today">
    <div class="container">
      <div class="grid">
        <div class="content">
          <h2 class="title">Join Today</h2>
          <p class="description">
            Get access to maintain your own custom personal lists, track what
            you've seen and search and filter for what to watch next—regardless
            if it's in theatres, on TV or available on popular streaming
            services like .
          </p>
          <a href="https://www.themoviedb.org/signup?language=vi" class="btn">Sign Up</a>
        </div>
        <ul class="list">
          <li v-for="i in list" :key="i">{{ i }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JoinToday',
  data () {
    return {
      list: [
        `Enjoy TMDB ad free`,
        `Maintain a personal watchlist`,
        `Filter by your subscribed streaming services and find something to watch`,
        `Log the movies and TV shows you've seen`,
        `Build custom lists`,
        `Contribute to and improve our database`,
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#join-today {
  padding: 32px 0;
  background-image: url("../../assets/img/join-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 30%;
  grid-gap: 32px;
  align-items: center;
  .content {
    color: $--color-white;
    .title {
        font-size: 32px;
        line-height: 48px;
    }
    .description {
        margin: 20px 0;
        font-size: 20px;
        line-height: 32px;
    }
    .btn {
        display: block;
        padding: 12px;
        max-width: 100px;
        background-color: #805be7;
        color: $--color-white;
        text-align: center;
        border-radius: 4px;
        transition: all ease 0.3s;
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
    }
  }
  .list {
    color: $--color-white;
    list-style: auto;
    list-style-type: disc;
    font-size: 16px;
  }
}
</style>