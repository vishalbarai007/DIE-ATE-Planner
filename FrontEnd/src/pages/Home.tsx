import { SidebarDemo } from '../components/AceternityComponents/main/SideBar'
import DashBoard from './DashBoard'
import { useContext } from 'react';
import ThemeContext from '../contexts/theme/ThemeContext';

export default function Home() {
  const context = useContext(ThemeContext);
  return (
    <div className={`${context?.theme==='dark'?'bg-black':'bg-white'}`}>
      <SidebarDemo/>
      <DashBoard/>
    </div>
  )
}
