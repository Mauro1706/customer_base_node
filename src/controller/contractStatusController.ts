import ContractStatusService from "../services/contractStatusService";
import * as HttpStatus from "http-status";

import Helper from "../helpers/helper";

class ContractStatusController {
  get(req, res) {
    ContractStatusService.get()
      .then((contractStatus) => Helper.sendResponse(res, HttpStatus.OK, contractStatus, ""))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }
  getById(req, res) {
    const _id = req.params.id;

    ContractStatusService.getById(_id)
      .then((contractStatus) => Helper.sendResponse(res, HttpStatus.OK, contractStatus, ""))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }
  create(req, res) {
    let client = req.body;
    const utils = { "url": req.protocol + '://' + req.get('host') + "/api/v1/contract/status" };

    ContractStatusService.create(client)
      .then((contractStatus) =>
        Helper.sendResponse(
          res,
          HttpStatus.CREATED,
          "",
          "Contract Status registered successfully",
          utils
        )
      )
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }
  update(req, res) {
    const _id = req.params.id;
    let client = req.body;

    ContractStatusService.update(_id, client)
      .then((contractStatus) =>
        Helper.sendResponse(
          res,
          HttpStatus.OK,
          "",
          `${contractStatus.value} successfully updated`
        )
      )
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }
  delete(req, res) {
    const _id = req.params.id;

    ContractStatusService.delete(_id)
      .then(() =>
        Helper.sendResponse(res, HttpStatus.OK, "", "Contract Status successfully deleted")
      )
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }
}

export default new ContractStatusController();
