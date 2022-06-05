import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import {
  TableViewProps,
  CrudView,
  useCrudView,
  useCrud,
} from 'components/auto-crud';
import { AccountItem } from './AccountItem';
import { Account } from 'api/types';
import { Add } from '@mui/icons-material'

export const TableView: FC<TableViewProps> = ({ }) => {
  const { dataProvider, reactQueryIds } = useCrud<Account, any, any>();
  const { path } = useCrudView();
  const { data } = useQuery(reactQueryIds.getAll, dataProvider.getAll);
  return (
    <CrudView title="Accounts">
      <CrudView.RightButton>
        <Link to={`${path}/create`}><Add /></Link>
      </CrudView.RightButton>
      {data?.map((account) => <AccountItem key={account.id} {...account} />)}
    </CrudView>
  );
};
