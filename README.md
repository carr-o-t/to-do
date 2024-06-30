# Advanced To-Do Application

## Overview

This is an advanced To-Do application built with React, TypeScript, Redux Toolkit, and TailwindCSS. The application supports user authentication, task management, and integrates with an external API to display weather information. The state is persisted using `redux-persist` to ensure data persistence across browser sessions.

## Features

- Add, update, and delete tasks
- Set task priority (High, Medium, Low)
- User authentication (login/logout)
- Task management is protected by authentication
- Integrates with a public API (e.g., weather API) to display relevant data
- Fully responsive design with TailwindCSS
- State persistence using `redux-persist`

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/carr-o-t/to-do.git
   cd to-do

   ```

2. Install dependencies:

   ```sh
     npm install

   ```

3. Start the application:
   ```sh
     npm run dev
   ```

## Usage

### Authentication

1. Navigate to /login to access the login page.
2. Enter a email to log in (no password required for this mock authentication).
3. Once authenticated, you will be redirected to the /tasks page to manage tasks.

### Task Management

1. Add a task using the input field and set its priority.
2. Delete a task by clicking the delete button next to the task.
