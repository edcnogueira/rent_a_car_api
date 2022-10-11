import { CategoriesRespository } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const listCategoriesRepository = CategoriesRespository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(listCategoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export { listCategoriesController };
