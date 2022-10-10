import { response, Router } from "express";

import { CategoriesRespository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRespository = new CategoriesRespository();

categoriesRoutes.post("/", (req, res) => {
  const {
    body: { name, description },
  } = req;

  const createCategoryService = new CreateCategoryService(categoriesRespository);

  createCategoryService.execute({ name, description });

  return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
  const listCategories = categoriesRespository.list();

  res.status(200).json({ listCategories });
});

export { categoriesRoutes };
