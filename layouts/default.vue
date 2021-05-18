<template>
  <div class="min-h-screen bg-blue-50">
    <nav
      class="sticky top-0 z-50 py-4 opacity-70 bg-teal-500 w-auto flex items-center shadow-md"
    >
      <div class="flex space-x-4 container mx-auto items-center">
        <div class="flex text-white">
          <h1 class="text-2xl">
            checche
          </h1>
        </div>
        <div class="flex flex-row space-x-4 ml-auto text-xl text-white">
          <nuxt-link to="/articles">
            articles
          </nuxt-link>
          <nuxt-link to="/">
            bio
          </nuxt-link>
        </div>
      </div>
    </nav>
    <div class="container mx-auto px-2 py-10">
      <Nuxt />
    </div>
  </div>
</template>
