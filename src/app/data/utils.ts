import {IEntity} from '@app-configs/types';

export function getRelationship<T extends IEntity>(id: string, relationships: T[]): T {
  const index = relationships.findIndex((entity) => entity.id === id);
  return index > -1 ? relationships[index] as T : null;
}
