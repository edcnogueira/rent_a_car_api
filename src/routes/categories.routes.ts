import { Router } from "express";

import { CategoriesRespository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();
const categoriesRespository = new CategoriesRespository();

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  const listCategories = categoriesRespository.list();

  res.status(200).json({ listCategories });
});

export { categoriesRoutes };
