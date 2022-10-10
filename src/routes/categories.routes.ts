import { response, Router } from "express";

import { CategoriesRespository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRespository = new CategoriesRespository();

categoriesRoutes.post("/", (req, res) => {
  const {
    body: { name, description },
  } = req;

  categoriesRespository.create({ name, description });

  return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
  const listCategories = categoriesRespository.list();

  res.status(200).json({ listCategories });
});

export { categoriesRoutes };
