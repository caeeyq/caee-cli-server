'use strict';

const Controller = require('egg').Controller;
const {templateCollection} = require('../utils/tcbdatabase')

class TemplateController extends Controller {
  async getTemplate() {
    const {ctx} = this;
    const {data: testData} = await templateCollection.where({}).get()

    ctx.body = testData
  }
}

module.exports = TemplateController;
