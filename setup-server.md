Sure — here’s a **quick start with Node.js + Express**.

### 1. Create a project

```bash
mkdir my-express-app
cd my-express-app
npm init -y
npm install express
```

### 2. Create `index.js`

```js
const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

### 3. Start the server

```bash
node index.js
```

Then open:

```text
http://localhost:3000
```

You'll get:

```text
Hello, Express!
```

And:

```text
http://localhost:3000/users
```

returns JSON.

### 4. Basic POST example

For APIs, you'll usually also parse JSON:

```js
app.use(express.json());

app.post("/lost", (req, res) => {
  const user = req.body;

  res.status(201).json({
    message: "User created",
    user
  });
});
```

You can test it with:

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Charlie"}'
```

**Mental model:**

```text
Browser/client
      ↓
   Express
      ↓
   Route
      ↓
Controller / logic
      ↓
   Response
```

So the core Express pattern is essentially:

```js
app.METHOD("/path", (req, res) => {
  // do something
  res.send(/* response */);
});
```

For example, `app.get()` handles GET requests, while `app.post()` handles POST requests.
