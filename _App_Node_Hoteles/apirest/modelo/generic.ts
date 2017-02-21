import moongose from "mongoose";

import Schemas from "./schemas_hoteles";


class DAO<T>{

    save(objeto: Object, callback?: Function){
        let objEsquema = new T(objeto);

        objEsquema.save((error, documento) => {
            if (typeof callback != "undefined")
                callback(error, documento);
        });
    }

    remove(_id: any, callback?: Function) {
        T.remove({ "_id": _id }, (error, documento) => {
            if (typeof callback != "undefined")
                callback(error, documento);
        });
    };

    getAll(callback?: Function) {
        T.find({}, { "__v": 0 }, (error, documento) => {
            if (typeof callback != "undefined")
                callback(error, documento);
        });
    };

    get(_id: any, callback?: Function) {
        T.findById(_id, { "__v": 0 }, (error, documento) => {
            if (typeof callback != "undefined")
                callback(error, documento);
        });
    };


}