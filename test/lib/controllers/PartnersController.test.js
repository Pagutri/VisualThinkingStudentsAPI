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
});