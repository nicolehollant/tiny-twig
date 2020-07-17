<template>
  <div class="page">
    <div class="container__wrapper">
      <div class="app container">
        <header>
          <h1>Valley Puppy</h1>
        </header>
        <aside>
          <nav>
            <div v-for="section of sections" :key="section.title">
              <div class="section__header">
                <img class="section__header--img" :src="section.href" alt="section banner" v-if="section.href">
                <h3 :style="`color: ${section.color || 'inherit'}`">
                  {{section.title}}
                </h3>
              </div>
              <li v-for="link of section.content" :key="link.path" class="nav--link">
                <nuxt-link :to="link.path">
                  {{ link.title || link.slug }}
                </nuxt-link>
              </li>
            </div>
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
  </div>
</template>

<script>
export default {
  name: "Home",
  head() { 
    return { 
      title: this.sectionTitle || 'Home'
    }
  },
  async asyncData({ $content, params}) {
    const sections = {
      base: {
        title: 'Base',
        color: '#041ca0',
        href: require('~/assets/box-bg-2.gif'),
        content: await $content('').sortBy('updatedAt').fetch(),
      },
      aboutMe: {
        title: 'About Me',
        color: '#041ca0',
        href: require('~/assets/box-bg-2.gif'),
        content: await $content('about-me').sortBy('updatedAt').fetch(),
      },
      somethingElse: {
        title: 'Something Else',
        color: '#041ca0',
        href: require('~/assets/box-bg-2.gif'),
        content: await $content('something-else').sortBy('updatedAt').fetch(),
      },
    }
    const contentPath = params.section ? [params.section, params.post].join('/') 
      : params.slug
    const active = await $content(contentPath || 'index').fetch()
    const sectionTitle = params.section ? [active.title || active.path, params.section].join(' - ')
      : [active.title || active.path, 'Home'].join(' - ')
    return { active, sections, sectionTitle }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sue+Ellen+Francisco&display=swap');

:root {
  --spacing: 1rem;
  --bg-color: #EADCFE;
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
  background-color: #9359FF;

}
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
.container__wrapper {
  padding-top: 1.5rem;
  width: 100vw;
}
.container {
  z-index: 1;
  position: relative;
  min-height: 100%;
  overflow: hidden;
  display: grid;
  margin: 0 auto;
  border-radius: 1rem;
  padding: var(--spacing);
  gap: var(--spacing);
  grid-template-areas:  "header header"
                          "aside main"
                          "footer footer";
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  background: url("../assets/bg-2.gif");
  border: 6px double rgb(255, 104, 205);
}
.background--image {
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  padding: 0.5rem;
  background: var(--bg-color);
  border: 3px dotted #A8A0FF;
}

.nav--link {
  margin-bottom: 0.5rem;
}

.app {
  position: relative;
  height: 600px;
  width: 600px;
}
.page {
  width: 100vw;
  height: 100vh;
  background: url("https://cur.glitter-graphics.net/pub/2885/2885585gfquqocxxl.gif");
}
header h1 {
  color: #4e3aff;
  text-align: center;
  font-family: 'Sue Ellen Francisco', cursive;
}

.section__header {
  position: relative;
  z-index: 0;
  width: 100%;
  padding: 0.25rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: #EADCFE;
  text-align: center;
  background: #9359FF;
}
.section__header:first-of-type {
  margin-top: 0;
}
.section__header--img {
  z-index: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.section__header h3 {
  z-index: 2;
  position: relative;
}
</style>