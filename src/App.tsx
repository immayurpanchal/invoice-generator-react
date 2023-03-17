import type { FC } from 'react';
import 'antd/dist/reset.css';
import './App.css';
import MenuBar from './components/MenuBar/MenuBar';

const App: FC = () => (
	<div className='App'>
		<MenuBar />
	</div>
);

export default App;
