import "@/styles/globals.css"
import { AuthProvider } from "@/app/providers"
import { TRPCReactProvider } from "@/trpc/react"

import { GeistSans } from "geist/font/sans"


export const metadata = {
  title: "Stima",
  description: "Stima",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}, bg-background`}>
      <body >
        <TRPCReactProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </TRPCReactProvider>
      </body>
    </html>
  )
}
