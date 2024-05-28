import { NavBarItem } from '@rocket.chat/fuselage';
import { useCurrentRoutePath, useTranslation } from '@rocket.chat/ui-contexts';
import type { HTMLAttributes } from 'react';
import React from 'react';

import GenericMenu from '../../components/GenericMenu/GenericMenu';
import { useMarketPlaceMenu } from './hooks/useMarketPlaceMenu';

type MarketPlaceProps = Omit<HTMLAttributes<HTMLElement>, 'is'>;

export const NavBarItemMarketPlaceMenu = (props: MarketPlaceProps) => {
	const t = useTranslation();
	const sections = useMarketPlaceMenu();

	const currentRoute = useCurrentRoutePath();

	return (
		<GenericMenu
			sections={sections}
			title={t('Marketplace')}
			is={NavBarItem}
			placement='bottom-start'
			icon='store'
			pressed={currentRoute?.includes('/marketplace')}
			{...props}
		/>
	);
};
