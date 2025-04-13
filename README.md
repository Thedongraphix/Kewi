# KEWI Hostel Allocation System

## Authentication Setup

This project uses [Clerk](https://clerk.dev/) for authentication. To set it up:

1. Create an account on [Clerk](https://clerk.dev/)
2. Create a new application in the Clerk dashboard
3. Copy the API keys from your Clerk dashboard to the `.env.local` file:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-publishable-key
CLERK_SECRET_KEY=your-secret-key

# Clerk URL configuration 
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/register
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

4. Run the development server:

```bash
npm run dev
```

## Features

- User authentication with Clerk
- Dashboard for viewing hostel application status
- Room allocation status tracking
- Payment management
- And more!

## Tech Stack

- Next.js
- Clerk for authentication
- Tailwind CSS
- shadcn/ui components 