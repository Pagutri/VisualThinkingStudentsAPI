const Reader = require("../utils/Reader.js");
const PartnersService = require("../services/PartnersService.js");

class PartnersController {
    static getPartners() {
        const partners = Reader.readJsonFile("visualpartners.json");
        return PartnersService.listOfPartners(partners);
    }

    static getEmailsOfCertifiedPartners() {
        const partners = Reader.readJsonFile("visualpartners.json");
        return PartnersService.emailsOfCertifiedPartners(partners);
    }
}

module.exports = PartnersController;