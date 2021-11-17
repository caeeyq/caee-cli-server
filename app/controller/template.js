'use strict';

const Controller = require('egg').Controller;
const { collection } = require('../utils/tcb');

class TemplateController extends Controller {
  async getTemplate() {
    const { ctx } = this;
    const { data: testData } = await collection.templateCollection.where({}).get();

    ctx.body = testData;
  }
}

module.exports = TemplateController;
