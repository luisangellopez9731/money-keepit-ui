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
import { useWorkspaceContext } from "components";

export const Navbar = () => {
  const history = useHistory();
  const [value, setValue] = useState(0);
  const { workspaceId } = useWorkspaceContext();

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
            history.push(newValue);
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            LinkComponent={Link}
            label="Dashboard"
            value={`/${workspaceId}`}
            icon={<Dashboard />}
          />
          <BottomNavigationAction
            LinkComponent={Link}
            label="Accounts"
            value={`/${workspaceId}/accounts`}
            icon={<AccountBalanceWallet />}
          />
          <BottomNavigationAction
            LinkComponent={Link}
            label="Transactions"
            value={`/${workspaceId}/transactions`}
            icon={<SyncAlt />}
          />
          <BottomNavigationAction
            LinkComponent={Link}
            label="More"
            value={`/${workspaceId}/settings`}
            icon={<MoreVert />}
          />
        </BottomNavigation>
      </Box>
    </Paper>
  );
};
