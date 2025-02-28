"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Menubar, MenubarTrigger, MenubarMenu } from '@/components/ui/menubar'
import { usePathname } from '@/i18n/routing'
import { cn } from "@/lib/utils"

export default function MenuComponent() {
  const pathname = usePathname()
  const locale = pathname?.split('/')[1] || 'vi'
  const [activePath, setActivePath] = useState<string | null>(pathname || null)

  const getLocalePath = (path: string) => {
    if (pathname?.startsWith(`/${locale}`)) {
      return path
    }
    return `/${locale}${path}`
  }

  const handleClick = (path: string) => {
    setActivePath(path)
  }

  const menuItems = [
    { path: '/', label: 'Trang chủ' },
    { path: '/about', label: 'Về chúng tôi' },
    { path: '/products', label: 'Sản phẩm' },
    { path: '/contact', label: 'Liên hệ' },
  ]

  return (
    <Menubar className="border-none shadow-none flex space-x-4 p-2 rounded-lg md:space-x-8">
      <MenubarMenu>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={getLocalePath(item.path)}
            passHref
            onClick={(e) => {
              if (pathname === getLocalePath(item.path)) {
                e.preventDefault()
              } else {
                handleClick(item.path)
              }
            }}
          >
            <MenubarTrigger
              className={cn(
                "cursor-pointer px-4 py-2 rounded-md transition-all duration-200 ease-in-out hover:bg-secondary/50",
                activePath === item.path
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "bg-transparent" 
              )}
            >
              {item.label}
            </MenubarTrigger>
          </Link>
        ))}
      </MenubarMenu>
    </Menubar>
  )
}