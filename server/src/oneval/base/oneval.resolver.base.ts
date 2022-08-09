/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateOnevalArgs } from "./CreateOnevalArgs";
import { UpdateOnevalArgs } from "./UpdateOnevalArgs";
import { DeleteOnevalArgs } from "./DeleteOnevalArgs";
import { OnevalFindManyArgs } from "./OnevalFindManyArgs";
import { OnevalFindUniqueArgs } from "./OnevalFindUniqueArgs";
import { Oneval } from "./Oneval";
import { Test } from "../../test/base/Test";
import { OnevalService } from "../oneval.service";

@graphql.Resolver(() => Oneval)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class OnevalResolverBase {
  constructor(
    protected readonly service: OnevalService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Oneval",
    action: "read",
    possession: "any",
  })
  async _onevalsMeta(
    @graphql.Args() args: OnevalFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Oneval])
  @nestAccessControl.UseRoles({
    resource: "Oneval",
    action: "read",
    possession: "any",
  })
  async onevals(@graphql.Args() args: OnevalFindManyArgs): Promise<Oneval[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Oneval, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Oneval",
    action: "read",
    possession: "own",
  })
  async oneval(
    @graphql.Args() args: OnevalFindUniqueArgs
  ): Promise<Oneval | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Oneval)
  @nestAccessControl.UseRoles({
    resource: "Oneval",
    action: "create",
    possession: "any",
  })
  async createOneval(@graphql.Args() args: CreateOnevalArgs): Promise<Oneval> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        test: args.data.test
          ? {
              connect: args.data.test,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Oneval)
  @nestAccessControl.UseRoles({
    resource: "Oneval",
    action: "update",
    possession: "any",
  })
  async updateOneval(
    @graphql.Args() args: UpdateOnevalArgs
  ): Promise<Oneval | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          test: args.data.test
            ? {
                connect: args.data.test,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Oneval)
  @nestAccessControl.UseRoles({
    resource: "Oneval",
    action: "delete",
    possession: "any",
  })
  async deleteOneval(
    @graphql.Args() args: DeleteOnevalArgs
  ): Promise<Oneval | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Test, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Test",
    action: "read",
    possession: "any",
  })
  async test(@graphql.Parent() parent: Oneval): Promise<Test | null> {
    const result = await this.service.getTest(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}