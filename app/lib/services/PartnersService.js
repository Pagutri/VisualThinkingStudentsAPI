class PartnersService {
    static listOfPartners(partners) {
        return partners;
    }

    static emailsOfCertifiedPartners(partners) {
        return partners.filter((partner) => partner.haveCertification == true).map((partner) => partner.email);
    }

    static partnersAbove500(partners) {
        return partners.filter((partner) => partner.credits > 500);
    }
}

module.exports = PartnersService;