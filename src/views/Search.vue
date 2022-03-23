<template>
  <div id="search">
    <div class="container">
      <div class="search">
        <div class="icon" @click="search">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <input
          type="text"
          placeholder="Search..."
          v-model="text"
          @keyup.enter="search"
        />
      </div>
      <MovieSection :data="movieSearch" />
    </div>
  </div>
</template>

<script>
import { getMovieSearch } from '../apis'
import MovieSection from '@/components/MovieSection.vue'

export default {
  name: 'Search',
  components: {
    MovieSection
  },
  props: ['homeSearch'],
  data () {
    return {
      text: '',
      movieSearch: []
    }
  },
  methods: {
    fetch () {
      getMovieSearch(this.text || this.homeSearch).then(res => this.movieSearch = res.data.results)
    },
    search () {
      this.fetch()
    }
  },
  created () {
    this.fetch()
  }
}
</script>

<style lang="scss" scoped>
.search {
  margin: 24px 0;
  padding: 12px 24px;
  background-color: $--color-white;
  display: flex;
  align-items: center;
  grid-gap: 8px;
  border: 1px solid $--color-black;
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