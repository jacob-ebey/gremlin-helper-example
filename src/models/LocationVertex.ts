import { Vertex, IVertexSchema } from 'gremlin-helper';

export interface ILocation {
  name: string;
  latitude: number;
  longitude: number;
}

const locationSchema: IVertexSchema<ILocation> = {
  label: 'location',
  props: {
    name: {
      type: 'string',
      required: true
    },
    latitude: {
      type: 'number',
      required: true
    },
    longitude: {
      type: 'number',
      required: true
    }
  }
}

export const LocationVertex = new Vertex(locationSchema);
