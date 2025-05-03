import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Shield, Settings, LayoutGrid, Logs, ShoppingBag } from 'lucide-react';
import AppLogo from './app-logo';

interface AuthUser {
    role: string;
}
  
interface AuthProps {
    user?: AuthUser;
}

export function AppSidebar() {

    const { auth } = usePage<{ auth: AuthProps }>().props;
    const userRole = auth?.user?.role || 'user';

    const mainNavItems: NavItem[] = [
        { title: 'Dashboard', href: '/dashboard', icon: LayoutGrid },
        { title: 'Manage Product', href: '/products', icon: ShoppingBag },
    ];

    const adminNavItems: NavItem[] = [
        { title: 'Manage User', href: '/admin/users', icon: Shield },
    ];

    const superadminNavItems: NavItem[] = [
        { title: 'Setting', href: '/superadmin/settings', icon: Settings },
    ];

    const footerNavItems: NavItem[] = [
        { title: 'Logs', href: '/telescope', icon: Logs },
    ];

    // Role-based mapping
    const roleNavMap: Record<string, NavItem[]> = {
        admin: [...adminNavItems, ...footerNavItems],
        superadmin: [...adminNavItems, ...superadminNavItems],
    };

    // Merge navs based on user role
    const roleBasedNavItem: NavItem[] = [
        ...mainNavItems,
        ...(roleNavMap[userRole] || []),
    ];

    return (
        <Sidebar collapsible="icon" variant="sidebar">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={roleBasedNavItem} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
