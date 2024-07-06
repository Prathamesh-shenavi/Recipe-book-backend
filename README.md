
# Recipe Book Backend 

All needed APIs are ready to use !!


## API Reference
### Base URL : https://recipe-book-backend-au6o.onrender.com/api/
Note: Use JSON format to send data in body for all APIs.
## User Endpoints
### 1. Create User
An API to store user data ( username & Password ) in a MongoDB database.

```http
  Method:   POST 
  Endpoint:  /users
```

| Body Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `uaername` | `string` |  Name of User   *[ Required & Unique ]* |
| `password` | `string` |  password   *[ Required ]* |


Success Response Example:
```bash
{
    "statusCode": 201,
    "data": {
        "username": "User 1",
        "password": "123",
        "_id": "66897459922bef875d46dea0",
        "__v": 0
    },
    "message": "User created successfully",
    "success": true
}
```

#### 2. Get User By Username
An API that fetches and returns data of a user based on username.

```http
  Method:   GET 
  Endpoint:  /users/:username
```
Success Response Example:
```bash
{
    "statusCode": 200,
    "data": {
        "user": {
            "_id": "66897459922bef875d46dea0",
            "username": "User 1",
            "password": "123",
            "__v": 0
        }
    },
    "message": "User found with name: User 1",
    "success": true
}
```
### 3. Update User [ username & password]
An API to update a user's username/password in the database.

```http
  Method:   PUT 
  Endpoint:  /users/:id
```

| Body Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` |  Name of User |
| `password` | `string` |  password|


Success Response :
```bash
{
    "statusCode": 200,
    "data": {
        "newUser": {
            "_id": "66897459922bef875d46dea0",
            "username": "user 1",
            "password": "123",
            "__v": 0
        }
    },
    "message": "User updated",
    "success": true
}
```
## Recipe Endpoints:
### 1. Get All Recipes
An API to get all Recipes.

```http
  Method:   GET 
  Endpoint:  /recipes
```


Success Response :
```bash
{
    "statusCode": 200,
    "data": [
        {
            "_id": "6688d7429bda8aebb0e4ff5c",
            "title": "Spaghetti",
            "author": "Manish",
            "description": "A New classic Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
            "category": "Pasta ",
            "ingredients": [
                "8 ounces spaghetti",
                "2 large eggs",
                "1/2 cup grated Parmesan cheese",
                "4 ounces pancetta or bacon, diced",
                "2 cloves garlic, minced",
                "Salt and freshly ground black pepper, to taste",
                "Chopped fresh parsley, for garnish (optional)"
            ],
            "instructions": [
                "In a large pot of boiling salted water, cook spaghetti according to package instructions until al dente. Reserve 1/2 cup of pasta water; drain well.",
                "In a small bowl, whisk together eggs and Parmesan; set aside.",
                "Heat a large skillet over medium heat. Add pancetta and cook until brown and crispy, about 5-7 minutes. Add garlic and cook until fragrant, about 1 minute.",
                "Reduce heat to low. Add cooked spaghetti to the skillet and quickly toss to combine. Remove from heat and slowly whisk in egg mixture, stirring constantly to prevent scrambling. If the sauce is too thick, add reserved pasta water, 1 tablespoon at a time, until desired consistency is reached.",
                "Season with salt and pepper to taste. Serve immediately, garnished with chopped parsley if desired."
            ],
            "prep_time": 30,
            "cook_time": 10,
            "total_time": 40,
            "servings": 4,
            "__v": 0
        },
        {
            "_id": "6688daf6f59ce55a3040a72a",
            "title": "Omlet By Manish",
            "author": "Manish",
            "description": "Very Tasty ",
            "category": "Eggs",
            "ingredients": [
                "2 eggs",
                "oil"
            ],
            "instructions": [
                "Cook",
                "Eat",
                "Enjoy"
            ],
            "prep_time": 3,
            "cook_time": 4,
            "total_time": 7,
            "servings": 2,
            "__v": 0
        },
        {
            "_id": "6688e2407c1a6c98918e75a7",
            "title": "Pizza",
            "author": "Raj",
            "description": "Tasty Pizza",
            "category": "Pizza",
            "ingredients": [
                "Butter",
                "Bread",
                "Pan",
                "Vegetables",
                "Sauces"
            ],
            "instructions": [
                "Home made"
            ],
            "prep_time": 12,
            "cook_time": 15,
            "total_time": 27,
            "servings": 2,
            "__v": 0
        }
    ],
    "message": "All Recipes are fetched",
    "success": true
}
```
### 2. Get Recipes By Author
An API to get recipes by Author.

```http
  Method:   GET 
  Endpoint:  /recipes/?author=<username>
