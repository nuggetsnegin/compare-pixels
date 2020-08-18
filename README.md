# Compare Pixels

Tech challenge for [Pastel](https://usepastel.com/)!
![Compare Pixels](https://i.imgur.com/1mreTg5.png)

[Live Link](https://compare-pixels.vercel.app/)

## Built With

* [Next.js](https://nextjs.org/)
* [Vercel](https://vercel.com/)
* [@svgr](https://www.npmjs.com/package/@svgr/webpack)
* [url-loader](https://github.com/webpack-contrib/url-loader)

## Authors

* **Negin Melina Sauermann** - [nuggetsnegin](https://github.com/nuggetsnegin)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

## Notes
### Why I went with Next.js
* I've used CRA extensively, good opportunity to learn the difference between CRA & Next.js
* Also created a React app from scratch using Parcel and it took awhile to get setup
* Wanted to make use of Next's Link component, previously only used Reach Router
* Learn about CSS Modules/CSS-in-JS
* Pre-rendering and data fetching, dynamic routes?
### Learned
* Linking is very intuitive (pages folder, can create sub-folders for sub-directories)
* Global styles must be defined in <code>_app.js</code>
* Using Next API is also intuitive (i.e. importing built-in components like head, meta, title)
* Next uses a library called <code>styled-jsx</code>/CSS-in-JS and has built-in support for Sass ✨
* Also features CSS Modules with naming convention : <code>[name].module.css</code>, similar concept to Vue <code><style scoped></code>
* Because CSS modules are locally scoped, when they are created they're assigned a unique class name i.e. <code>layout_container__2t4v2</code>, don't have to worry about naming collisions
* In production, all CSS files will be automatically concatenated into a single minified .css file, **CSS Modules** will be concatenated, minified and code-split <code>.css</code> files (ensures minimal amount of CSS is loaded!)
* CSS-in-JS can be used using inline styles or <code> <style jsx>{` p { color: pink; }`}</style></code> to skip scoping can explicitly add global i.e. <code><style jsx global>{`p { color: green } `}</style></code> and one off global styles can be defined using using <code>:global() </code>
*  Dynamic styling can be done with props i.e. <code> <style jsx>`{ background: ${props.theme.background}'`}>/style> </code>
* The [github page on styled-jsx](github.com/vercel/styled-jsx) is great to reference
* Next.js **pre-renders** every page, generates HTML for each page in advance better performance and SEO, each page is associated with minimal js code needed for that page. Plain React has no pre-rendering 
* When the page is loaded, js code runs and makes the page fully interactive, i.e. <code>Link</code> will be active after JS loads
* Two forms of pre-rendering **static generation**(generates HTML at build time, reused on each request) and **server-side rendering** (generates HTML on each request), can also use a **hybrid of the two**
* (finally after a lot of trial & error) learned how to use [getInitialProps](https://stackoverflow.com/questions/51316537/getinitialprops-never-gets-called-what-am-i-doing-wrong) 😅

### Obstacles/Gotchas?
* Routing blocked me for awhile.😠 Tried to figure out a way to incorrectly pass props(image, website link) through Link or route.push. Tried to then implement my own Redux methods using useReducer and useContext hooks, ran into a problem where state was not being dispatched properly, all I needed was to use getInitialProps but misread documentation and finally understood how to use it after reading: https://stackoverflow.com/questions/51316537/getinitialprops-never-gets-called-what-am-i-doing-wrong
* Solving/rendering the image & i-frame, sizing issues/overlays
* Was getting the image size before it was passed in as a prop (new Image() doesn't exist error), had to use onload 😅
* Odd bug where font-weight:500 doesn't apply on the buttons despite the inspector and computed showing it has that font-weight. Tried different ways of importing the font-weight (declaring it in scope/global, styling the button in global - no luck) There seems to be some [issues](https://github.com/google/fonts/issues/1137) with the actual font but unsure if it's related to my problem 
* Handling user input for 'http/https' the Pastel proxy requires the input to have http/https and I perform a check on it but it doesn't feel like the best UX. Preferably would like to be able for the user to input without http/https and prefix it. I hardcoded this by always prefixing http but removed it because i'm not sure if I should be altering the user's input without their knowledge
* Changing the functionality from show/hide to an opacity transition was a bit challenging. My solution seems a bit wacky (setting the img to relative positioning based off the height of the image inverted and adding a negative margin with that same height to remove the extra spacing from using relative positioning.) I'm curious if there is a better way to do this. Through a gpogle search, it seemed like the common approach is to use position relative to stack them but having it nested inside the card div to handle large images made my solution less eloquent
* Error handling isn't the most robust (catch-all error handling), aside from handling image types and trying to guide the user to images (default file upload is image), no other checks in place (maybe very large images would be a use case for more error handling?)
### Fun fact
* I used the homepage mockup with the project website to test how accurate it was 😅 (felt very inception'y)
