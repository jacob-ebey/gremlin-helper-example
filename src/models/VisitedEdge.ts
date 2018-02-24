import { Edge, IEdgeSchema } from 'gremlin-helper';

const visitedSchema: IEdgeSchema = {
  label: 'visited'
};

export const VisitedEdge = new Edge(visitedSchema);
