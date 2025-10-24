import express from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();
const router = express.Router();

const createSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  dob: z.string().optional(),
  gender: z.string().optional(),
  photoUrl: z.string().optional()
});

router.get('/', async (req, res) => {
  const q = String(req.query.search || '');
  const page = Number(req.query.page || 1);
  const perPage = Math.min(Number(req.query.perPage || 20), 100);
  const where = q ? { OR: [ { firstName: { contains: q, mode: 'insensitive' } }, { lastName: { contains: q, mode: 'insensitive' } } ] } : {};
  const [items, total] = await Promise.all([
    prisma.student.findMany({ where, skip: (page-1)*perPage, take: perPage }),
    prisma.student.count({ where })
  ]);
  res.json({ data: items, total });
});

router.post('/', async (req, res) => {
  const parsed = createSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.errors });
  const s = await prisma.student.create({ data: parsed.data as any });
  res.json(s);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const s = await prisma.student.findUnique({ where: { id } });
  if (!s) return res.status(404).json({ error: 'Not found' });
  res.json(s);
});

export default router;
