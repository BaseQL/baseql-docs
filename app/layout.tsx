import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

// Replaces the `head()` option of the former theme.config.tsx
export const metadata: Metadata = {
  title: {
    default: 'BaseQL - BaseQL Docs',
    template: '%s - BaseQL Docs'
  },
  description: 'BaseQL: GraphQL for Airtable',
  applicationName: 'BaseQL',
  appleWebApp: { title: 'BaseQL' },
  openGraph: {
    title: 'BaseQL: GraphQL for Airtable',
    description: 'BaseQL: GraphQL for Airtable'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@BaseQL'
  },
  other: {
    'msapplication-TileColor': '#4c51bf'
  }
}

export const viewport: Viewport = {
  themeColor: '#4c51bf'
}

const navbar = (
  <Navbar
    logo={
      <>
        <img src="/baseql_logo_h_alpha.png" style={{ height: '30px', marginRight: '8px' }} alt="BaseQL Logo" />
        <span className="x:text-gray-600 x:max-md:hidden" style={{ fontWeight: 400 }}>Docs</span>
      </>
    }
    projectLink="https://github.com/BaseQL"
  />
)

const footer = (
  <Footer>
    <span>
      Copyright {new Date().getFullYear()} ©{' '}
      <a href="https://baseql.com/" target="_blank" rel="noopener">BaseQL</a>
    </span>
  </Footer>
)

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <meta httpEquiv="Content-Language" content="en" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-163884111-2"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-163884111-2');
            `
          }}
        />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/BaseQL/baseql-docs/tree/main"
          darkMode
          sidebar={{
            defaultMenuCollapseLevel: 1,
            autoCollapse: true,
            toggleButton: true
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
