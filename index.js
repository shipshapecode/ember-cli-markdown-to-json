'use strict';

const MergeTrees = require('broccoli-merge-trees');
const StaticSiteJson = require('broccoli-static-site-json');

module.exports = {
  name: require('./package').name,
  treeForPublic() {
    this._super.treeForPublic && this._super.treeForPublic.apply(this, arguments);

    if (this.app.options && this.app.options['ember-cli-markdown-to-json']) {
      const options = this.app.options['ember-cli-markdown-to-json'];

      const trees = options.map((option) => {
        const { attributes, collections, contentFolder, contentTypes, folder, references, type } = option;

        return new StaticSiteJson(folder, {
          attributes,
          collections,
          contentFolder: contentFolder || 'content',
          contentTypes: contentTypes || ['content', 'description', 'html'],
          references,
          type
        });
      });

      return MergeTrees(trees);
    }
  }
};
