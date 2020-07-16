<template>
  <div class="">
    <img class="background--image" src="https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-warm-pink-cute-mother-and-baby-background-image_147126.jpg" alt="background image">
    <div class="container">
      <header>
        <h1>Valley Puppy</h1>
      </header>
      <aside>
        <nav>
          <li v-for="link of posts" :key="link.path" class="nav--link">
            <nuxt-link :to="link.path">
              {{ link.title || link.slug }}
            </nuxt-link>
          </li>
        </nav>
      </aside>
      <main>
        <nuxt-content  :document="active" />
      </main>
      <footer>
        heres stuff for your footer
      </footer>
    </div>
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

<style>
:root {
  --spacing: 1rem;
  --bg-color: rgba(201, 154, 163, 0.75);
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
.container {
  z-index: 1;
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  display: grid;
  padding: var(--spacing);
  gap: var(--spacing);
  grid-template-areas:  "header"
                        "aside"
                        "main"
                        "footer";
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr auto;
}
@media (min-width: 720px) {
  .container {
    grid-template-areas:  "header header"
                          "aside main"
                          "footer footer";
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 1fr auto;
  }
}
.background--image {
  z-index: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}
header {
  grid-area: header;
}
aside {
  grid-area: aside;
  overflow: scroll;
}
main {
  grid-area: main;
  overflow: scroll;
}
footer {
  grid-area: footer;
}

header, aside, main, footer {
  padding: var(--spacing);
  background: var(--bg-color);
}

.nav--link {
  margin-bottom: 0.5rem;
}
</style>