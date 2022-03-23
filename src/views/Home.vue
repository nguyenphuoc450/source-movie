<template>
  <div class="home">
    <Banner />
    <MoviePopular/>
    <MovieUpComming />
    <MovieTrending/>
    <JoinToday/>
  </div>
</template>

<script>
import Banner from '@/components/Home/Banner.vue'
import MoviePopular from '@/components/Home/MoviePopular.vue'
import MovieUpComming from '@/components/Home/MovieUpComming.vue'
import MovieTrending from '@/components/Home/MovieTrending.vue'
import JoinToday from '@/components/Home/JoinToday.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    MoviePopular,
    MovieUpComming,
    MovieTrending,
    JoinToday
  },
}
</script>

<style lang="scss" scoped>

</style>
