# mongo
MONGO_URL=mongodb+srv://admin:TS2qXq40BCcH9IQx@cluster-node-express.2uca2hg.mongodb.net/task-manager?retryWrites=true&w=majority
Explain:
1. user: 
    ```shell
    admin
    ```
2. password: 
    ```shell
    TS2qXq40BCcH9IQx
    ```
3. database: 
    ```shell
    task-manager
    ```
# To read env
1. install package: 
    ```shell
    dotenv
    ```
2. in the js file: 
    ```shell
    require('dotenv').config();
    ```
3. then retrieve: ex: have one variable name MONGO_URL in .env 
    ```shell
    process.env.MONGO_URL
    ```

# notFound middleware:
 - it likes a default route handler
# middlewares: (https://expressjs.com/en/guide/using-middleware.html)
    - Execute any code.
    - Make changes to the request and the response objects.
    - End the request-response cycle.
    - Call the next middleware function in the stack: next() 

# in .env file, add 
    MONGO_URI=mongodb+srv://admin:TS2qXq40BCcH9IQx@cluster-node-express.2uca2hg.mongodb.net/task-manager?retryWrites=true&w=majority    
