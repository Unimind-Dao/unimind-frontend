import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { CustomLink } from '../CustomLink';

export const MobileNavBar = () => {
	const { t } = useTranslation('navigation');

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<IconButton
				size='large'
				edge='start'
				color='secondary'
				aria-label='menu'
				sx={{ mr: 2 }}
				id='basic-button'
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				<MenuIcon />
			</IconButton>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem>
					<CustomLink>About</CustomLink>
				</MenuItem>
				<MenuItem>
					<CustomLink>Benefits</CustomLink>
				</MenuItem>
				<MenuItem>
					<CustomLink>Team</CustomLink>
				</MenuItem>
				<MenuItem>
					<CustomLink href='/blog'>Blog</CustomLink>
				</MenuItem>
				<MenuItem>
					<CustomLink>{t('about')}</CustomLink>
				</MenuItem>
				<MenuItem>
					<CustomLink>{t('benefits')}</CustomLink>
				</MenuItem>
				<MenuItem>
					<CustomLink>{t('team')}</CustomLink>
				</MenuItem>
				<MenuItem>
					<CustomLink href='https://webtrzy.xyz' target='_blank'>
						{t('webtrzy')}
					</CustomLink>
				</MenuItem>
			</Menu>
		</div>
	);
};
