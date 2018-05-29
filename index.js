'use strict';

const StaticSiteJson = require('broccoli-static-site-json');

module.exports = {
  name: 'ember-cli-markdown-to-json',
  treeForPublic() {
    this._super.treeForPublic && this._super.treeForPublic.apply(this, arguments);

    return new StaticSiteJson('blog', {
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
      }]
    });
  }
};
