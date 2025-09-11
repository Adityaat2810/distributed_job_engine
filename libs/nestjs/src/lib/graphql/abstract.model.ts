import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType({isAbstract: true})              // add to sub clasee which is extended
export class AbstractModel {
  @Field(()=> ID)  // unique identifier
  id: number;
}