```

| Query Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `author` | `string` |  username of User |

Success Response:
```bash
{
    "statusCode": 200,
    "data": [
        {
            "_id": "6688d7429bda8aebb0e4ff5c",
            "title": "Spaghetti",
            "author": "Manish",
            "description": "A New classic Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
            "category": "Pasta ",
            "ingredients": [
                "8 ounces spaghetti",
                "2 large eggs",
                "1/2 cup grated Parmesan cheese",
                "4 ounces pancetta or bacon, diced",
                "2 cloves garlic, minced",
                "Salt and freshly ground black pepper, to taste",
                "Chopped fresh parsley, for garnish (optional)"
            ],
            "instructions": [
                "In a large pot of boiling salted water, cook spaghetti according to package instructions until al dente. Reserve 1/2 cup of pasta water; drain well.",
                "In a small bowl, whisk together eggs and Parmesan; set aside.",
                "Heat a large skillet over medium heat. Add pancetta and cook until brown and crispy, about 5-7 minutes. Add garlic and cook until fragrant, about 1 minute.",
                "Reduce heat to low. Add cooked spaghetti to the skillet and quickly toss to combine. Remove from heat and slowly whisk in egg mixture, stirring constantly to prevent scrambling. If the sauce is too thick, add reserved pasta water, 1 tablespoon at a time, until desired consistency is reached.",
                "Season with salt and pepper to taste. Serve immediately, garnished with chopped parsley if desired."
            ],
            "prep_time": 30,
            "cook_time": 10,
            "total_time": 40,
            "servings": 4,
            "__v": 0
        },
        {
            "_id": "6688daf6f59ce55a3040a72a",
            "title": "Omlet By Manish",
            "author": "Manish",
            "description": "Very Tasty ",
            "category": "Eggs",
            "ingredients": [
                "2 eggs",
                "oil"
            ],
            "instructions": [
                "Cook",
                "Eat",
                "Enjoy"
            ],
            "prep_time": 3,
            "cook_time": 4,
            "total_time": 7,
            "servings": 2,
            "__v": 0
        }
    ],
    "message": "Recipes are fetched by Author Manish",
    "success": true
}
```
Response if username is not exists :
```bash
{
    "statusCode": 200,
    "data": [],
    "message": "Recipes are fetched by Author user",
    "success": true
}
```
### 3. Get Recipe By id
An API that fetches and returns recipe based on id.

```http
  Method:   GET 
  Endpoint:  /recipes/:id
```
Success Response Example:
```bash
{
    "statusCode": 200,
    "data": {
        "_id": "6688daf6f59ce55a3040a72a",
        "title": "Omlet By Manish",
        "author": "Manish",
        "description": "Very Tasty ",
        "category": "Eggs",
        "ingredients": [
            "2 eggs",
            "oil"
        ],
        "instructions": [
            "Cook",
            "Eat",
            "Enjoy"
        ],
        "prep_time": 3,
        "cook_time": 4,
        "total_time": 7,
        "servings": 2,
        "__v": 0
    },
    "message": "Recipe is fetched by Id 6688daf6f59ce55a3040a72a",
    "success": true
}
```
## 4. Add Recipe
An API to add recipe.

```http
  Method:   POST 
  Endpoint:  /recipes
