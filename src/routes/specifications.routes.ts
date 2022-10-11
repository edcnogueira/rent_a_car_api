import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { CreateSpacificationService } from "../modules/cars/services/CreateSpacificationService";

const specificationRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationRoutes.post("/", (req, res) => {
  const {
    body: { name, description },
  } = req;

  const createSpacificationService = new CreateSpacificationService(
    specificationsRepository
  );

  createSpacificationService.execute({ name, description });

  return res.status(201).send();
});

export { specificationRoutes };
