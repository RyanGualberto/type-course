import { Request, Response, Router } from "express";
import { v4 as uuidv4 } from "uuid";

const rolesRoutes = Router();

const roles = [];

rolesRoutes.post("/", (request: Request, response: Response) => {
  const { name } = request.body;

  const role = {
    id: uuidv4(),
    name,
    created_at: new Date(),
  };

  roles.push(role);

  return response.status(201).json(role);
});

export { rolesRoutes };
