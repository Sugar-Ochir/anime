import React, {useState} from 'react';
import SideMenu from '../components/SideMenu';
import './wallet.css';
import Header from './Header';
import TulburExtended from '../components/TulburExtended';
import Footer from './Footer';
function Wallet() {
    const [active, setActive] = useState(false);

    const handleToggleActive=()=>{
        setActive(!active);
    };
    return (
    <main>
        <SideMenu active={active} />
    <div className={`walletBanner ${active ? 'active' : undefined}`}>
        <Header toggleActive={handleToggleActive} active={active}/>
        <TulburExtended active={active}/>
        <Footer active={active}/>
    </div>
    </main>
  );
}

export default Wallet