<template>
  <Renderer />
</template>

<script>
import Renderer from '@/components/renderer.vue'
export default {
  name: "Section",
  head: () => ({ title: 'Section'}),
  components: { Renderer },
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
  /* background: rgb(254,167,255);
  background: linear-gradient(0deg, rgba(254,167,255,1) 0%, rgba(255,149,156,1) 82%); */
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
  /* background: url("../../assets/box-bg.gif"); */
  background: url("../../assets/bg-2.gif");
  /* border: 16px groove #B894FF; */
  border: 6px double rgb(255, 104, 205);
  /* dotted dashed solid double groove ridge inset outset */
  /* background: url("../../assets/box-bg-2.gif"); */
  /* background: url("https://cur/.glitter-graphics.net/pub/2885/2885585gfquqocxxl.gif"); */
  /* background: url("https://i6.glitter-graphics.org/pub/680/680906w8x3y9ajrg.gif"); */
  /* background-size: cover; */
  /* background-size: contain; */
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
  /* background: url("../../assets/background.jpg"); */
  background: url("../../assets/bg-2.gif");
  background: url("https://cur.glitter-graphics.net/pub/2885/2885585gfquqocxxl.gif");
  /* background-size: cover; */
}
header h1 {
  color: #4e3aff;
  text-align: center;
  font-family: 'Sue Ellen Francisco', cursive;
}

.section__header {
  width: 100%;
  padding: 0.25rem;
  margin-top: 1rem;
  color: #EADCFE;
  background: #4e3aff;
  text-align: center;
}
.section__header:first-of-type {
  margin-top: 0;
}
</style>