export default {
  github: 'https://github.com/BaseQL',     // link of the project repo
  siteGithub: 'https://github.com/BaseQL/baseql-docs', // link of the docs repo path
  repository: 'https://github.com/BaseQL/baseql-docs', // link of the docs repo path
  docsRepository: 'https://github.com/BaseQL/baseql-docs', // docs repo
  branch: 'main',
  titleSuffix: ' – BaseQL',
  nextLinks: true,
  prevLinks: true,
  defaultMenuCollapsed: true,
  search: true,
  customSearch: null,                              // <- customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: (
    <span>Copyright 2020 © <a href="https://www.baseql.com/" target="_blank">BaseQL</a></span>
  ),
  footerEditOnGitHubLink: true,                    // will link to the docs repo
  logo: (
    <React.Fragment>
      <img src="/baseql_logo_h_alpha.png" style={{height: "30px", marginRight: "8px"}} />
      {/* <span className="mr-2 font-extrabold hidden md:inline text-indigo-500">BaseQL</span> */}
      <span className="text-gray-600 font-normal hidden md:inline">
        Docs
      </span>
    </React.Fragment>
  ),
  head: (
    <React.Fragment>
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
    </React.Fragment>
  )
}
