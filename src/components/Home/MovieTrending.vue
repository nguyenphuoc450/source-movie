<template>
  <div id="movie-trending">
    <div class="container">
      <h2 class="title">Trending</h2>
      <MovieSection :data="movieTrending" />
    </div>
  </div>
</template>

<script>
import MovieSection from '@/components/MovieSection.vue'
import { getMovieTrending } from '../../apis'

export default {
  name: 'LatestTrailers',
  components: {
    MovieSection
  },
  data () {
    return {
      movieTrending: []
    }
  },
  created () {
    getMovieTrending(1).then(res => this.movieTrending = res.data.results)
  }
}
</script>

<style lang="scss" scoped>
#movie-trending {
    padding: 32px 0 0;
    background-image: url('../../assets/img/trending-bg.svg');
    // background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
}
</style>