import { Module } from "@nestjs/common";
import { OnevalModuleBase } from "./base/oneval.module.base";
import { OnevalService } from "./oneval.service";
import { OnevalController } from "./oneval.controller";
import { OnevalResolver } from "./oneval.resolver";

@Module({
  imports: [OnevalModuleBase],
  controllers: [OnevalController],
  providers: [OnevalService, OnevalResolver],
  exports: [OnevalService],
})
export class OnevalModule {}
