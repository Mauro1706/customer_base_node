import ClientRepository from "../repository/clientRepository";

class ClientService {

    get(page, perPage){
        return ClientRepository.find({'active': true})
            .skip((page -1) * perPage)
            .limit(perPage);
    }

    getBy(contractStatus, page, perPage){
        if (!contractStatus) {
            return ClientRepository.find({'active': true})
                .skip((page -1) * perPage)
                .limit(perPage);
        }
        return ClientRepository.find({ 'active': true, 'contractStatus' : new RegExp('.*' + contractStatus + '*.', 'i') })
            .skip((page -1) * perPage)
            .limit(perPage);
    }

    getById(_id){
        return ClientRepository.findById(_id);
    }

    create(client){
        return ClientRepository.create(client);
    }

    update(_id, client){
        return ClientRepository.findByIdAndUpdate(_id, client);
    }

    chargeGrateful(_id, action){
        return ClientRepository.findByIdAndUpdate(_id, { "action" : action });
    }

    disable(_id){
        return ClientRepository.findByIdAndUpdate(_id, { "active" : false });
    }

    delete(_id){
        return ClientRepository.findByIdAndRemove(_id);
    }
}

export default new ClientService();