import './App.css';
import { useState } from 'react';

import Menu from './Component/Menu';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Button from './Component/Button';
function App() {
return (
<div>
<Menu />
<Button/>
<Home />
<Footer />
</div>
);
}
export default App;