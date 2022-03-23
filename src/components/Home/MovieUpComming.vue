<template>
  <div id="up-comming">
      <div class="container">
          <h2 class="title">Up Comming</h2>
          <MovieSection :data="movieUpComming"/>
      </div>
  </div>
</template>

<script>
import MovieSection from '@/components/MovieSection.vue'
import { getMovieUpComming } from '../../apis'

export default {
    name: 'LatestTrailers',
    components: {
        MovieSection
    },
    data () {
        return {
            movieUpComming: []
        }
    },
    created () {
         getMovieUpComming(1).then(res => this.movieUpComming = res.data.results)
    }
}
</script>

<style lang="scss" scoped>
#up-comming {
    padding: 32px 0;
    background-color: #425B70;
}
.title {
    color: $--color-white;
}
/deep/ * {
    color: $--color-white;
}
</style>