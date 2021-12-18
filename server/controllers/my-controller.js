'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('oneShop')
      .service('myService')
      .getWelcomeMessage();
  },
};
