import { RolesRepository } from "@roles/repositories/RolesRepository";
import { Request, Response, Router } from "express";

const rolesRoutes = Router();
const rolesRepository = new RolesRepository();

rolesRoutes.post("/", (request: Request, response: Response) => {
  const { name } = request.body;
  const roleAlreadyExists = rolesRepository.findByName(name);
  if (roleAlreadyExists) {
    return response.status(400).json({
      error: "Role already exists",
    });
  }
  const role = rolesRepository.create({ name });
  return response.status(201).json(role);
});

rolesRoutes.get("/", (request: Request, response: Response) => {
  const roles = rolesRepository.findAll();
  return response.status(200).json(roles);
});

export { rolesRoutes };
