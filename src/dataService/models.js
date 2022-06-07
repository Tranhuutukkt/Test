import Joi from "joi";

let models = [
    { _id: "11", name: "ABC", brand: {id: "111", name: "AAA"}},
    { _id: "22", name: "ABF", brand: {id: "222", name: "BBB"}},
    { _id: "33", name: "ACD", brand: {id: "333", name: "CCC"} }
];

export function validateModel(model) {
    const schema = Joi.object({
        name: Joi.string().required(),
        brandId: Joi.objectId().required(),
    });
    return schema.validate(model);
}

export function getModels() {
    return models.filter(m => m);
}