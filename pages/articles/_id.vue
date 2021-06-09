<template>
  <div class="flex">
    <article>
      <h1 class="text-6xl mb-5">
        {{ page.title }}
      </h1>
      <nuxt-content :document="page" />
    </article>
    <nav class="hidden md:block">
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
  & h2 {
    @apply text-5xl mb-3;
  }

  & h3 {
    @apply text-4xl mb-2 ml-2;
  }

  & p {
    @apply text-xl mb-5 ml-5;
  }
}
</style>
