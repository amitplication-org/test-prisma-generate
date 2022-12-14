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
import { CreateGradeArgs } from "./CreateGradeArgs";
import { UpdateGradeArgs } from "./UpdateGradeArgs";
import { DeleteGradeArgs } from "./DeleteGradeArgs";
import { GradeFindManyArgs } from "./GradeFindManyArgs";
import { GradeFindUniqueArgs } from "./GradeFindUniqueArgs";
import { Grade } from "./Grade";
import { Test } from "../../test/base/Test";
import { GradeService } from "../grade.service";

@graphql.Resolver(() => Grade)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class GradeResolverBase {
  constructor(
    protected readonly service: GradeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Grade",
    action: "read",
    possession: "any",
  })
  async _gradesMeta(
    @graphql.Args() args: GradeFindManyArgs
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
  @graphql.Query(() => [Grade])
  @nestAccessControl.UseRoles({
    resource: "Grade",
    action: "read",
    possession: "any",
  })
  async grades(@graphql.Args() args: GradeFindManyArgs): Promise<Grade[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Grade, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Grade",
    action: "read",
    possession: "own",
  })
  async grade(
    @graphql.Args() args: GradeFindUniqueArgs
  ): Promise<Grade | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Grade)
  @nestAccessControl.UseRoles({
    resource: "Grade",
    action: "create",
    possession: "any",
  })
  async createGrade(@graphql.Args() args: CreateGradeArgs): Promise<Grade> {
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
  @graphql.Mutation(() => Grade)
  @nestAccessControl.UseRoles({
    resource: "Grade",
    action: "update",
    possession: "any",
  })
  async updateGrade(
    @graphql.Args() args: UpdateGradeArgs
  ): Promise<Grade | null> {
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

  @graphql.Mutation(() => Grade)
  @nestAccessControl.UseRoles({
    resource: "Grade",
    action: "delete",
    possession: "any",
  })
  async deleteGrade(
    @graphql.Args() args: DeleteGradeArgs
  ): Promise<Grade | null> {
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
  async test(@graphql.Parent() parent: Grade): Promise<Test | null> {
    const result = await this.service.getTest(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
