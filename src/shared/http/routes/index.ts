import { Router } from "express";
import { rolesRoutes } from "@roles/http/routes/roles.routes";

const routes = Router();

routes.use("/roles", rolesRoutes);

routes.get("/", (request, response) => {
  return response.json({
    message: "Olá dev",
  });
});

export default routes;
