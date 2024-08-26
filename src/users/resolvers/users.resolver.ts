import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CreateUserInput } from '../dto/create-user.input.dto';
import { LoginUserInput } from '../dto/login-user.input.dto';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';


@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.usersService.findOne(id);
  }

  @Query(() => User, { name: 'validateUser' })
  validateUser(@Args('input') input: LoginUserInput) {
    const output = this.usersService.validateUser(input);
    return output
  }

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    const output = this.usersService.create(createUserInput);
    return output
  }

}
