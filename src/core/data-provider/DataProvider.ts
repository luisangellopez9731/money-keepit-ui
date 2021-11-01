export interface DataProvider<T> {
  getOne(id: string): T;
  getAll(): T[];
  create(data: T): string;
  update(id: string, data: Partial<T>): T;
  delete(id: string): boolean;
}
