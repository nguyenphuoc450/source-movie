<template>
  <div id="movie-popular">
    <div class="container">
      <h2 class="title">What's popular</h2>
      <MovieSection :data="moviePopular" />
    </div>
  </div>
</template>

<script>
import MovieSection from '@/components/MovieSection.vue'
import { getMoviePopular } from '../../apis'

export default {
  name: 'MoviePopular',
  components: {
    MovieSection
  },
  data () {
    return {
      moviePopular: []
    }
  },
  created () {
    getMoviePopular.then(res => this.moviePopular = res.data.results)
  }
}
</script>

<style lang="scss" scoped>
#movie-popular {
    padding-top: 32px;
}
</style>