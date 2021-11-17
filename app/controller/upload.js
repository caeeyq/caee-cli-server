'use strict';

// const fs = require('fs');
const Controller = require('egg').Controller;
const { app } = require('../utils/tcb');

class UploadController extends Controller {
  async uploadToTcb() {
    const { ctx } = this;
    const stream = await ctx.getFileStream();
    const filename = `${new Date().getTime()}-${stream.filename}`;

    const { fileID } = await app.uploadFile({
      cloudPath: `upload-play/${filename}`,
      fileContent: stream.read(),
    });

    const { fileList } = await app.getTempFileURL({
      fileList: [fileID],
    });
    const { fileid, download_url } = fileList[0];

    ctx.body = {
      fileid,
      download_url,
    };
  }
}

module.exports = UploadController;
