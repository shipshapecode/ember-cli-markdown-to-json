ember-cli-markdown-to-json
==============================================================================

An addon that wraps broccoli-static-site-json, to generate json files from markdown.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


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

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
