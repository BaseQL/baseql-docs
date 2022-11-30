import Callout from 'nextra-theme-docs/callout'
import SupportedBy from '../../components/supported-by';

# Settings

![](/base_settings.png)

## Secret Token
<SupportedBy/>

In order to protect your endpoints you can enable auth using a Token which is secret and unique per account.

Use it along the `Authorization` HTTP header as a `Bearer` token.

Checkout specific examples for [cURL](/examples/curl) and  [Javascript](/examples/javascript).

## Mutations
<SupportedBy gsheets={false}/>

You can enable Mutations, which are disabled by default for security purposes.

It's recommended to enable secret token protection when using mutations

[See Mutations docs](/usage/mutations)

## Delete Base!

You can completely remove your base from our system.

You can always re-create it again.

<Callout emoji="️❗️">
  Deleting the base will effectively delete the GraphQL endpoint.
</Callout>