const PartnersController = require("../../../app/lib/controllers/PartnersController.js");

describe("Tests for PartnersController", () => {
    test("1. Test for getPartners", () => {
        const partners = PartnersController.getPartners();
        expect(partners[0]).toStrictEqual({
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
        });
    });

    test("2. Test for getEmailsOfCertifiedPartners", () => {
        const partners = PartnersController.getEmailsOfCertifiedPartners();
        expect(partners[0]).toBe("Todd@visualpartnership.xyz");
        expect(partners.length).toBe(29);
    });

    test("3. Test for getPartnersAbove500", () => {
        const partners = PartnersController.getPartnersAbove500();
        expect(partners[26].name).toBe("Ware");
        expect(partners.length).toBe(27);
    });
});