import { Menu, MenuProps } from 'antd';
import React from 'react';

const items: MenuProps['items'] = [
	{
		label: 'Ledger',
		key: 'ledger',
		children: [
			{
				label: 'Sales Invoice',
				key: 'sales_invoice',
			},
		],
	},
];

const MenuBar: React.FC = () => {
	return <Menu mode='horizontal' items={items} />;
};

export default MenuBar;
