import express from "express";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
};

const users: User[] = [
  { id: "1", firstName: "Mark", lastName: "Silverstein", age: 43 },
  { id: "2", firstName: "Hans", lastName: "Fless", age: 56 },
  { id: "3", firstName: "Dave", lastName: "Gebroe", age: 34 },
];

const router = express.Router();

router.get("/:id", (req, res) => {
  const user = users.find((user) => user.id === req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(400);
    res.json({ error: "Invalid id" });
  }
});

router.get("/", (req, res) => {
  res.json(users);
});

export { router as UsersRouter };
