import { FC } from "react";
import {
  Paper,
  Box,
  Typography,
  AppBar,
  Button,
  IconButton,
  Toolbar,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

export interface CrudViewProps {
  title: React.ReactNode;
  noPadding?: boolean;
  noPaddingHeader?: boolean;
}

export const CrudView: FC<CrudViewProps> = ({
  title,
  children,
  noPadding,
  noPaddingHeader,
}) => {
  return (
    <Paper style={{ height: "100%" }}>
      {/* <Box mb={2} pt={2} pb={2}>
        <Typography variant="h5">{title}</Typography>
      </Box> */}

      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>

      <Box ml={2} mr={2}>{children}</Box>
    </Paper>
  );
};
