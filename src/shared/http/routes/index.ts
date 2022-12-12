import { AppError } from "@shared/errors/AppError";
import { Router } from "express";

const routes = Router();

routes.get("/", (request, response) => {
  throw new AppError("Acesso Negado", 403);
  return response.json({
    message: "Olá dev",
  });
});

export default routes;
