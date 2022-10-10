import { CategoriesRespository } from "../repositories/CategoriesRepository";

interface IResquest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRespository: CategoriesRespository) {}

  execute({ name, description }: IResquest): void {
    const categoryAltreadyExists = this.categoriesRespository.findByName(name);

    if (categoryAltreadyExists) {
      throw new Error("categoriy already exists");
    }

    this.categoriesRespository.create({ name, description });
  }
}

export { CreateCategoryService };
