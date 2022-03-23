<template>
  <div id="header">
    <div class="container">
      <div class="grid">
        <router-link :to="{ name: 'Home' }" class="logo">
          <img src="@/assets/img/logo.svg" alt="" />
        </router-link>
        <ul class="nav">
          <li v-for="i in links" :key="i.text">
            <router-link :to="i.to">{{ i.text }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      links: [
        {
          text: 'Movies',
          to: {
            name: 'Home'
          }
        },
        {
          text: 'TV Shows',
          to: {
            name: 'Home'
          }
        },
        {
          text: 'People',
          to: {
            name: 'Home'
          }
        },
        {
          text: 'More',
          to: {
            name: 'Home'
          }
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#header {
  background-color: $--color-primary;
  padding: 24px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}
.grid {
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  grid-gap: 24px;
  .logo {
    max-width: 154px;
    height: 20px;
  }
  .nav {
    display: flex;
    grid-gap: 24px;
    li a {
        color: $--color-white;
        font-size: 16px;
        line-height: 24px;
        font-weight: 600;
        transition: all ease 0.3s;
        &:hover {
            color: $--color-hover;
        }
    }
  }
}
</style>