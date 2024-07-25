'use strict';

/**
 * volunteering service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::volunteering.volunteering');
