import { CategoriesRespository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const CategoriesRepository = CategoriesRespository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(CategoriesRepository);

const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController };
