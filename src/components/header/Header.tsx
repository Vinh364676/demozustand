"use client";

import { useTranslations } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { Locale, localeLabels, locales } from "@/i18n/setting";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../modeToggle";
import { RiTimerFlashFill } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";

const { useRouter, usePathname } = createSharedPathnamesNavigation({ locales });

export default function Header() {
  const t = useTranslations("navigation");
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: Locale) => {
    router.push(pathname, { locale: newLocale });
  };

  const navigation = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("product"), href: "/product" },
    { name: t("service"), href: "/service" },
    { name: t("contact"), href: "/contact" },
  ];

  return (
    <div>
      <header className="shadow-sm py-4 ">
        <nav
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          aria-label="Top"
        >
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900">
                Logo
              </Link>
            </div>

            <div className="flex gap-10">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300">
                  <RiTimerFlashFill size={20} />
                </div>
                <div>
                  <h2 className="text-sm">Hàng ngày</h2>
                  <p className="text-sm">6h - 18h</p>
                </div>
              </div>
              <a href="tel:0834636366">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300">
                    <IoIosCall size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm">Liên hệ</h3>
                    <p className="text-sm">0834 636 366</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </nav>
      </header>
      <header className=" shadow-sm ">
        <nav
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          aria-label="Top"
        >
          <div className="flex h-16 items-center justify-between">
            <div className="hidden md:flex md:items-center md:space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-base font-medium hover:text-gray-900 ${
                    pathname === item.href
                      ? "border-b-2 border-blue-500 text-blue-500"
                      : ""
                  } $`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
        
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Globe />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {locales.map((loc) => (
                    <DropdownMenuItem
                      key={loc}
                      onClick={() => handleLocaleChange(loc)}
                      className="cursor-pointer"
                    >
                      {localeLabels[loc]}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <ModeToggle />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
