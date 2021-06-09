<template>
  <div class="flex space-x-10">
    <article class=" min-w-0 break-words">
      <h1 class="text-6xl mb-5">
        {{ page.title }}
      </h1>
      <nuxt-content :document="page" />
    </article>
    <div class="hidden lg:block flex-auto min-w-0 w-96 break-words">
      <nav class="sticky top-36">
        <ul>
          <li
            v-for="link of page.toc"
            :key="link.id"
            :class="{
              'text-lg': link.depth === 2,
              'text-md': link.depth === 3,
              'opacity-75': link.depth === 3,
              'ml-1': link.depth === 3,
            }"
          >
            <nuxt-link :to="`#${link.id}`">
              {{ link.text }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
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
    @apply text-4xl mb-3;
  }

  & h3 {
    @apply text-2xl mb-2 ml-2;
  }

  & p {
    @apply text-lg mb-5 ml-5;
  }
}
</style>
