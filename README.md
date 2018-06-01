ember-cli-markdown-to-json
==============================================================================

[![Greenkeeper badge](https://badges.greenkeeper.io/shipshapecode/ember-cli-markdown-to-json.svg)](https://greenkeeper.io/)

An addon that wraps broccoli-static-site-json, to generate json files from markdown.

Installation
------------------------------------------------------------------------------

```
ember install ember-cli-markdown-to-json
```


Usage
------------------------------------------------------------------------------

```javascript
// ember-cli-build.js
'ember-cli-markdown-to-json': {
  attributes: [
    'author',
    'authorId',
    'categories',
    'date',
    'slug',
    'title'
  ],
  collections: [{
    src: 'blog',
    output: 'blog.json'
  }],
  contentTypes: ['content', 'description', 'html'],
  folder: 'blog'
}
```

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
