const chai = require("chai");
const chaiHttp = require("chai-http");
const data = require("../../data/data.json");
chai.use(chaiHttp);

class inquiry {
    constructor() {
        this.host = data.baseURL;
        this.header = data.header;
    }

    async postInquiry(token, payload){
        const response = await chai
        .request(this.host)
        .post("/cardlesservice/inquiry")
        .set("Authorization", "Bearer " + token)
        .set("Content-Type", this.header)
        .set("Accept", this.header)
        .send(payload);
        return response;
    }
}
module.exports = inquiry