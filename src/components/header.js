function Header({ menu }) {
    return (
        <nav className='main-menu'>
            {menu.menuItems.nodes.map((menuItem) => (
                <a key={menuItem.id} href={menuItem.url}>
                    {menuItem.label}
                </a>
            ))}
        </nav>
    );
}

export default Header;