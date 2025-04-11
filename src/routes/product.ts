import { createRoute, OpenAPIHono } from "@hono/zod-openapi";
import { ProductsSchema } from "@/modules/product/schema";
import { prisma } from "@/lib/prisma";

const app = new OpenAPIHono();

export const productRoutes = app;

const getProductsRoute = createRoute({
  method: "get",
  path: "/products",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: ProductsSchema,
        },
      },
      description: "Get all products",
    },
  },
});

app.openapi(getProductsRoute, async (c) => {
  const products = await prisma.product.findMany();

  return c.json(products);
});
