---
title: 'GQL'
excerpt: 'General Theory'
source: 'Not me lol, compiled notes'
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


# Common Issues

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
\

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