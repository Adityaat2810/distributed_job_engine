import { Field, InputType } from '@nestjs/graphql'
import { IsEmail, IsStrongPassword } from 'class-validator';

/**
 * graphql do validtaion with this input type
 */
@InputType()
export class CreateUserInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsStrongPassword()
  password: string;
}