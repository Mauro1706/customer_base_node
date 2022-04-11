import ContractStatus from "../repository/contractStatusRepository";

class ContractStatusService {

    get(){
        return ContractStatus.find({});
    }

    getById(_id){
        return ContractStatus.findById(_id);
    }

    create(contractStatus){
        return ContractStatus.create(contractStatus);
    }

    update(_id, contractStatus){
        return ContractStatus.findByIdAndUpdate(_id, contractStatus);
    }

    delete(_id){
        return ContractStatus.findByIdAndRemove(_id);
    }
}

export default new ContractStatusService();