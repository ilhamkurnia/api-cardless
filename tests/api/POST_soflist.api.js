const chai = require("chai");
const chaiHttp = require("chai-http");
const data = require("../../data/data.json");
chai.use(chaiHttp);

class sof{
    constructor() {
        this.host = data.baseURL;
        this.header = data.header;
    }

    async postSOF(token, payload) {
        const response = await chai
            .request(this.host)
            .post("/myaccountservice/getsoflist")
            .set("Authorization", "Bearer " + token)
            .set("Content-Type", this.header)
            .set("Accept", this.header)
            .send(payload)
        return response
    }
}

module.exports = sof