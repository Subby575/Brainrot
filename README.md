# AI-Powered Mental Health Chatbot

## Overview

This project aims to develop an AI-powered mental health chatbot that provides real-time emotional support, personalized coping strategies, and resources for users. The chatbot leverages natural language processing (NLP) to understand user emotions and context, offering motivational feedback and self-care reminders. The project integrates Clerk for authentication, Next.js for the frontend, Three.js for 3D visualizations, and Flask for the backend and machine learning models.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Real-time Emotional Support**: Provides immediate responses to users' emotional needs and crises.
- **Personalized Coping Strategies**: Offers tailored coping mechanisms based on user interactions and preferences.
- **Resource Provision**: Delivers relevant resources such as articles, exercises, and professional help contacts.
- **Motivational Feedback**: Provides positive reinforcement and motivational messages.
- **Self-Care Reminders**: Sends reminders for self-care practices like meditation, exercise, and relaxation techniques.
- **3D Visualizations**: Uses Three.js for engaging 3D content to enhance user experience.

## Tech Stack

- **Frontend**: 
  - [Next.js](https://nextjs.org/): React framework for server-side rendering and static site generation.
  - [Three.js](https://threejs.org/): JavaScript library for creating 3D graphics.
  - [Clerk](https://clerk.dev/): Authentication and user management.

- **Backend**: 
  - [Flask](https://flask.palletsprojects.com/): Python web framework for building APIs.
  - [Machine Learning](https://scikit-learn.org/): Libraries like scikit-learn, TensorFlow, or PyTorch for NLP and other ML models.

## Installation

### Prerequisites

- Node.js and npm
- Python and pip
- Clerk API keys

### Backend Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/mental-health-chatbot.git
    cd mental-health-chatbot/backend
    ```

2. **Create a virtual environment**:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

4. **Run the Flask server**:
    ```bash
    flask run
    ```

### Frontend Setup

1. **Navigate to the frontend directory**:
    ```bash
    cd ../frontend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env.local` file in the `frontend` directory with the following content:
    ```env
    NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
    NEXT_PUBLIC_CLERK_API_KEY=<your-clerk-api-key>
    ```

4. **Run the Next.js development server**:
    ```bash
    npm run dev
    ```

## Usage

1. **Access the application**:
    Open your browser and navigate to `http://localhost:3000`.

2. **Authenticate**:
    Sign up or log in using Clerk's authentication.

3. **Interact with the chatbot**:
    Start a conversation with the chatbot to receive emotional support and personalized strategies.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**.
2. **Create a new branch**: `git checkout -b my-feature-branch`.
3. **Make your changes**.
4. **Commit your changes**: `git commit -m 'Add some feature'`.
5. **Push to the branch**: `git push origin my-feature-branch`.
6. **Create a pull request**.

Please ensure your code adheres to the existing code style and includes appropriate tests.
