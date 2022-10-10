import { response, Router } from "express";

import { CategoriesRespository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRespository = new CategoriesRespository();

categoriesRoutes.post("/", (req, res) => {
  const {
    body: { name, description },
  } = req;

  const categoryAltreadyExists = categoriesRespository.findByName(name);

  if (categoryAltreadyExists) {
    return res.status(400).json({ message: "categoriy already exists" });
  }

  categoriesRespository.create({ name, description });

  return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
  const listCategories = categoriesRespository.list();

  res.status(200).json({ listCategories });
});

export { categoriesRoutes };
