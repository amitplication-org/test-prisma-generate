import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { OnevalResolverBase } from "./base/oneval.resolver.base";
import { Oneval } from "./base/Oneval";
import { OnevalService } from "./oneval.service";

@graphql.Resolver(() => Oneval)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class OnevalResolver extends OnevalResolverBase {
  constructor(
    protected readonly service: OnevalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
