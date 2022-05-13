const Reader = require("../../../app/lib/utils/Reader.js");
const PartnersService = require("../../../app/lib/services/PartnersService.js");

describe("Tests for PartnersService", () => {
    test("1. Get the list of partners with all their properties", () => {
        const partners = Reader.readJsonFile("test/lib/utils/Reader_testfile.json");
        const listOfPartners = PartnersService.listOfPartners(partners);
        expect(listOfPartners).toStrictEqual([
            {
                "id": "6264d5d89f1df827eb84bb23",
                "name": "Warren",
                "email": "Todd@visualpartnership.xyz",
                "credits": 508,
                "enrollments": [
                    "Visual Thinking Intermedio",
                    "Visual Thinking Avanzado"
                ],
                "previousCourses": 1,
                "haveCertification": true
            },
            {
                "id": "6264d5d85cf81c496446b67f",
                "name": "Lucinda",
                "email": "Sexton@visualpartnership.xyz",
                "credits": 677,
                "enrollments": [
                    "Visual Thinking Avanzado"
                ],
                "previousCourses": 6,
                "haveCertification": true
            }
        ]);
    });

    test("2. Get the list of emails of partners with certification", () => {
        const partners = Reader.readJsonFile("test/lib/utils/Reader_testfile.json");
        const partnersEmails = PartnersService.emailsOfCertifiedPartners(partners);
        expect(partnersEmails).toStrictEqual(["Todd@visualpartnership.xyz", "Sexton@visualpartnership.xyz"]);
    });
});