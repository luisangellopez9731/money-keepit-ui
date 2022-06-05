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
import { useRouteMatch } from "react-router";
import { useAutoCrudContext } from "../AutoCrud";
import { Menu } from './Menu'

export interface CrudViewProps {
  title: React.ReactNode;
  noPadding?: boolean;
  noPaddingHeader?: boolean;
}

export interface RightButtonProps { }

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
}) => {
  const { url } = useRouteMatch();
  const [leftButton, setLeftButton] = useState<any>(null);
  const [rightButtons, setRightButtons] = useState<ButtonComponent[]>([]);
  useEffect(() => {
    const rightButtons_: ButtonComponent[] = [];
    Children.forEach(children, (Child) => {
      console.log((Child as any).type?.name)
      if (
        Child &&
        (Child as any).type?.name &&
        RightButton.name === (Child as any).type?.name
      ) {
        rightButtons_.push(Child as ButtonComponent);
      } else if (
        Child &&
        (Child as any).type?.name &&
        LeftButton.name === (Child as any).type?.name
      ) {
        setLeftButton((Child as any).props.children);
      }

      setRightButtons(rightButtons_);
    });
  }, [url]);
  return (
    <Paper style={{
      position: 'relative',
      height: "100%",
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    }}>
      <AppBar position="static">
        <Toolbar>
          {leftButton != null ?
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              leftButton
            </IconButton>
            : <Menu />}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{textAlign: 'center'}}>
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
      <Box position="relative" flex="1 1 auto" width="100%" minHeight={0} overflow="auto">
        <Box boxSizing="border-box" width="calc(100% - 16px)" height="calc(100% - 16px)" m={1} overflow="auto">
          {children}
        </Box>
      </Box>
    </Paper>
  );
};

export const useCrudView = () => {
  const { path } = useAutoCrudContext();

  return { path };
};

CrudView.LeftButton = LeftButton;
CrudView.RightButton = RightButton;
