[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/98M6M_Z1)
# NodeJS - PostgreSQL Prisma Assignment Exercise

**Goal:** Get familiar with NodeJS, Express, and Prisma integration using PostgreSQL with MVC structure.

## Instructions

1. Run `npm install` to install all the necessary packages.
2. Open Postgres CLI, and create a database user called `shopowner` with the password `12345` *(Not a safe password but only for now!)*.
3. Create a database called `awesome_shop` and assign `shopowner` as the owner and grant them full privileges to the database:

    **Full SQL commands:**

    ```bash
    CREATE USER shopowner WITH PASSWORD '12345';
    CREATE DATABASE awesome_shop;
    GRANT ALL PRIVILEGES ON DATABASE awesome_shop TO shopowner;
    ALTER DATABASE awesome_shop OWNER TO shopowner;
    ALTER USER shopowner CREATEDB;
    ```

4. Initialize Prisma by running `npx prisma init` on your VS Code terminal. This will create a `prisma/schema.prisma` file and update your `.env` file with the `DATABASE_URL` which you need to edit to the credentials you created in the earlier steps.
5. Update the `schema.prisma` file and add a model for `Product`:

    ```ts
    model Product {
      id          Int             @id @default(autoincrement())
      productName String
      price       Decimal
    }
    ```

6. Run `npx prisma migrate dev --name awesome-shop-products` to create and apply the migration file to the database and generate your Prisma client. If you make changes to the schema, you need to run this command again.
7. Create your CRUD functionality by creating your MVC files:

    - `product.model.ts`
    - `product.controller.ts`
    - `product.routes.ts`

8. Test your API routes using Postman and verify that you are able to do CRUD.
9. Once you are done, commit and push your changes.

Good luck! :)
