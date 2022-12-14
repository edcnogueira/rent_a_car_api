import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IResquest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRespository: ICategoriesRepository) {}

  execute({ name, description }: IResquest): void {
    const categoryAltreadyExists = this.categoriesRespository.findByName(name);

    if (categoryAltreadyExists) {
      throw new Error("categoriy already exists");
    }

    this.categoriesRespository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
