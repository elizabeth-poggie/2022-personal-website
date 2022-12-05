---
title: 'GQL'
excerpt: 'General Theory'
source: 'Me'
---

# Introduction
GraphQL provides a type system where you can describe a schema for your data. This gives front-end consumers the ability to query exactly what they need in 1 call.

## API Cons:
1. Underfetching: we may need multiple entities at once time. Each API request is under fetching the data we need.
2. Overfetching: we may just need a small subset of the data that is being returned by the API.
                    
## GraphQL Pros:
1. Single entry point exposing different types of data
2. Client: Writes a single request 
3. Server: Resolves the request
4. Programming language agnostic
5. We can evolve the Service & Client without impacting each other

## GraphQL Cons:
1. Data Duplication: Ui-website & mobile querying different graphs. How do we stitch the
graphs together?

# Structure
## Server
1. Defines schema (how this graph is exposing data)
2. Exposes different Queries (how i am navigating the graph)

## Client
1. Queries the schema (e.g. how we navigate the graph)

# Apollo Federation
## Mitigating GraphQL Cons:
1. Unifies all graphQL sub graphs to expose a single unified GraphQL with unified Schemas & Queries. This resolves the issue of Data Duplication & provides a single interface for querying back-end data 

## Principals - designing schemas:
1. Lets not duplicate entities, therefore the schema needs to be abstract as possible
2. Data driven vs Query approach
## Data Driven Approach (optimized for the SERVER):
1. This approach is used when the clients querying the graph are not identified
## Query Driven Approach (optimized for the CLIENT):
1. Let the UI decide the shape of the schema, what entities belong to the schema
2. We need to specify what we need & the rest would just be there for nothing? So why provide something we don’t need?

# Entities in Federated Schemas
1. An entity is an object type that you can define in one subgraph and can then reference and extend in other sub graphs. TLDR: Entities are object types, an object type is not necessarily an Entity.
2. The @key directive defines an entity’s primary key, which consists of one or more of the type’s fields.
3. You are telling the apollo federation that a particular object type
4. Entities can have multiple primary keys
5. Entities can have a compound primary key

# Entity Referencing
1. I have the primary key for an existing entity in another subgraph (e.g. grabbing info from another sub graph)
2. The federation (mambo graph) will be able to resolve the entity fields based on primary key

# Entity Extension
1. In this case we are adding more fields to an existing entity defined in another sub graph,
2. When the federation (mambo graph) merges the fields together when building it’s unified graph

# Scalability
1. We want to be able to add other services without touching the client. (so we do not have to change the query)
2. The schema needs to be well designed in order to allow this scalability.
3. The client doesn’t have to change the query
4. Sustainable since scaling is easy

# What the Federation & GraphQL means
A client driven approach. We want to satisfy the client above all else. The client decides the shape of the schema.

## Product:
1. Business has influence over the shape of the Graph. Ultimately what is most important is
driving the business.

## Dev teams:
1. No more SILOS, teams have to engage conversation to design and scale the graph.
2. The graph is design to the need of the client, if data is not used in client it shouldn’t appear in the graph.
3. Re-think teams scope and ownership over data/entities. Which entities should go to each team to manage?

## Architure/API developpement
1. Building API with GQL is different from Rest. We should have an open mindset when it comes to joining the federation. (everybody is forced to talk to everybody to serve the client)
2. The federation replaces most of the aggregation layers. (no more ag-account, etc)
3. The federation gateway doesn’t hold any business logic

# Organizational Challenges
1. Lower funnel services are to be subgraph providers.
2. We need to rethink caches strategies.
3. Teams need to work together to design and scale the graph.
    - To define Schemas
    - To define Ownership
4. Have a standard across the sub graphs (naming)
5. When do we add pagination
    - When is it needed? When is it not? (e.g. products are a lot & would require pagination)
6. Implementation Strategy
    - It's a long iterative process to add a new service
    - Perfect schemas do not exist, we need to build the graph as we go

# Common Issues
## The N + 1 Problem
1. GraphQL has an N + 1 problem. There is a Danger in fetching too much data at once
2. Each resolver only has knowledge of its own parent. Imagine if I am a restAPI that does not have access to the full list of product IDs we need.
3. One query will make multiple requests to multiple services and the respective databases of those services. (e.g. for every ID i need, i need to make ID number of requests to the graph)
## Optimizing Subgraph - Data Fetching
Resolving the N+1 problem associated with GraphQL
1. Use a data loader
2. Batch Calling the Backend
    - Collect array of keys during one tick of the event loop
    - Hit data source all at once with those keys
    - Returns a promise which resolves an array of values
3. This will improve the performance of your API by taking a Batch Approach

# Optimizing Subgraph - Data Sourcing
1. Help fetch data from a particular source (you can have many data sources)
2. Handle caching, deduplication, and errors while resolving operations
3. Strongly recommended
4. Especially helpful when there are multiple instances of your service since each instance shares a cache

# Safety in Fetching
1. GraphQL Cursor Connections Specification or Relay Specification
2. Provides a standardized way to fetch data
3. Provide a standard mechanism for slicing and pagination of the result
4. Allows pagination best practices
5. Secure the Graph by limiting the size of the result set

# Authentication
1. If the data loader is compromised, how can we be sure we are receiving data from a trusted data loader?

# Best Practices
## Designing the Schema (entities)
1. Most important thing for the GraphQL
2. Since this methodology is a client driven approach:
    - The UI indicates the composition of the schema: Only fields used by the clients should appear in the schema (stay concise)
    - The UI indicates the shape of the schema: Some fields of an entity have an array of children
3. One primary key vs Multiple primary key (both are supported)
4. Separation of concerns:
    - Teams need to focus on their defined scope
    - Teams need to engage in discussion with recommendation service to provide the needed list to the client
    - Back-end service will focus on improving performance
5. Field nullability
    - Fields are nullable in GQL

# Client Integration
## GraphQL Code Generator (Codegen)
1. Used to generate useablequeries and types from the GraphQL schema
2. `typescript-document-nodes` generates DocumentNode query objects that can be passed directly to the FederationGateway

### Structure
1. Service.ts makes the call to fetch the required data using Query
2. Query.graphql files generate constalation-queries.generated.ts using npm. Fragments allow for type checking and we cannot generate an invalid Query :^)

### Advatages
1. Removes the need for "inline GQL" pattern. the schemas now live in their own files in the service.
2. Enforces strict type checking on GraphQL queries and prevents any deployments of invalid queries
3. Automates discoverability of new data. After types are generated, all available data can be autocompleted with TS
4. Because of generated tyes, building or delivering from complex types in your service is simple (more modular, reusable code). The types create a dependency on the schema. 
5. Enables efficient Feature Flagging of new queries. 1) Generate a new query => 2) Import it into the service => 3) We FF the fetch

### Disadvatanges
1. This creates depedencies on the schema. Whenever you want to release new code to ui-web the queries are verified are verified against the schema in production.
2. Codegen does not play nice with query aliases. This has proven problematic to retrofit the GQL response to the existing client contract.

## 2 Step Integration
1. Start with the sevrer. When we are fetching the data from the graph, we built a modeling layer to take everything from the graph to remodel it to fit the existing contract for the client. (client has not been touched)
2. Integrating on the client side

### Risks
1. Lower risk, the scope of work decreases as well as the minimization of pitfalls. 
2. Heavier integration because there is extra work to be done. If something goes wrong it decreases the steps.




