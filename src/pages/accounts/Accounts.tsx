import { TableView } from './table-view';
import { CreateView } from './create-view';
import { AutoCrud, useCrud } from 'components';

export const Accounts = () => {
  const { serviceRootPath } = useCrud();
  return (
    <AutoCrud
      TableView={TableView}
      CreateView={CreateView}
      EditView={() => <p>Edit</p>}
      serviceName={serviceRootPath}
    />
  );
};
