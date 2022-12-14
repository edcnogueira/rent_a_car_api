import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IResquest {
  name: string;
  description: string;
}

class CreateSpacificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}
  execute({ name, description }: IResquest): void {
    const specificationAlreadyExists = this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists");
    }
    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpacificationUseCase };
