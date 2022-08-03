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
import { CreateTestArgs } from "./CreateTestArgs";
import { UpdateTestArgs } from "./UpdateTestArgs";
import { DeleteTestArgs } from "./DeleteTestArgs";
import { TestFindManyArgs } from "./TestFindManyArgs";
import { TestFindUniqueArgs } from "./TestFindUniqueArgs";
import { Test } from "./Test";
import { Grade } from "../../grade/base/Grade";
import { User } from "../../user/base/User";
import { TestService } from "../test.service";

@graphql.Resolver(() => Test)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TestResolverBase {
  constructor(
    protected readonly service: TestService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Test",
    action: "read",
    possession: "any",
  })
  async _testsMeta(
    @graphql.Args() args: TestFindManyArgs
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
  @graphql.Query(() => [Test])
  @nestAccessControl.UseRoles({
    resource: "Test",
    action: "read",
    possession: "any",
  })
  async tests(@graphql.Args() args: TestFindManyArgs): Promise<Test[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Test, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Test",
    action: "read",
    possession: "own",
  })
  async test(@graphql.Args() args: TestFindUniqueArgs): Promise<Test | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Test)
  @nestAccessControl.UseRoles({
    resource: "Test",
    action: "create",
    possession: "any",
  })
  async createTest(@graphql.Args() args: CreateTestArgs): Promise<Test> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        grades: {
          connect: args.data.grades,
        },

        user: {
          connect: args.data.user,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Test)
  @nestAccessControl.UseRoles({
    resource: "Test",
    action: "update",
    possession: "any",
  })
  async updateTest(@graphql.Args() args: UpdateTestArgs): Promise<Test | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          grades: {
            connect: args.data.grades,
          },

          user: {
            connect: args.data.user,
          },
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

  @graphql.Mutation(() => Test)
  @nestAccessControl.UseRoles({
    resource: "Test",
    action: "delete",
    possession: "any",
  })
  async deleteTest(@graphql.Args() args: DeleteTestArgs): Promise<Test | null> {
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
  @graphql.ResolveField(() => Grade, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Grade",
    action: "read",
    possession: "any",
  })
  async grades(@graphql.Parent() parent: Test): Promise<Grade | null> {
    const result = await this.service.getGrades(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async user(@graphql.Parent() parent: Test): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}