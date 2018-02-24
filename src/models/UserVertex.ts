import { Vertex, IVertexSchema } from 'gremlin-helper';

export interface IUser {
  name: string;
  password: string;
}

const userSchema: IVertexSchema<IUser> = {
  label: 'user',
  props: {
    name: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    }
  }
};

export const UserVertex = new Vertex(userSchema);
