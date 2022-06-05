export interface CrudDataProviderMethods<T extends { id: any }> {
  getAll(): Promise<T[]>;
  delete(id: T['id']): Boolean;
  get(id: T['id']): Promise<T>;
  create(data: Omit<T, 'id'>): Promise<T>;
  update(id: T['id'], data: Omit<T, 'id'>): Promise<T>;
}

export class CrudDataProvider<Id, T extends { id: Id }> implements CrudDataProviderMethods<T> {
  getAll(): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
  delete(id: T["id"]): Boolean {
    throw new Error("Method not implemented.");
  }
  get(id: T["id"]): Promise<T> {
    throw new Error("Method not implemented.");
  }
  create(data: Omit<T, "id">): Promise<T> {
    throw new Error("Method not implemented.");
  }
  update(id: T["id"], data: Omit<T, "id">): Promise<T> {
    throw new Error("Method not implemented.");
  }

}