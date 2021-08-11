1. Introduction
    1. Review Shopping Cart Features
        1. Fully-Functional Shopping Cart
        2. Instant Feedback 
        3. Animated and Intuitive Design
        4. List Products
        5. Sort Products By Price High or Low
        6. Filter Products by Size 
        7. Open Modal By Click on Product  
        8. Add Product To Cart using Animation
        9. Handle Multiple Click By Adding More Items
        10. Remove Product
        11. Show Checkout Form
        12. Create Order with user friendly id
        13. Admin Section to see list of products
        14. Using postman to add or remove products and orders
2. Tools and Technologies
    1. JavaScript
        1. Arrow Functions
        2. Array Functions
        3. Spread Operators
        4. Deconstructing assignments
        5. Local Storage
    2. React
        1. react-router-dom
        2. react-reveal
        3. react-modal
    3. Redux
        1. react-redux
        2. redux-thunk
    4. Node
        1. express
        2. body-parser
        3. Environment Variables
        4. nodemon
    5. MongoDB
        1. mongoose
        2. shortid
    6. Development
        1. VS Code
            1. JavaScript (ES6) Code Snippets
            2. ES 7 React Extension
            3. ESLint Extension
            4. Node Debug
            5. CSS Peek
        2. Chrome
            1. React Developer Tools
            2. Redux Developer Tools
        3. Git
        4. Github
        5. 

    9. Add Modal and Animation
        1. Set Active Task Management Spreadsheet
        2. Create branch animation-modal
        3. Show Animation 
        4. Install react-reveal
        5. Create fade effect from bottom for products
        6. Create fade left for add to cart
        7. Create fade right for show checkout form
        8. Open Modal by click on product image
        9. Install react-modal
        10. Products.js
        11. Import Modal
        12. Set state for product to null
        13. Define openModal and closeModal
        14. Show Modal if product exist
        15. Create Modal
        16. Create zoom effect for modal
        17. index.css
        18. Style Product Details
        19. Commit and Publish changes
        20. Pull request, merge, change to master
        21. Task Management Spreadsheet set it done
    10. Create Products Backend
        1. Install nodemon globally
        2. Add sever.js
        3. Install express body-parser mongoose shortid
        4. Install MongoDB
        5. app = express()
        6. app.use(bodyParser.json())
        7. mongoose.connect()
        8. create Product model
        9. app.post("/api.products")
        10. Postman send post request
        11. route.get("/api/products")
        12. route.delete("/api/products/:id")
    11. Add Redux
        1. What is Redux (diagram)
        2. update task on spreadsheet
        3. create branch add-redux-products
        4. npm install redux react-redux redux-thunk
        5. import redux
        6. set initial state
        7. create types
        8. types.js
        9. define FETCH_PRODUCTS
        10. actions/productActions.js
        11. declare fetchProducts
        12. create reducers
        13. reducers/productReducers.js
        14. define case FETCH_PRODUCTS
        15. create store
        16. store.js
        17. 
