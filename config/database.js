const mongoUser = process.env.MONGO_USER;
const mongoPassword = process.env.MONGO_PASSWORD;

module.exports = {
  // database: 'mongodb://localhost:27017/authapp',
  database: `mongodb://${mongoUser}:${mongoPassword}@ds113692.mlab.com:13692/authapp`,
  secret: 'm4%^$56$%ybrea234c34thtak34c45vin#$%^#%gastonishingawe-insp%^>"?.v54iringsecret'
}