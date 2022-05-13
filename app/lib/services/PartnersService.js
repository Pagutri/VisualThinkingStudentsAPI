class PartnersService {
    static listOfPartners(partners) {
        return partners;
    }

    static emailsOfCertifiedPartners(partners) {
        return partners.filter((partner) => partner.haveCertification == true).map((partner) => partner.email);
    }
}

module.exports = PartnersService;