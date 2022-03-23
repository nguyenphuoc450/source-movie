<template>
  <div class="movie-section">
    <div class="list" v-if="data.length">
      <div class="item" v-for="i in data" :key="i.id">
        <router-link
          :to="{ name: 'MovieDetail', params: { id: i.id } }"
          class="image"
        >
          <img :src="mergePath(i.backdrop_path)" alt="" />
          <div class="rating flex-center">{{ formatRating(i.vote_average) }}</div>
        </router-link>
        <div class="body">
          <h3 class="name">{{ i.title }}</h3>
          <p class="release-date">{{ i.release_date }}</p>
        </div>
      </div>
    </div>
    <div class="loading" v-else></div>
  </div>
</template>

<script>
import { pathImageSmall } from '../apis'

export default {
  name: 'MovieSection',
  props: ['title', 'data'],
  methods: {
    mergePath (backdrop_path) {
      return pathImageSmall + backdrop_path
    },
    getLink (id) {
      console.log(id)
    },
    formatRating (number) {
       if (number) return number.toFixed(1)
       return 'NR'
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  margin-top: 24px;
  display: flex;
  grid-gap: 24px;
  overflow-x: auto;
  &::-webkit-scrollbar-thumb {
    background-color: #dbdbdb;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: $--color-white;
    border-radius: 4px;
  }
  &::-webkit-scrollbar {
    height: 8px;
    background-color: transparent;
  }
  .item {
    flex-shrink: 0;
    flex-grow: 0;
    max-width: 150px;
    height: 100%;
    display: flex;
    flex-direction: column;
    .image {
      position: relative;
      display: block;
      img {
        display: block;
        width: 100%;
        height: 225px;
        object-fit: cover;
        object-position: center;
        border-radius: 4px;
      }
      .rating {
        width: 32px;
        height: 32px;
        position: absolute;
        right: 10px;
        bottom: 10px;
        background-color: rgba($color: #000000, $alpha: 0.8);
        color: $--color-white;
        border-radius: 50%;
      }
    }
    .body {
      margin-top: auto;
      padding: 12px;
      .name,
      .release-date {
        text-align: center;
      }
      .release-date {
        font-weight: 300;
      }
    }
  }
}
</style>