<template>
  <div id="movie-similar">
    <div class="container">
      <h2 class="title">Movie Similar</h2>
      <MovieSection :data="movieSimilar" />
    </div>
  </div>
</template>

<script>
import MovieSection from '@/components/MovieSection.vue'
import { getMovieSimilarById } from '../../apis'

export default {
  name: 'MovieSimilar',
  props: ['id'],
  components: {
    MovieSection
  },
  data () {
    return {
      movieSimilar: []
    }
  },
  methods: {
    fetch () {
      getMovieSimilarById(this.id).then(res => this.movieSimilar = res.data.results)
    }
  },
  watch: {
      id (newId) {
          if (newId) this.fetch()
      }
  },
  created () {
    this.fetch()
  }
}
</script>

<style lang="scss" scoped>
#movie-similar {
  padding: 32px 0 0;
}
</style>