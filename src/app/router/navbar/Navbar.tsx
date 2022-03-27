import {
  AccountBalanceWallet,
  Dashboard,
  MoreVert,
  SyncAlt,
} from "@mui/icons-material";
import { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@mui/material";
import { Link, useHistory } from "react-router-dom";

export const Navbar = () => {
  const history = useHistory();
  const [value, setValue] = useState(0);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <Box>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            console.log(newValue);
            history.push(newValue);
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            LinkComponent={Link}
            label="Dashboard"
            value="/"
            icon={<Dashboard />}
          />
          <BottomNavigationAction
            LinkComponent={Link}
            label="Accounts"
            value="/accounts"
            icon={<AccountBalanceWallet />}
          />
          <BottomNavigationAction
            LinkComponent={Link}
            label="Transactions"
            value="transactions"
            icon={<SyncAlt />}
          />
          <BottomNavigationAction
            LinkComponent={Link}
            label="More"
            value="/settings"
            icon={<MoreVert />}
          />
        </BottomNavigation>
      </Box>
    </Paper>
  );
};
