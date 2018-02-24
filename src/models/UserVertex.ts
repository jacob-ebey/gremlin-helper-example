import { Ops, Vertex, IVertexSchema } from 'gremlin-helper';

export interface IUser {
  name: string;
  password: string;
  phone?: string;
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
    },
    phone: 'string'
  }
};

const UserVertex = new Vertex(userSchema);

UserVertex.ops = {
  phone: Ops.merge(
    Ops.validatePhone,
    Ops.formatPhone
  )
};

export { UserVertex }
