module.exports = {
    user: process.env.DATABASE_USERNAME || "",
    password: process.env.DATABASE_PASSWORD || "postgres",
    host: process.env.DATABASE_HOST || "",
    database: process.env.DATABASE_NAME || "",
    port: process.env.DATABASE_PORT || 5432, 
};