// import { getModelForClass } from '@typegoose/typegoose';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class TodoItem {
    @Field({ description: 'id' })
    public id?: number;

    @Field({ description: '内容' })
    public content!: string;
}

// export const TodoItemModal = getModelForClass(TodoItem);
