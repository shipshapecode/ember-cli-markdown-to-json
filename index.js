'use strict';

const StaticSiteJson = require('broccoli-static-site-json');

module.exports = {
  name: 'ember-cli-markdown-to-json',
  treeForPublic() {
    this._super.treeForPublic && this._super.treeForPublic.apply(this, arguments);

    if (this.app.options && this.app.options['ember-cli-markdown-to-json']) {
      const { attributes, collections, folder } = this.app.options['ember-cli-markdown-to-json'];

      return new StaticSiteJson(folder, {
        attributes,
        collections
      });
    }
  }
};
