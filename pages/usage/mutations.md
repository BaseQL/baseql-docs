import Callout from 'nextra-theme-docs/callout'
import Query from '../../components/query';

# Mutations

<Callout emoji="️❗️">
  Mutations are enabled by default. If you want to protect them from the ourside wolrd consider enabling your [Secret Token](/usage/token)
</Callout>

Create, update and delete records

## Insert

When inserting a new record you can get the generated id immediately:

<Query disabled={true} query={`mutation {
insert_people(
  name: "John", 
  vegan: true
) {
  id, name, vegan
}\n}`} code={`{
insert_people [{
  id: "recABC123",
  name: "John", 
  vegan: true
}]\n}`}/>

## Update

When updating an existing record you must provide an `id` to locate it along the attributes to be updated:

<Query disabled={true} query={`mutation {
update_people(
  id: "recABC123", # required
  vegan: false
) {
  id, name, vegan
}\n}`} code={`{
insert_people [{
  id: "recABC123",
  name: "John", 
  vegan: false
}]\n}`}/>

## Delete

When deleting a record only an `id` is needed:

<Query disabled={true} query={`mutation {
delete_people(
  id: "recABC123", # required
) { }\n}`} code={`{
insert_people [{
  id: "recABC123"
}]\n}`}/>