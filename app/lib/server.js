const PartnersController = require("./controllers/PartnersController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual Thinking Students API welcome!"});
});

app.listen(port, () => {
    console.log(`VisualThinkingStudents API in localhost:${port}`);
});

app.get("/partners", (request, response) => {
    const partners = PartnersController.getPartners();
    response.json(partners);
});
