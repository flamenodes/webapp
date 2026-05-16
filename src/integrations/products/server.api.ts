import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { prisma } from "#/db";
import { auth } from "@/lib/auth";
import { z } from "zod";
import type { Prisma } from "@/generated/prisma/client";

const createServerSchema = z.object({
  orderItemId: z.string().optional().nullable(),
  name: z.string(),
  type: z.string(),
  status: z.string(),
  ip: z.string().optional().nullable(),
  port: z.number().int().optional().nullable(),
  expiresAt: z.date().optional().nullable(),
  resources: z.any().optional().nullable(),
  pterodactylData: z.any().optional().nullable(),
});

const updateServerSchema = z.object({
  id: z.string(),
  orderItemId: z.string().optional().nullable(),
  name: z.string().optional(),
  type: z.string().optional(),
  status: z.string().optional(),
  ip: z.string().optional().nullable(),
  port: z.number().int().optional().nullable(),
  expiresAt: z.date().optional().nullable(),
  resources: z.any().optional().nullable(),
  pterodactylData: z.any().optional().nullable(),
});

const getServerSchema = z.object({
  id: z.string(),
});

const deleteServerSchema = z.object({
  id: z.string(),
});

export const createServer = createServerFn({ method: 'POST' })
  .inputValidator((data) => createServerSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user) throw new Error('Unauthorized');

    return prisma.server.create({
      data: {
        ...data,
        userId: session.user.id,
      },
    });
  });

export const getServers = createServerFn({ method: 'GET' }).handler(async () => {
  const headers = getRequestHeaders();
  const session = await auth.api.getSession({ headers });
  if (!session?.user) throw new Error('Unauthorized');

  return prisma.server.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: 'desc' },
  });
});

export const getServer = createServerFn({ method: 'GET' })
  .inputValidator((data) => getServerSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user) throw new Error('Unauthorized');

    const server = await prisma.server.findUnique({
      where: { id: data.id, userId: session.user.id },
    });

    if (!server) throw new Error('Server not found');
    return server;
  });

export const updateServer = createServerFn({ method: 'POST' })
  .inputValidator((data) => updateServerSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user) throw new Error('Unauthorized');

    const { id, ...updateData } = data;
    return prisma.server.update({
      where: { id, userId: session.user.id },
      data: updateData,
    });
  });

export const deleteServer = createServerFn({ method: 'POST' })
  .inputValidator((data) => deleteServerSchema.parse(data))
  .handler(async ({ data }) => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user) throw new Error('Unauthorized');

    return prisma.server.delete({
      where: { id: data.id, userId: session.user.id },
    });
  });
