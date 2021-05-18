<template>
  <div class="flex">
    <nav class="">
      <ul>
        <li
          v-for="link of page.toc"
          :key="link.id"
          :class="{
            'text-xl': link.depth === 2,
            'text-md': link.depth === 3,
          }"
        >
          <nuxt-link :to="`#${link.id}`">
            {{ link.text }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <article>
      <h1 class="text-4xl">
        {{ page.title }}
      </h1>
      <nuxt-content :document="page" />
    </article>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  async asyncData ({ params, $content }) {
    const page = await $content('articles', params.id).fetch()

    return {
      page,
    }
  },
})
</script>

<style lang="postcss" scoped>
>>> .nuxt-content {
  h2 {
    @apply text-6xl;
  }

  h3 {
    @apply text-4xl;
  }

  p {
    @apply text-xl;
  }
}
</style>
