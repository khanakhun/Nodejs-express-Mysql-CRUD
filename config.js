const env = process.env;

const config = {
  db: { 
    host: env.DB_HOST || 'freedb.tech',
    user: env.DB_USER || 'freedbtech_khanakhun',
    password: env.DB_PASSWORD || 'root',
    database: env.DB_NAME || 'freedbtech_drStoneNodejsDB',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};


module.exports = config;