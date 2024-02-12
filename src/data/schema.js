const fields = [
    { name: "model_id" },
    { name: "product_name" },
    { name: "advertising_names" },
    { name: "brand" },
    { name: "features" },
    { name: "firmware" },
    { name: "provisioning" },
    { name: "published" },
    { name: "testing_status" },
    { name: "testing_whitelist" },
    { name: "bluetooth_data_chunks" },
    { name: "bluetooth_mtu" }
];

const getFieldNames = () => {
    return fields.map(field => field.name);
}

export {
    fields,
    getFieldNames
}