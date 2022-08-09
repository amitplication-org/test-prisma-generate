import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { OnevalServiceBase } from "./base/oneval.service.base";

@Injectable()
export class OnevalService extends OnevalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
