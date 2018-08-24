ember-cli-markdown-to-json
==============================================================================

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
'ember-cli-markdown-to-json': [
  {
    attributes: [
      'categories',
      'date',
      'slug',
      'title'
    ],
    collections: [{
      src: 'blog/posts',
      output: 'posts.json'
    }],
    contentFolder: 'post',
    contentTypes: ['description', 'html'],
    folder: 'blog/posts',
    references: ['author'],
    type: 'post'
  },
  { 
    attributes: [
      'name',
      'image',
      'coverImage',
      'coverMeta',
      'bio',
      'website',
      'twitter',
      'facebook',
      'location'
    ],
    contentFolder: 'author',
    collections: [{ 
      src: 'blog/authors',
      output: 'authors.json' 
    }],
    folder: 'blog/authors',
    type: 'author'
  }
]
```

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
