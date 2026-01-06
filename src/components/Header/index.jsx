import { h } from "preact"
import { Menu, Bell, User, Minimize2, Maximize2, X } from "preact-feather"

export const Header = ({ title = "4D BIO Printer", onMenuClick }) => {
  return (
    <header className="app-header">
      <div className="header-left" style={{ display: 'flex', alignItems: 'center' }}>
        <button 
          className="icon-button" 
          onClick={onMenuClick}
          style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
        >
          <Menu size={20} />
        </button>
        <div className="app-title">{title}</div>
      </div>
      
      <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div className="icon-button">
          <Bell size={20} />
        </div>
        <div className="icon-button">
          <User size={20} />
        </div>
        <div className="window-controls">
          <button className="window-control">
            <Minimize2 size={16} />
          </button>
          <button className="window-control">
            <Maximize2 size={14} />
          </button>
          <button className="window-control" style={{ color: '#ff5f56' }}>
            <X size={16} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
