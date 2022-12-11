import { Router } from "express";

const routes = Router();

routes.get("/", (request, response) => {
  response.json({
    message: "Olá dev",
  });
});

export default routes;
