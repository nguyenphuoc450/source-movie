<template>
  <div id="footer">
    <div class="container">
      <div class="grid">
        <router-link to="/" class="logo">
          <img src="../assets/img/footer-logo.svg" alt="" />
        </router-link>
        <div class="nav" v-for="(i, k) in nav" :key="k">
          <h3 class="title">{{ i.title }}</h3>
          <ul class="list" v-for="(link, key) in i.links" :key="key">
            <li>{{ link }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      nav: [
        {
          title: 'THE BASICS',
          links: ['About Us', 'Contact Us', 'Support Forums', 'API', 'System Status']
        },
        {
          title: 'GET INVOLVED',
          links: ['Contribution Bible', 'Add New Movie', 'Add New TV Show']
        },
        {
          title: 'COMMUNITY',
          links: ['Guidelines', 'Discussions', 'Leaderboard', 'Twitter']
        },
        {
          title: 'LEGAL',
          links: ['Terms of Use', 'Privacy Policy']
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#footer {
  padding: 32px 0;
  background-color: $--color-primary;
}
.grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 24px;
    .logo {
        img {
            max-width: 130px;
        }
    }
    .nav {
        color: $--color-white;
        .title {
            margin-bottom: 6px;
        }
        .list {
            li {
                margin-top: 6px;
                transition: all ease 0.3s;
                cursor: pointer;
                &:hover {
                    opacity: 0.8;
                }
            }
        }
    }
}
</style>