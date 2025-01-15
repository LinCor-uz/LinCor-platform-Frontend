import React, { useState } from 'react';
import { LayoutGrid, Users, Video, DollarSign, Settings, LogOut } from 'lucide-react';

function Sidebar() {
    const [activeItem, setActiveItem] = useState('dashboard');

    const menuItems = [
        { id: 'dashboard', icon: LayoutGrid, text: 'Dashboard' },
        { id: 'students', icon: Users, text: "O'quvchilar" },
        { id: 'courses', icon: Video, text: 'Video kurslar' },
        { id: 'sales', icon: DollarSign, text: 'Sales' },
    ];

    const bottomItems = [
        { id: 'settings', icon: Settings, text: 'Settings' },
        { id: 'logout', icon: LogOut, text: 'Chiqish', className: 'text-red-500' },
    ];

    const handleItemClick = (id) => {
        setActiveItem(id);
    };

    const MenuItem = ({ item }) => {
        const isActive = activeItem === item.id;
        return (
            <button
                onClick={() => handleItemClick(item.id)}
                className={`flex items-center w-full px-3 py-2 my-1 text-left rounded-lg transition-colors ${isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                    } ${item.className || ''}`}
            >
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.text}</span>
            </button>
        );
    };

    return (
        <div className="w-56 h-screen p-4 border-r bg-white flex flex-col">
            <div className="mb-8">
                <h1 className="text-xl font-bold text-blue-600">LinCor</h1>
            </div>

            <div className="flex-1">
                {menuItems.map(item => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </div>

            <div className="border-t pt-4">
                {bottomItems.map(item => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default Sidebar;