import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AyalaResolverBase } from "./base/ayala.resolver.base";
import { Ayala } from "./base/Ayala";
import { AyalaService } from "./ayala.service";

@graphql.Resolver(() => Ayala)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AyalaResolver extends AyalaResolverBase {
  constructor(
    protected readonly service: AyalaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
