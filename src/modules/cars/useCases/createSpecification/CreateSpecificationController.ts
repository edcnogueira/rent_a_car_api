import { Request, Response } from "express";
import { CreateSpacificationUseCase } from "./CreateSpacificationUseCase";

class CreateSpecificationController {
  constructor(private createSpacificationUseCase: CreateSpacificationUseCase) {}
  handle(req: Request, res: Response): Response {
    const {
      body: { name, description },
    } = req;

    this.createSpacificationUseCase.execute({ name, description });

    return res.status(201).send();
  }
}

export { CreateSpecificationController };
