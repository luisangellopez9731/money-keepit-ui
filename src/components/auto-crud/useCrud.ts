import { useCrudView } from './crud-view';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const useCrud = <T extends { id: any }, CreateDTO, UpdateDTO>() => {
  const { path } = useCrudView()
  const pathname = path.replace(/^\//, '');
  const getAll = async () => {
    const res = await fetch(`${BACKEND_URL}${pathname}`)
    const responseData = await res.json()
    if (!res.ok) {
      throw new Error(responseData?.error)
    }
    return responseData as T[];
  };

  const get = async (id: T['id']) => {
    const res = await (
      await fetch(`${BACKEND_URL}${pathname}/${id}`)
    )

    const responseData = await res.json()
    if (!res.ok) {
      throw new Error(responseData?.error)
    }
    return responseData as T;
  };

  const delete_ = async (id: T['id']) => {
    const res = await (
      await fetch(`${BACKEND_URL}${pathname}/${id}`, { method: 'DELETE' })
    )
    const responseData = await res.json()
    if (!res.ok) {
      return false;
    }
    return true;
  };

  const create = async (data: CreateDTO) => {
    const res = await (
      await fetch(`${BACKEND_URL}${pathname}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    )
    const responseData = await res.json()
    if (!res.ok) {
      throw new Error(responseData?.error)
    }
    return responseData as T;
  };

  const update = async (id: T['id'], data: UpdateDTO) => {
    const res = await (
      await fetch(`${BACKEND_URL}${pathname}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    )
    const responseData = await res.json()
    if (!res.ok) {
      throw new Error(responseData?.error)
    }
    return responseData as T;
  };

  const dataProvider = {
    get,
    getAll,
    create,
    update,
    delete: delete_,
  };

  const reactQueryIds = {
    getAll: `getAll_${pathname}`,
    get: `get_${pathname}`,
    create: `create_${pathname}`,
    update: `update_${pathname}`,
    delete: `delete_${pathname}`,
  };

  return { serviceRootPath: pathname, dataProvider, reactQueryIds };
};
