import express from "express";
import sweggerUi from "swagger-ui-express";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationRoutes } from "./routes/specifications.routes";

import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", sweggerUi.serve, sweggerUi.setup(swaggerFile));

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationRoutes);

app.listen(3333, () => console.log("Server running in port 3333"));
