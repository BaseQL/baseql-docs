export default {
  github: 'https://github.com/shuding/nextra',     // link of the project repo
  siteGithub: 'https://github.com/shuding/nextra', // link of the docs repo path
  titleSuffix: ' – Nextra',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null,                              // <- customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: 'MIT 2020 © Shu Ding.',
  footerEditOnGitHubLink: true,                    // will link to the docs repo
  logo: (
    <React.Fragment>
      <span className="mr-2 font-extrabold hidden md:inline">Nextra</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        The Next Docs Builder
      </span>
    </React.Fragment>
  ),
  head: (
    <React.Fragment>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Nextra: the next docs builder" />
      <meta name="og:description" content="Nextra: the next docs builder" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@shuding_" />
      <meta name="og:title" content="Nextra: the next docs builder" />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
    </React.Fragment>
  )
}
