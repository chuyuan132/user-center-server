import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class TestService {
  async getHello() {
    return prisma.user.findMany();
  }
}
