import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";

export default function Nav() {
    const location = useLocation();
    const navRef = useRef<HTMLElement>(null);
    const [indicatorStyle, setIndicatorStyle] = useState({
        width: 0,
        left: 0,
        opacity: 0
    });

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/blog", label: "Blog" }
    ];

    const updateIndicator = useCallback(() => {
        if (!navRef.current) return;
        const activeLink = navRef.current.querySelector(`[data-path="${location.pathname}"]`);

        if (activeLink) {
            const navRect = navRef.current.getBoundingClientRect();
            const linkRect = activeLink.getBoundingClientRect();

            setIndicatorStyle({
                width: linkRect.width + 16,
                left: linkRect.left - navRect.left - 8,
                opacity: 1
            });
        }
    }, [location.pathname]);


    useEffect(() => {
        const timer = setTimeout(updateIndicator, 10);
        return () => clearTimeout(timer);
    }, [location.pathname, updateIndicator]);

    useEffect(() => {
        const handleResize = () => updateIndicator();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [updateIndicator]);

    useEffect(() => {
        updateIndicator();
    }, [updateIndicator]);


    return (
        <nav className="relative px-5 py-3 rounded-full border-t-3 border-t-white/5 border-b-1 border-b-black/10 shadow-xl flex justify-around items-center gap-8 z-20 backdrop-blur-md bg-neutral-900/20 md:bg-neutral-800/20" ref={navRef}>
            <div
                className="absolute bg-fuchsia-300/10 border-t-2 border-t-white/5 border-b-1 border-b-black/5 shadow-sm flex h-10 rounded-full transition-all duration-300 ease-out z-30"
                style={{
                    width: `${indicatorStyle.width}px`,
                    left: `${indicatorStyle.left}px`,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    opacity: indicatorStyle.opacity
                }}

            />
            {navItems.map(item => (
                <Link
                    key={item.path}
                    to={item.path}
                    className={`relative z-40 px-5 py-3 rounded-full transition-colors duration-200 ${location.pathname === item.path ? 'text-white font-medium' : 'text-gray-400 hover:text-gray-200'}`}
                    data-path={item.path}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    );
}