import { AbstractModel } from '@jobber/nestjs';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User extends AbstractModel {
  // id coming form abstract class
  // we don't wnat passward to be queryable
  @Field()
  email: string; // email can be queryed
}
