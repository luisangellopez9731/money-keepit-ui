import { FC } from 'react'
import { Account } from 'api/types'
import { currencyFormat } from 'utils/format'
import { Card, CardContent, Typography } from '@mui/material'

export interface AccountItemProps extends Account {

}

export const AccountItem: FC<AccountItemProps> = ({ name, amount }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle2">{name}</Typography>
        <Typography variant="h2" style={{overflow: 'auto'}}>{currencyFormat(amount)}</Typography>
      </CardContent>
    </Card>
  )
}
