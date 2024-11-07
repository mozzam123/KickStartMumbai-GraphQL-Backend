# KickStartMumbai-GraphQL-Backend

KickStartMumbai-GraphQL-Backend is a GraphQL-based backend API for managing tournaments, teams, and users. The project provides APIs for managing tournament events, team rosters, and user data with functionality for CRUD operations.

## Features

- **User Management**: Create, retrieve, and delete users.
- **Team Management**: Add, retrieve, update, and delete teams and players within each team.
- **Tournament Management**: Manage tournaments, assign teams, and specify event details.
- **GraphQL API**: Uses GraphQL for flexible queries and mutations.

## Tech Stack

- **Node.js**: Backend runtime.
- **MongoDB**: NoSQL database for storing user, team, and tournament data.
- **Apollo Server**: For handling GraphQL API requests.
- **Mongoose**: ODM for MongoDB.

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- [Node.js](https://nodejs.org/) installed (version 14 or later recommended)
- [MongoDB](https://www.mongodb.com/) installed and running

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/KickStartMumbai-GraphQL-Backend.git
   cd KickStartMumbai-GraphQL-Backend


## Usage
### GraphQL API Endpoints
The API has the following main types and resolvers:

- **User**: Manage users.
- **Team**: Manage teams and players within each team.
- **Tournament**: Manage tournament events, including assigning teams and an organizer.

### Project Structure

- **models/**: Mongoose schemas for User, Team, and Tournament.
- **resolvers/**: GraphQL resolvers for handling API requests.
- **schema/**: GraphQL type definitions for user, team, and tournament.
- **config/**: Database configuration file (db.js).

## Contributing
- Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.
