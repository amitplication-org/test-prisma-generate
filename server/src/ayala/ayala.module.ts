import { Module } from "@nestjs/common";
import { AyalaModuleBase } from "./base/ayala.module.base";
import { AyalaService } from "./ayala.service";
import { AyalaController } from "./ayala.controller";
import { AyalaResolver } from "./ayala.resolver";

@Module({
  imports: [AyalaModuleBase],
  controllers: [AyalaController],
  providers: [AyalaService, AyalaResolver],
  exports: [AyalaService],
})
export class AyalaModule {}
