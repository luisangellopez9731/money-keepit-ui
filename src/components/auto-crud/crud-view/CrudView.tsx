import { FC, Children, useState, useEffect } from "react";
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
import { fchownSync } from "fs";
import { useAutoCrudContext } from "../AutoCrud";
import { useRouteMatch } from "react-router";

export interface CrudViewProps {
  title: React.ReactNode;
  noPadding?: boolean;
  noPaddingHeader?: boolean;
}

export interface RightButtonProps {}

export interface CrudViewSubComponents {
  RightButton: FC<RightButtonProps>;
  LeftButton: FC<RightButtonProps>;
}

type ButtonComponent = FC<RightButtonProps>;

export const RightButton: ButtonComponent = () => null;
export const LeftButton: ButtonComponent = () => null;

export const CrudView: FC<CrudViewProps> & CrudViewSubComponents = ({
  title,
  children,
  noPadding,
  noPaddingHeader,
}) => {
  const { url } = useRouteMatch();
  const [leftButton, setLeftButton] = useState<any>(null);
  const [rightButtons, setRightButtons] = useState<ButtonComponent[]>([]);
  useEffect(() => {
    const rightButtons_: ButtonComponent[] = [];
    Children.forEach(children, (Child) => {
      if (
        Child &&
        (Child as any).type?.name &&
        RightButton.name == (Child as any).type?.name
      ) {
        rightButtons_.push(Child as ButtonComponent);
      } else if (
        Child &&
        (Child as any).type?.name &&
        LeftButton.name == (Child as any).type?.name
      ) {
        setLeftButton((Child as any).props.children);
      }

      setRightButtons(rightButtons_);
    });
  }, [url]);
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
            {leftButton != null ? leftButton : <Menu />}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {rightButtons.map((Element, index) => {
            return (
              <Button color="inherit" key={index}>
                {(Element as any).props?.children}
              </Button>
            );
          })}
        </Toolbar>
      </AppBar>

      <Box ml={2} mr={2}>
        {children}
      </Box>
    </Paper>
  );
};

export const useCrudView = () => {
  const { path } = useAutoCrudContext();

  return { path };
};

CrudView.RightButton = RightButton;
CrudView.LeftButton = LeftButton;
