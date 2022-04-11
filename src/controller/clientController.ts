import ClientService from "../services/clientService";
import * as HttpStatus from "http-status";

import Helper from "../helpers/helper";

class ClientController {
  get(req, res) {
    let filter = req.body;

    const page = filter.page ? parseInt(filter.page) : 1;
    const perPage = filter.perPage ? parseInt(filter.perPage) : 10;

    ClientService.get(page, perPage)
      .then((client) => Helper.sendResponse(res, HttpStatus.OK, client))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  getBy(req, res) {
    const status = req.params.status;
    let filter = req.body;
    
    const contractStatus = (status && status != "") ? status : null;
    const page = filter.page ? parseInt(filter.page) : 1;
    const perPage = filter.perPage ? parseInt(filter.perPage) : 10;

    ClientService.getBy(contractStatus, page, perPage)
      .then((client) => Helper.sendResponse(res, HttpStatus.OK, client))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  getById(req, res) {
    const _id = req.params.id;

    ClientService.getById(_id)
      .then((client) => Helper.sendResponse(res, HttpStatus.OK, client))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  create(req, res) {
    let client = req.body;

    client.contractNumber =  Math.random() * 10000;

    ClientService.create(client)
      .then((client) =>
        Helper.sendResponse(
          res,
          HttpStatus.OK,
          "Client registered successfully"
        )
      )
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  update(req, res) {
    const _id = req.params.id;
    let client = req.body;

    ClientService.update(_id, client)
      .then((client) =>
        Helper.sendResponse(
          res,
          HttpStatus.OK,
          `${client.name} successfully updated`
        )
      )
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  chargeGrateful(req, res) {
    const _id = req.params.id;
    const _action = req.params.action;

    const txtAction = parseInt(_action) != 1 ? 'Thankful payment' : 'Payment Charged';
    const queryText = parseInt(_action) != 1 ? 'Agradecer Pagamento' : 'Cobrar Pagamento';

    ClientService.chargeGrateful(_id, queryText)
      .then(() =>
        Helper.sendResponse(res, HttpStatus.OK, `${txtAction}`)
      )
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  disable(req, res) {
    const _id = req.params.id;

    ClientService.disable(_id)
      .then(() =>
        Helper.sendResponse(res, HttpStatus.OK, "Client successfully deleted")
      )
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  delete(req, res) {
    const _id = req.params.id;

    ClientService.delete(_id)
      .then(() =>
        Helper.sendResponse(res, HttpStatus.OK, "Client successfully deleted")
      )
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }
  
}

export default new ClientController();