```

| Body Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` |  title of redipe |
| `author` | `string` |  author of redipe |
| `description` | `string` |  description of redipe |
| `category` | `string` |  category of redipe |
| `ingredients` | `string[]` |  ingredients for redipe |
| `instructions` | `string[]` |  instructions for redipe |
| `prep_time` | `Number` |  prep_time of redipe |
| `cook_time` | `Number` |  cook_time of redipe |
| `total_time` | `Number` |  total_time of redipe |
| `servings` | `Number` |  servings for redipe |
   

Success Response:
```bash
{
    "statusCode": 201,
    "data": {
        "redipe": {
            "title": "TEST",
            "author": "user 1",
            "description": "test.",
            "category": "test",
            "ingredients": [
                "Test item 1",
                "Test item 2"
            ],
            "instructions": [
                "Test 1"
            ],
            "prep_time": 10,
            "cook_time": 15,
            "total_time": 25,
            "servings": 2,
            "_id": "66897841922bef875d46deac",
            "__v": 0
        }
    },
    "message": "Recipe created",
    "success": true
}
```
## 5. Update Recipe
An API to update recipe.

```http
  Method:   PUT 
  Endpoint:  /recipes/:id
```

| Body Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` |  title of redipe |
| `author` | `string` |  author of redipe |
| `description` | `string` |  description of redipe |
| `category` | `string` |  category of redipe |
| `ingredients` | `string[]` |  ingredients for redipe |
| `instructions` | `string[]` |  instructions for redipe |
| `prep_time` | `Number` |  prep_time of redipe |
| `cook_time` | `Number` |  cook_time of redipe |
| `total_time` | `Number` |  total_time of redipe |
| `servings` | `Number` |  servings for redipe |
   

Success Response:
```bash
{
    "statusCode": 200,
    "data": {
        "redipe": {
            "_id": "66897841922bef875d46deac",
            "title": "TEST",
            "author": "user 1",
            "description": "test.",
            "category": "test",
            "ingredients": [
                "Test item 1",
                "Test item 2"
            ],
            "instructions": [
                "Test 1"
            ],
            "prep_time": 10,
            "cook_time": 15,
            "total_time": 25,
            "servings": 4,
            "__v": 0
        }
    },
    "message": "Recipe updated",
    "success": true
}
```
## 6. Delete Recipe
An API to Delete recipe.

```http
  Method:   Delete 
  Endpoint:  /recipes/:id
```
Success Response:
```bash
{
    "statusCode": 200,
    "data": {
        "_id": "66897841922bef875d46deac",
        "title": "TEST",
        "author": "user 1",
        "description": "test.",
        "category": "test",
        "ingredients": [
            "Test item 1",
            "Test item 2"
        ],
        "instructions": [
            "Test 1"
        ],
        "prep_time": 10,
        "cook_time": 15,
        "total_time": 25,
        "servings": 4,
        "__v": 0
    },
    "message": "Recipe deleted by id 66897841922bef875d46deac",
    "success": true
}
```

## Tech Stack Used in this Project

Node , Express.js, render,mongoose


# Hi, I'm Prathamesh Shenavi! 👋

**Software Engineer**

- I worked as Backend Devloper Intern in **Loop Health, Pune** .

## 🛠 Skills
Javascript, JAVA, HTML, CSS, Node.js, Express.js, MongoDB, REST API...


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://prathamesh-shenavi.github.io/Resume-01/
)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/prathamesh-shenavi-4b8651228/
)

[🔗Internship Letter](https://drive.google.com/file/d/1a0vhyQwbuGfNpC-f9y5TF8oUWOzJs-wb/view)

[🔗Letter of Recommendation](https://drive.google.com/file/d/1JZehHK_pLBsM_hVdw1DJ0gAtcA4igZ3v/view)
