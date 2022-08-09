import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AyalaService } from "./ayala.service";
import { AyalaControllerBase } from "./base/ayala.controller.base";

@swagger.ApiTags("ayalas")
@common.Controller("ayalas")
export class AyalaController extends AyalaControllerBase {
  constructor(
    protected readonly service: AyalaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
