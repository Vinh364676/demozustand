import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import "../styles/index.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
</body>
    </html>
  )
}