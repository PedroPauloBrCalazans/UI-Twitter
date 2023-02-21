import { TwitterLogo, House, Hash, Bell, Envelope, BookmarkSimple, FileText,
   User, DotsThreeCircle, Pencil } 
from 'phosphor-react';
import { Link, NavLink } from 'react-router-dom';

import './Sidebar.css';



export function Sidebar() {

  return(
    <aside className="sidebar">
    <TwitterLogo size={32} color="#1da1f2" weight="fill" />

    <nav className="main-navigation">
      <NavLink to="/">
        <House weight="fill"/>
        <span>Home</span>
      </NavLink>

      <Link to="">
        <Hash />
        <span>Explore</span>
      </Link>

      <Link to="">
        <Bell />
        <span>Notifications</span>
      </Link>

      <Link to="">
        <Envelope />
        <span>Messages</span>
      </Link>

      <Link to="">
        <BookmarkSimple />
        <span>Bookmarks</span>
      </Link>

      <Link to="">
        <FileText />
        <span>Lists</span>
      </Link>

      <Link to="">
        <User />
        <span>Profile</span>
      </Link>
      
      <Link to="">
        <DotsThreeCircle />
        <span>More</span>
      </Link>
    </nav>

    <button className="new-tweet">
      <Pencil />
      <span>Tweet</span>
    </button>
  </aside>
  );
}