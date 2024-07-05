export default {
  project: {
    link: 'https://github.com/BaseQL',     // link of the project repo
  },
  docsRepositoryBase: 'https://github.com/BaseQL/baseql-docs/tree/main/pages', // docs repo
  useNextSeoProps() {
    return {
      titleTemplate: '%s – BaseQL'
    }
  },
  chat: {
    link: 'https://twitter.com/shuding_',
    icon: (
      <svg width="24" height="24" viewBox="8 8 24 24">
        <path
          fill="currentColor"
          d="M13,23.17a2.52,2.52,0,1,1-2.52-2.53H13Zm1.27,6.31a2.53,2.53,0,0,0,5,0V23.17a2.53,2.53,0,1,0-5,0Zm5-16.44V10.52A2.53,2.53,0,1,0,16.83,13Zm-8.84,1.27a2.53,2.53,0,0,0,0,5h6.31a2.53,2.53,0,1,0,0-5Zm16.44,5h2.52A2.53,2.53,0,1,0,27,16.83Zm-1.27-8.84a2.53,2.53,0,0,0-5.05,0v6.31a2.53,2.53,0,1,0,5.05,0ZM20.64,27v2.52A2.53,2.53,0,1,0,23.17,27Zm8.84-1.27a2.53,2.53,0,0,0,0-5.05H23.17a2.53,2.53,0,1,0,0,5.05Z"
        />
      </svg>
    )
  },
  banner: {
  },
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
    text: (
      <span>Copyright 2024 © <a href="https://baseql.com/" target="_blank">BaseQL</a></span>
    )
  },
  logo: (
    <>
      <img src="/baseql_logo_h_alpha.png" style={{height: "30px", marginRight: "8px"}} />
      {/* <span className="mr-2 font-extrabold hidden md:inline text-indigo-500">BaseQL</span> */}
      <span className="text-gray-600 font-normal hidden md:inline">
        Docs
      </span>
    </>
  ),
  head: (
    <>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-163884111-2"></script>
      <script dangerouslySetInnerHTML={
        { __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-163884111-2');
        `}
      }>
      </script>
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
