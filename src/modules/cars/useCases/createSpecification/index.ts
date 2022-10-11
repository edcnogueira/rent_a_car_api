import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpacificationUseCase } from "./CreateSpacificationUseCase";
import { CreateSpecificationController } from "./CreateSpecificationController";

const specificationsRepository = SpecificationsRepository.getInstance();
const createSpacificationUseCase = new CreateSpacificationUseCase(
  specificationsRepository
);
const createSpecificationController = new CreateSpecificationController(
  createSpacificationUseCase
);

export { createSpecificationController };
