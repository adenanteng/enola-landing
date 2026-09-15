"use client"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { X } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import React from "react"

const menuItems = [
  { name: "Produk", href: "#product" },
  { name: "Pilar", href: "#pillar" },
  { name: "Aria AI", href: "#aria" },
  // { name: "FAQ", href: "#faq" },
  { name: "Kontak", href: "#contact" },
]

function ThemeToggler() {
  const { resolvedTheme, setTheme } = useTheme()
  // next-themes resolvedTheme is undefined until mounted; render placeholder
  // to avoid hydration mismatch on the icon
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )

  return (
    <AnimatedThemeToggler
      theme={mounted && resolvedTheme === "dark" ? "dark" : "light"}
      onThemeChange={setTheme}
      aria-label="Toggle theme"
      className="flex size-9 items-center justify-center rounded-full border bg-background text-foreground duration-150 hover:bg-accent [&_svg]:size-4"
    />
  )
}

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState<string | null>(null)

  // scroll-spy: active = last section whose top crossed 35% from viewport top.
  // Uses a scroll listener (not IntersectionObserver) because ratio-based
  // observation misses very tall sections like #pilar.
  React.useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.35
      let current: string | null = null
      for (const item of menuItems) {
        const element = document.getElementById(item.href.slice(1))
        if (element && element.getBoundingClientRect().top <= line) {
          current = item.href
        }
      }
      setActiveSection(current)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  React.useEffect(() => {
    if (!menuState) return

    const mediaQuery = window.matchMedia("(max-width: 1023px)")
    const updateOverflow = () => {
      document.documentElement.classList.toggle(
        "overflow-hidden",
        mediaQuery.matches
      )
    }

    updateOverflow()
    mediaQuery.addEventListener("change", updateOverflow)

    return () => {
      mediaQuery.removeEventListener("change", updateOverflow)
      document.documentElement.classList.remove("overflow-hidden")
    }
  }, [menuState])

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed top-0 z-20 w-full bg-background max-lg:data-[state=active]:bottom-0"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-5 lg:gap-0">
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>

              <div className="max-lg:hidden">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={
                          activeSection === item.href
                            ? "block text-primary duration-150"
                            : "block text-muted-foreground duration-150 hover:text-accent-foreground"
                        }
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-4 lg:hidden">
                <ThemeToggler />
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className="relative z-20 block cursor-pointer after:absolute after:-inset-4"
                >
                  <div
                    aria-hidden
                    className="m-auto flex size-4.5 flex-col items-center justify-center gap-[7px] duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0"
                  >
                    <span className="h-0.5 w-full rounded-full bg-foreground" />
                    <span className="h-0.5 w-full rounded-full bg-foreground" />
                  </div>

                  <X className="absolute inset-0 m-auto size-6 translate-x-[-3px] scale-0 -rotate-180 opacity-0 duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100" />
                </button>
              </div>
            </div>

            <div className="mb-6 hidden w-full flex-wrap items-center justify-end in-data-[state=active]:block max-lg:space-y-8 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:in-data-[state=active]:flex">
              <div className="lg:hidden">
                <ul>
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        onClick={() => setMenuState(false)}
                        className={
                          activeSection === item.href
                            ? "block py-3 text-2xl font-medium text-primary"
                            : "block py-3 text-2xl font-medium text-foreground"
                        }
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:items-center sm:gap-3 sm:space-y-0 md:w-fit">
                <div className="max-lg:hidden">
                  <ThemeToggler />
                </div>
                <Button
                  size="sm"
                  nativeButton={false}
                  render={
                    <Link href="#contact" onClick={() => setMenuState(false)}>
                      <span>Hubungi Kami</span>
                    </Link>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
