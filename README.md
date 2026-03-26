# Island Stay Management System - Advanced Databases
The Island Stay Management System shows a Hybrid Database Approach for Island Stay Management System using SQL and MongoDB 

## Overview
The system manages both SQL and NoSQL as the aim to show how it handles both kinds of data efficiently under a Single Application Environment.
The SQL and NoSQL is not connected Directly to each other,  instead each of the Database-The SQL Database and NoSQL Database is connected independently to the Spring Boot Application only.
(i) Structured Data (SQL): Guests, Rooms, Bookings
(ii) Unstructured Data (NoSQL): Reviews Data

## SQL Database
For this project, the Main Datase used is SQL Database only.

The SQL database includes these three main tables as listed:
(i) Guests
(ii) Rooms
(iii) Bookings
Each of these table have 100+ records.

The main features include:
(i) Primary Keys and Foreign Keys
(ii) JOIN queries
(iii) Aggregation (such as the COUNT, AVG)

## How to run the Database
1. Open MySQL Workbench
2. Run the `islandstay.sql` file

## NoSQL Database (MongoDB)

NoSQL Database is used here as a secondary Database for demonstration purpose only for the Review Data (Guest Reviews).
MongoDB is used to store the Unstructured Data which is the review data in JSON format.

In Localhost:27017
Database:   test
Collection: islandreviews

Dataset:    islandreviews.json (100+ records)

The CRUD Operations implemented:
(i) find()
(ii) insertOne() / insertMany()
(iii) updateOne()
(iv) deleteOne()
(v) Aggregation pipelines
(vi) Indexing

## MongoDB Playgrounds

All MongoDB queries are implemented using VS Code (Visual Studio Code) MongoDB Extension and they are:
(i) playground-1     :  Basic Find Query
(ii) playground-2    :  Embedding
(iii) playground-3   :  Referencing
(iv) playground-4    :  Aggregation
(v) playground-5     :  Aggregation Pipeline
(vi) playground-6    :  Testing Aggregation
(vii) playground-7   :  Lookup
(viii) playground-8  :  Indexing
(ix) playground-9    :  Index testing
(x) playground-10    :  Sorting and Limit

## How to Run The Playgrounds
1. Open VS Code (Visual Studio Code)
2. Install MongoDB Extension
3. Open any `.mongodb.js` file
4. Run the queries directly
   
The main features include:
(i) Hybrid Database Design
(ii) SQL + NoSQL Implementation
(iii) CRUD Operations
(iv) Aggregation Queries
(v) Indexing for performance
