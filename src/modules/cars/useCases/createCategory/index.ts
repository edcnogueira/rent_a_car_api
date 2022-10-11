import { CategoriesRespository } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const CategoriesRepository = new CategoriesRespository();

const createCategoryUseCase = new CreateCategoryUseCase(CategoriesRepository);

const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController };