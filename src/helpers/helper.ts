class Helper {
  sendResponse = function (res, statusCode, data, msg = "", utils = {}) {
    res.status(statusCode).json({ result: data, msg : msg, utils: utils });
  };
}

export default new Helper();
