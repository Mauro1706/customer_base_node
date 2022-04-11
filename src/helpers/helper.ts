class Helper {
  sendResponse = function (res, statusCode, data) {
    res.status(statusCode).json({ result: data, msg : res.msg ?? null});
  };
}

export default new Helper();
