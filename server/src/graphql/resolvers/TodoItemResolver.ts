import { Resolver, Query, Mutation, Arg, InputType, Field } from 'type-graphql';
import { TodoItem } from '../entities/TodoItem';
import db, { insertItem, deleteItem, updateItem } from '../../db';
@InputType()
export class ItemInput {
    @Field({ description: '内容' })
    public content!: string;
}

@InputType()
export class ItemDelete {
    @Field({ description: 'id' })
    public id!: number;
}

@InputType()
export class ItemUpdate {
    @Field({ description: 'id' })
    public id!: number;
    @Field({ description: '内容' })
    public content!: string;
}

@Resolver(TodoItem)
export class TodoResolver {
    @Query(() => [TodoItem], { nullable: true, description: '查询todo列表' })
    async queryTodoItemList() {
        return db;
    }

    @Mutation(() => TodoItem)
    async saveTodoItem(@Arg('data') item: ItemInput) {
        return insertItem(item);
    }

    @Mutation(() => TodoItem)
    async updateTodoItem(@Arg('data') item: ItemUpdate) {
        return updateItem(item);
    }

    @Mutation(() => TodoItem)
    async deleteTodoItem(@Arg('data') item: ItemDelete) {
        return deleteItem(item);
    }
}
