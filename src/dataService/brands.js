import Joi from "joi";

let brands = [
    {id: "111", name: "AAA"},
    {id: "222", name: "BBB"},
    {id: "333", name: "CCC"}
];

function validateBrand(brand) {
    const schema = Joi.object({name: Joi.string().required()});
    return schema.validate(brand);
}

export function getBrands() {
    return brands.filter(b => b);
}