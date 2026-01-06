// src/components/Sidebar/index.jsx
import { h } from "preact"
import { Home, Printer, Settings } from "preact-feather"

const Sidebar = ({ activeSection, onSectionChange }) => {
    const menuItems = [
        { id: "home", icon: <Home size={20} />, label: "Home" },
        { id: "printer", icon: <Printer size={20} />, label: "Printer" },
        { id: "settings", icon: <Settings size={20} />, label: "Settings" }
    ]

    return (
        <div className="app-sidebar">
            {menuItems.map((item) => (
                <div
                    key={item.id}
                    className={`sidebar-icon ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => {
                        console.log('Clicked:', item.id)
                        onSectionChange(item.id)
                    }}
                    title={item.label}
                >
                    {item.icon}
                </div>
            ))}
        </div>
    )
}

export default Sidebar