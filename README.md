# App DevTools

A little demo of how you might implement custom App Developer Tools.

In this example, we're using custom DevTools to make it easy to enable/disable
["feature toggles"](https://en.wikipedia.org/wiki/Feature_toggle). Please note
that the concept of App DevTools has WAY more applicability than just feature
toggles.

Files to take a look at to learn how the feature toggles are implemented for
this app:

- `public/config.js`
- `public/index.html`
- `src/feature-toggles.js`
- `src/App.js`

Once you understand how the feature toggles work, then check out how the dev
tools are installed and how they allow you to interact with the feature toggles
by opening `src/index.js` and files in `src/dev-tools/`.
