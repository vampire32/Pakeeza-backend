'use strict';

/**
 * built-in-kitchen service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::built-in-kitchen.built-in-kitchen');
