const MongoConnect = require('../lib/mongo');

class ApiKeyService {
  constructor() {
    this.mongodb = new MongoConnect();
    this.collection = 'api-keys';
  }
  async getApiKey({ token }) {
    const [apiKey] = await this.mongodb.getAll(this.collection, { token });
    return apiKey;
  }
}

module.exports = ApiKeyService;
