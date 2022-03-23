<template>
  <div
    class="overview"
    :style="{ backgroundImage: `url(${getBanner(movie.backdrop_path)})` }"
  >
    <div class="bg">
      <div class="container">
        <div class="grid">
          <div
            class="poster"
            :style="{ backgroundImage: `url(${getPoster(movie.poster_path)})` }"
          ></div>
          <div class="content">
            <h1 class="name">
              {{ movie.title }}
              <span>({{ splitReleaseDate(movie.release_date) }})</span>
            </h1>
            <div class="facts">
              <span class="adult" v-if="movie.adult">18</span>
              <ul class="genres">
                <li v-for="i in movie.genres" :key="i.name">{{ i.name }},</li>
              </ul>
              <span class="time">{{ movie.runtime }} mins</span>
            </div>
            <div class="user-vote">
              User Vote: {{ movie.vote_average }}/<span>10</span>
            </div>
            <p class="tagline">{{ movie.tagline }}</p>
            <div class="text-overview">
              <h2>Overview</h2>
              <p>{{ movie.overview }}</p>
            </div>
            <div class="btn-trailer" @click="handleShowTrailer">
              Watch Trailer
            </div>
          </div>
        </div>
        <Transition>
          <div
            class="trailer"
            v-if="isActive"
            ref="trailer"
            @click="handleHideTrailer"
          >
            <iframe width="80%" height="80%" :src="getLinkYoutube()"> </iframe>
            <div class="icon">
              <i class="fa-solid fa-xmark icon-close"></i>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script>
import { getMovieDetailById, getMovieVideoById, originalPathImage, pathImageMedium, pathYoutube } from '../../apis'

export default {
  name: 'MovieDetail',
  props: ['id'],
  data () {
    return {
      movie: {},
      video: '',
      isActive: false
    }
  },
  methods: {
    fetch () {
      Promise.all([getMovieDetailById(this.id), getMovieVideoById(this.id)])
        .then(([movie, video]) => {
          this.movie = movie.data || []
          this.video = (video.data.results || []).find(i => i.type === 'Trailer')
        })
    },
    getBanner (backdrop_path) {
      return originalPathImage + backdrop_path || ''
    },
    getPoster (poster_path) {
      return pathImageMedium + poster_path || ''
    },
    splitReleaseDate (date) {
      const year = date?.split('-')[0]
      return year || ''
    },
    getLinkYoutube () {
      return pathYoutube + this.video.key || ''
    },
    handleShowTrailer () {
      this.isActive = true
    },
    handleHideTrailer (e) {
      if (e.target.matches('.trailer') || e.target.matches('.icon-close')) {
        this.isActive = false
      }
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
.overview {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.bg {
  padding: 32px 0;
  background-image: linear-gradient(
    to right,
    rgba(10.5, 31.5, 73.5, 1) 150px,
    rgba(10.5, 31.5, 73.5, 0.84) 100%
  );
}
.grid {
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 24px;
  align-items: center;
  animation: fadeIn ease 0.3s;

  .poster {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 300px;
    height: 450px;
    border-radius: 8px;
  }
  .content {
    color: $--color-white;
    .name {
      font-size: 32px;
      line-height: 52px;
      span {
        opacity: 0.8;
        font-weight: 400;
      }
    }
    .facts {
      display: flex;
      align-items: center;
      grid-gap: 12px;
      .adult {
        padding: 4px 6px;
        color: rgba(255, 255, 255, 0.6);
        border: 1px solid rgba(255, 255, 255, 0.6);
        border-radius: 2px;
      }
      .genres {
        display: flex;
        grid-gap: 8px;
        font-size: 16px;
        line-height: 24px;
      }
    }
    .user-vote {
      margin: 12px 0;
      font-size: 16px;
      line-height: 24px;
      span {
        opacity: 0.8;
      }
    }
    .tagline {
      font-size: 18px;
      line-height: 26px;
      font-style: italic;
      opacity: 0.8;
    }
    .text-overview {
      margin-top: 12px;
      h2 {
        font-size: 20px;
        line-height: 32px;
      }
      p {
        margin: 6px 0 12px;
        font-size: 16px;
        line-height: 24px;
      }
    }
    .btn-trailer {
      padding: 12px;
      max-width: 120px;
      background-color: transparent;
      text-align: center;
      border: 1px solid $--color-hover;
      border-radius: 4px;
      transition: all ease 0.3s;
      cursor: pointer;
      &:hover {
        background-color: $--color-black;
        border-color: transparent;
      }
    }
  }
}
.trailer {
  background-color: rgba($color: #000000, $alpha: 0.8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 101;
  iframe {
    border: none;
    border-radius: 8px;
  }
  .icon {
    position: absolute;
    top: 20px;
    right: 20px;
    color: $--color-white;
    font-size: 32px;
    cursor: pointer;
    z-index: 101;
  }
}

// Transition
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>