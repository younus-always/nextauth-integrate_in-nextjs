# Next.js NextAuth Integration

A modern authentication-ready boilerplate built with **Next.js**, **NextAuth.js**, **MongoDB**, and **Tailwind CSS**. This project supports authentication via **Google**, **GitHub**, and **Facebook**, and is ready for extensibility and deployment.

---

## 🧭 Table of Contents

- [Introduction](#-introduction)
- [Features](#-features)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Usage](#-usage)
- [Dependencies](#-dependencies)
- [Configuration](#-configuration)
- [Examples](#-examples)
- [Troubleshooting](#-troubleshooting)
- [Contributors](#-contributors)
- [License](#-license)

---

## 🚀 Introduction

This project demonstrates how to integrate [Next.js](https://nextjs.org/) with [NextAuth.js](https://next-auth.js.org/) for a secure and extendable authentication system using providers like Google, GitHub, and Facebook. MongoDB is used as the persistent database to store user sessions and account information.

---

## ✨ Features

- 🔐 Multi-provider OAuth with Google, GitHub, and Facebook
- ⚛️ Built with React 19 and Next.js 15
- 🌐 MongoDB integration with session storage
- 🎨 Tailwind CSS for styling
- ⚙️ Configured ESLint for linting
- 🛠️ Turbopack support for fast dev builds

---

## 🛠 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/nextjs_nextauth_integrate.git
cd nextjs_nextauth_integrate
```

2. Install dependencies

```
npm install
```

3. Configure environment variables

Create a .env.local file and populate it with the following variables:

```
MONGO_URI=your_mongodb_connection_string
DB_NAME=your_db_name
NEXTAUTH_SECRET=your_auth_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret

FACEBOOK_CLIENT_ID=your_facebook_client_id
FACEBOOK_CLIENT_SECRET=your_facebook_client_secret

```

## 📦 Usage

Run the development server:

```
npm run dev
```

Visit http://localhost:3000 to view the app.

Other scripts:

- Build for production:

```
npm run build
```

- Start production server:

```
npm start
```

- Lint the code:

```
npm run lint
```

## 📚 Dependencies

| Package     | Version  | Purpose                          |
| ----------- | -------- | -------------------------------- |
| next        | ^15.3.3  | React-based web framework        |
| react       | ^19.0.0  | UI library                       |
| react-dom   | ^19.0.0  | DOM bindings for React           |
| next-auth   | ^4.24.11 | Authentication for Next.js       |
| mongodb     | ^6.17.0  | MongoDB driver for Node.js       |
| react-icons | ^5.5.0   | Icons for React apps             |
| tailwindcss | ^4       | Utility-first CSS framework      |
| eslint      | ^9       | Linter for JavaScript/React code |

## ⚙️ Configuration

- Authentication Providers: Configured via .env.local and passed to NextAuth.

- MongoDB: Used as the database adapter for NextAuth.

- Tailwind CSS: Installed and configured via PostCSS.

## 🧪 Examples

You can integrate custom sign-in pages, restrict routes, or extend user profiles. Examples will be added in future updates. Let me know if you'd like help with specific use cases.

## 🧯 Troubleshooting

- Ensure all OAuth credentials are correctly set in .env.local.

- Check that your MongoDB URI is accessible from your environment.

- For deployment, remember to set all environment variables in your hosting platform (e.g., Vercel, Netlify).

## 👥 Contributors

- Your Name – your-website.com

Feel free to add more contributors as needed.

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for more information.
