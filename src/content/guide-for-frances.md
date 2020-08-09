---
title: Guide
description: My Beautiful Site
createdAt: 8/9/20
updatedAt: 8/9/20
---

# Hi Queen

First of all... sry im so late. I m lazy, what can i say (also i lost power and service for 6 days lol) 🤷🏼‍♀️

*ANYWAYS*

So here's a quick runthrough of how u do stuff with this thing

## Installing Stuff

Ok, so I think that you have everything already, but I'm gonna go thru it anyways just in case

Quick note, everything that u see in code blocks has to be run in your terminal (basically everything lol)

### Homebrew

Homebrew is a command-line package manager for macOS and linux, so you can use it to download up-to-date apps / services / tools. We will be using it to get `Nodejs` and `Yarn`.

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

This `curl`s an install script and runs it (`curl` is a command for making HTTP requests).

### Git

Git is a version-control tool (ummmm... something u put code on lol), and it should come on your computer, you can check with:

```sh
git --help
```

if that doesnt spit out a bunch of stuff, then you may have to install it!

```sh
brew install git
```

We will just be using git to keep track of out stuff c:

### Node & Yarn

Node is a server-side javascript runtime. That is, it's how we are going to run javascript... on a server! With web apps (and apps in general), there is a server and a client, where the client makes various requests to the server. For instance when you go to Twitter or something, the client (your browser / twitter app) is making requests to some backend server that has access to databases etc and can fetch your content! The client is just there to display stuff and to make the actual requests. ANYWAYS... we will need `node` to run some local server (to serve the actual stuff we are writing) 😊

```sh
brew install node
brew install yarn
```

Node will give you `node` and `npm`, the latter is "node package manager", which essentially is a whole bunch of modules that other people have published for you to use! `yarn` is an alternative to `npm` that interfaces with the same bunch of modules, but has a slightly nicer interface, in my opinion.

## Running The Project Locally

### Opening Stuff lol

Ok so we have all the build tools, and I know that you have the project downloaded so we are lookin GOOD. Now you want to open a terminal and navigate to the folder/directory that your project is in. If the `tiny-twig` folder is on your desktop you would do this:

```sh
cd ~/Desktop/tiny-twig
```

`cd` stands for "change directory" and brings you to whatever folder you specify. `~` is a shortcut for `$HOME` or `/Users/Frances` or whatever ur username is. So, `~/Desktop` is your desktop folder!!!

With your terminal in your project's directory, you _should_ be able to do:

```sh
code .
```

Which should open VSCode with the current folder's contents. Otherwise you can just open VSCode and open the folder or add the folder to the workspace idk.

### Editing Stuff

Ok, so you should have the project open, and there should be a little sidebar that shows the contents of the folder on the left (might have to click the top left icon w the pieces of paper). You should see some files/folders like `src/`, `config/`, `.gitignore`, `nuxt.config.js`, `package.json`, and some others. We aren't worried about _too_ much of these. But for what it's worth, `package.json` is a list of project dependencies (that get installed with npm/yarn) and scripts that you can run.

Install all the project dependencies:

```sh
yarn
# or
yarn install
```

Run the project:

```sh
yarn dev
```

(note, this will spin up a local server (probably on [http://localhost:3000](http://localhost:3000)), and while you are on that you can double click the contents of a post to edit it.)

For actually editing/adding content, you will be making [Markdown files](https://www.markdownguide.org/basic-syntax/) in the `src/content` directory. There should be a decent amount to use as examples or whatever, but in general you can just write HTML in them as usual, and then you can specify the title and whatnot in an annotation (it's called yaml frontmatter, if u r curious):

```yml
---
title: This Is what Goes On The Sidebar
createdAt: 7/15/20 (this doesnt matter)
updatedAt: 7/16/20 (this determines order on the sidebar)
---
```

And the sidebar is grouped by folder. If you want to add a new folder, you have to update `/src/pages/_slug.vue` to tell it to load that folder. There's a `<script>` tag about 35 lines down, that has the following code:

```js
const sections = {
  base: {
    title: 'Base',
    color: '#041ca0',
    href: require('~/assets/box-bg-2.gif'),
    content: await $content('').sortBy('updatedAt').fetch(),
  },
  newThing: {
    title: 'New Thing',
    color: '#041ca0',
    href: "https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-577160911.jpg",
    content: await $content('new-thing').sortBy('updatedAt').fetch(),
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
```

and to add a new folder, you just add it to that list! Let's say you are making a new folder for your socials or something:

- make the folder `/src/content/my-socials`
- make whatever files you want in there.
- add the entry to the list in whichever position you want it to appear:

```js
const sections = {
  ...
  mySocials: {
    title: 'My Socials',
    color: '#041ca0',
    href: "https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-577160911.jpg",
    content: await $content('my-socials').sortBy('updatedAt').fetch(),
  },
  ...
}
```

note: `href` is an optional field that loads a background image. `color` is an optional field that sets text color. `title` is the name on the sidebar, and `content` is the call to load the files. also, the folder should be kebab-case (words-are-separated-by-hyphens) and the key name in the `sections` variable should be camelCase (firstWordIsLowercaseButThenEachWordIsCapitalizedAfterThat).

Outside of that, there's just some stuff in `/src/pages/_slug.vue` that pertains to the layout. That's where you can edit the header, footer, etc. You _prob_ wanna leave `aside` and `main` alone (that's where the actual javascript stuff is goin on), but feel free to play around with it 💞

## Building and Hosting

To build the project, you just run:

```sh
yarn ready
```

Which should spit out a folder called `dist`. This is what you will put on ur hosting service (but like, u can rename it to whatever)!!! Or you can upload it to [netlify](https://app.netlify.com/) if u wanna move there

Here would be a sample build configuration for netlify:
```yml
Repository: github.com/happyworldgirl/tiny-twig
Base directory: Not set
Build command: yarn ready
Publish directory: dist
Deploy log visibility: Logs are public
Builds: Active
```

And with that you should be good!!!!!



Of course if u need anything lmk, I'm happy to help, ily booboo and have fun 🥰