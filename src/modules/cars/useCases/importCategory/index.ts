import { CategoriesRespository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRespository = CategoriesRespository.getInstance();
const importCategoryUsecase = new ImportCategoryUseCase(categoriesRespository);

const importCategorycontroller = new ImportCategoryController(importCategoryUsecase);

export { importCategorycontroller };
