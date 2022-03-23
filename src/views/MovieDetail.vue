<template>
  <div id="movie-detail">
    <Overview :id="id" />
    <MovieSimilar :id="id" />
  </div>
</template>

<script>
import Overview from '@/components/MovieDetail/Overview.vue'
import MovieSimilar from '@/components/MovieDetail/MovieSimilar.vue'

export default {
  name: 'MovieDetail',
  props: ['id'],
  components: {
    Overview,
    MovieSimilar
  }
}
</script>

<style lang="scss" scoped>

</style>