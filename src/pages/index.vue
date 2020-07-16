<template>
  <div>
    hmmm
  </div>
</template>

<script>
export default {
  name: "Home",
  head: () => ({ title: 'Home'}),
  async asyncData({ $content, params }) {
    const posts = await $content('').sortBy('updatedAt').fetch()
    const active = await $content(params.slug || 'index').fetch()
    return { posts, active }
  }
}
</script>