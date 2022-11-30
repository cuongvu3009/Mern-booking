# Software Development Skills: Full-Stack 2022-23

##  Demo: Updating soon

1. Fullname: Vu Duc Cuong
2. Email: cuongvu3009@gmail.com
3. Phone: +358465339075
4. Linkedin: https://www.linkedin.com/in/cuong-vu-duc/

## Preqrequisites

Install Node.js 18.0.0 or later version

## Setup the project

1. Create a `.env` file in the root of the server folder and add the following:

```
MONGO_URI = <YOUR_MONGO_URI>
PORT = <YOUR_PORT>
JWT = <YOUR_JWT_SECRET_KEY>
```
2. Go to server folder and run "npm install" to install the dependencies
3. Go to client folder and run "npm install" to install the dependencies
5. Create an account with {"username": String, "email": String, "password": String, "phone": String, "city": String, "country": String} in this routes (POST: localhost:5000/api/v1/auth/register), you can also add {"isAdmin": Boolean} when creating user, to make it admin. With isAdmin is true, you can able to create/update/delete hotels, create/update/delete rooms, get all users, verify user role. 

## Start the project

1. In server directory, run "npm run dev" to start the server
2. In client directory, run "npm start" to start the client side 
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes] can be accessed on [http://localhost:5000/api/v1/]. This endpoint can be edited in `server/server.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
