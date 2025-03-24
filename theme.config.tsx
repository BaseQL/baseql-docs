import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <img src="/baseql_logo_h_alpha.png" style={{height: "30px", marginRight: "8px"}} alt="BaseQL Logo" />
      <span className="text-gray-600 font-normal hidden md:inline">
        Docs
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/BaseQL'
  },
  docsRepositoryBase: 'https://github.com/BaseQL/baseql-docs/tree/main',
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
    toggleButton: true
  },
  toc: {
    backToTop: true
  },
  darkMode: true,
  footer: {
    content: (
      <span>Copyright {new Date().getFullYear()} © <a href="https://baseql.com/" target="_blank" rel="noopener">BaseQL</a></span>
    )
  },
  head() {
    const { title } = useConfig();
    return (
      <>
        <title>{(title || 'BaseQL') + ' - BaseQL Docs'}</title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-163884111-2"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-163884111-2');
          `
        }} />
        <meta name="msapplication-TileColor" content="#4c51bf" />
        <meta name="theme-color" content="#4c51bf" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content="BaseQL: GraphQL for Airtable" />
        <meta name="og:description" content="BaseQL: GraphQL for Airtable" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BaseQL" />
        <meta name="og:title" content="BaseQL: GraphQL for Airtable" />
        <meta name="apple-mobile-web-app-title" content="BaseQL" />
      </>
    )
  }
}

export default config 