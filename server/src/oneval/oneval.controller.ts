import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OnevalService } from "./oneval.service";
import { OnevalControllerBase } from "./base/oneval.controller.base";

@swagger.ApiTags("onevals")
@common.Controller("onevals")
export class OnevalController extends OnevalControllerBase {
  constructor(
    protected readonly service: OnevalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
