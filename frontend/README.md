This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
run Your Application:
npm run dev

Build Your Application:
npm run build

Start the Production Server:
npm start

Install open-cli:
npm install open-cli --save-dev

Then update them if necessary:
npm update

Update Dependencies: Ensure that you have the latest versions of your packages:
npm outdated

Clear npm Cache:
npm cache clean --force

Run `npm audit` for details.
npm audit fix
npm audit fix --force

# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


------------------------------Routes------------------

----user ---
http://localhost:3000/user/home
http://localhost:3000/user-profile/profile

----service-provider----
http://localhost:3000/service-provider/analytics


---auth---
http://localhost:3000/auth/login

---Forgot-password---
http://localhost:3000/auth/forgot-password/set-email
http://localhost:3000/auth/forgot-password/set-otp
http://localhost:3000/auth/forgot-password/set-new-password
http://localhost:3000/auth/forgot-password/set-phone-number


---sign-up---
http://localhost:3000/auth/sign-up/choose-account
http://localhost:3000/auth/sign-up/create-account
http://localhost:3000/auth/sign-up/fill-information
http://localhost:3000/auth/sign-up/profile-pic
http://localhost:3000/auth/sign-up/set-location
http://localhost:3000/auth/sign-up/terms-and-conditions
http://localhost:3000/auth/sign-up/verify-otp

