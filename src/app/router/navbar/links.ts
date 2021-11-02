export interface Link {
  text: string;
  icon: string;
  linkTo: string;
}

export const links: Link[] = [
  { text: "Dashboard", linkTo: "/", icon: "dashboard" },
  { text: "Accounts", linkTo: "/accounts", icon: "account_balance_wallet" },
  { text: "Transactions", linkTo: "/transactions", icon: "sync_alt" },
  { text: "More", linkTo: "/more", icon: "more_vert" },
];
