const Koa = require('koa');
const cors = require('@koa/cors');
const KoaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser');
const KoaJson = require('koa-json');

//setup server/router
const server = new Koa();
const router = new KoaRouter();

//load json module, makes output prettier
server.use(KoaJson());
//parser middleware, to parse ctx
server.use(bodyParser());
//allow cors
server.use(cors());
//router middleware, allow routes
server.use(router.routes()).use(router.allowedMethods());



//////////////////////
// REST ACTIONS / DB FUNCTIONS
//////////////////////
//get all books from the db
const getAllItems = async (ctx) => {
    ctx.body = [{},{}];
}

//get a single book from db, based on book_id
const getItem = async (item_id) => {
    return {};
}

//add a single book to the db
const addItem = async (ctx) => {
    const body = ctx.request.body;
    ctx.body = [{},{},body];
}
//////////////////////
// END: REST ACTIONS / DB FUNCTIONS
//////////////////////


//define routes
router.get("/", async (ctx) => ctx.body = "Hello World.");
router.get("/items", getAllItems);
router.get("/items/:item_id", async (ctx) => ctx.body = await getItem(ctx.params.item_id));
router.post("/items", addItem);
//router.put("/items/:item_id", updateItem);
//router.delete("/items/:item_id", async (ctx) => ctx.body = await deleteItem(ctx.params.item_id));


//start server
const port = process.env.SERVER_PORT || 2222;
server.listen(port, () => console.log(`server listening on http://localhost:${port}`));2