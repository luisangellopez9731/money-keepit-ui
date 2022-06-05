import { useState } from 'react';
import { IconButton, MenuItem, Menu as MenuComponent } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useWorkspace } from 'components/workspace-provider';

export const Menu = () => {
  const { workspaceId } = useWorkspace()
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const open = Boolean(anchorEl);
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setAnchorEl(anchorEl ? null : e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null);
  }
  return (
    <>
      <IconButton
        id="menu-button"
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        aria-controls={open ? 'menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
        <MenuComponent
          id="menu"
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'menu-button',
          }}>
          <MenuItem>{workspaceId}</MenuItem>
        </MenuComponent>
      </IconButton>
    </>
  )
}