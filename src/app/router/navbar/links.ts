import {
  MoreVert,
  SyncAlt,
  AccountBalanceWallet,
  Dashboard,
} from "@mui/icons-material";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface Link {
  text: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  linkTo: string;
}

export const links: Link[] = [
  { text: "Dashboard", linkTo: "/", icon: Dashboard },
  { text: "Accounts", linkTo: "/accounts", icon: AccountBalanceWallet },
  { text: "Transactions", linkTo: "/transactions", icon: SyncAlt },
  { text: "More", linkTo: "/more", icon: MoreVert },
];
