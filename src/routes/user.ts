import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import { PublicUserSchema } from "../modules/user/schema";
import { ResponseErrorSchema } from "../modules/common/schema";
import { prisma } from "../lib/prisma";

export const usersRoute = new OpenAPIHono();

const tags = ["users"];

// GET /users
usersRoute.openapi(
  createRoute({
    tags,
    summary: "Retrieve all public users",
    method: "get",
    path: "/",
    responses: {
      200: {
        description: "Successfully retrieved all users",
        content: {
          "application/json": { schema: z.array(PublicUserSchema) },
        },
      },
      400: {
        description: "Failed to retrieve users",
        content: {
          "application/json": { schema: ResponseErrorSchema },
        },
      },
    },
  }),
  async (c) => {
    try {
      const users = await prisma.user.findMany({
        omit: {
          email: true,
          phoneNumber: true,
        },
      });
      return c.json(users, 200);
    } catch (error) {
      console.error(error?.message || error);
      return c.json({ message: "Failed to retrieve users", error }, 400);
    }
  }
);

// GET /users/:username
usersRoute.openapi(
  createRoute({
    tags,
    summary: "Retrieve a user by username",
    method: "get",
    path: "/:username",
    request: {
      params: z.object({
        username: z.string(),
      }),
    },
    responses: {
      200: {
        description: "Successfully retrieved the user",
        content: {
          "application/json": { schema: PublicUserSchema },
        },
      },
      400: {
        description: "Failed to retrieve the user",
        content: {
          "application/json": { schema: ResponseErrorSchema },
        },
      },
      404: {
        description: "User not found",
      },
    },
  }),
  async (c) => {
    try {
      const { username } = c.req.valid("param");

      const user = await prisma.user.findUnique({
        where: { username },
      });

      if (!user) return c.notFound();

      return c.json(user, 200);
    } catch (error) {
      console.error(error?.message || error);
      return c.json(
        { message: "Failed to retrieve user by username", error },
        400
      );
    }
  }
);

// PATCH /users/:id
usersRoute.openapi(
  createRoute({
    tags,
    summary: "Update a user by ID",
    method: "patch",
    path: "/:id",
    request: {
      params: z.object({
        id: z.string(),
      }),
      body: {
        content: {
          "application/json": {
            schema: UserUpdateSchema,
          },
        },
      },
    },
    responses: {
      200: {
        description: "User updated successfully",
        content: {
          "application/json": {
            schema: PublicUserSchema,
          },
        },
      },
      400: {
        description: "Failed to update user",
        content: {
          "application/json": {
            schema: ResponseErrorSchema,
          },
        },
      },
      404: {
        description: "User not found",
      },
    },
  }),
  async (c) => {
    try {
      const { id } = c.req.valid("param");
      const data = c.req.valid("json");

      const existingUser = await prisma.user.findUnique({ where: { id } });
      if (!existingUser) return c.notFound();

      const updatedUser = await prisma.user.update({
        where: { id },
        data,
      });

      return c.json(updatedUser, 200);
    } catch (error) {
      console.error(error?.message || error);
      return c.json({ message: "Failed to update user", error }, 400);
    }
  }
);

// DELETE /users/:id
usersRoute.openapi(
  createRoute({
    tags,
    summary: "Delete a user by ID",
    method: "delete",
    path: "/:id",
    request: {
      params: z.object({
        id: z.string(),
      }),
    },
    responses: {
      200: {
        description: "User deleted successfully",
        content: {
          "application/json": {
            schema: z.object({ message: z.string() }),
          },
        },
      },
      400: {
        description: "Failed to delete user",
        content: {
          "application/json": {
            schema: ResponseErrorSchema,
          },
        },
      },
      404: {
        description: "User not found",
      },
    },
  }),
  async (c) => {
    try {
      const { id } = c.req.valid("param");

      const existingUser = await prisma.user.findUnique({ where: { id } });
      if (!existingUser) return c.notFound();

      await prisma.user.delete({ where: { id } });

      return c.json({ message: "User deleted successfully" }, 200);
    } catch (error) {
      console.error(error?.message || error);
      return c.json({ message: "Failed to delete user", error }, 400);
    }
  }
);
