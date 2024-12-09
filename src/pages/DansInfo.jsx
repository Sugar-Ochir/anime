import React, {useState} from 'react';
import SideMenu from '../components/SideMenu';
import './dansinfo.css';
import Header from './Header';
import Dans from '../components/dans/Dans';
import Footer from './Footer';
function DansInfo() {
    const [active, setActive] = useState(false);

    const handleToggleActive=()=>{
        setActive(!active);
    };
    return (
    <main>
        <SideMenu active={active} />
    <div className={`DansInfoBanner ${active ? 'active' : undefined}`}>
        <Header toggleActive={handleToggleActive} active={active}/>
        <Dans active={active}/>
        <Footer active={active}/>
    </div>
    </main>
  );
}

export default DansInfo