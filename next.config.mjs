import nextra from 'nextra'

// Nextra 4: theme options moved to app/layout.tsx, MDX pages live in content/
const withNextra = nextra({})

export default withNextra({
  env: {
    api_url: process.env.API_URL
  }
})
