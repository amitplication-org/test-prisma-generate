import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { AyalaServiceBase } from "./base/ayala.service.base";

@Injectable()
export class AyalaService extends AyalaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
