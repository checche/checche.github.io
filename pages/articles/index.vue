<template>
  <div>
    <ul>
      <li v-for="article in articles" :key="article">
        <nuxt-link :to="article.path">
          <div>
            {{ article.title }} {{ article.createdAt }}
            {{ article.description }}
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .sortBy('createdAt', 'desc')
      .fetch()
    return { articles }
  },
  data() {
    return { visible: false }
  },
})
</script>
