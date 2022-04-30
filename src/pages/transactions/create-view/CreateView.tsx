import { Card } from 'components/card';
import { AutoForm, useAutoForm, CrudView, useCrudView } from 'components';
import { Link } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

export const CreateView = () => {
  const { path } = useCrudView();
  const form = useAutoForm({
    fields: {
      name: {
        type: 'text',
        value: '',
        label: 'Name',
        autoFocus: true,
      },
      description: {
        type: 'text',
        value: '',
        label: 'Description',
      },
      amount: {
        type: 'number',
        value: '0',
        label: 'Initial Amount',
      },
      type: {
        type: 'select',
        options: [
          { text: 'Income', value: 'income' },
          { text: 'Expense', value: 'expense' },
        ],
        value: 'income',
        label: 'Type',
      },
    },
  });

  const onSubmit = () => {};
  return (
    <CrudView title="Create Account">
      <AutoForm form={form} onSubmit={onSubmit} />
    </CrudView>
  );
};
