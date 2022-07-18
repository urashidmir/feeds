const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/:id", function (req, res, next) {
  fs.readFile("./db.json", "utf8", (err, data) => {
    if (err) {
      console.log(`Error reading file from disk: ${err}`);
    } else {

      const notifications = JSON.parse(data);
      const filtered = notifications? notifications.filter(
        (notification) => notification.post.id === req.params.id
      ):[];
      res.send(filtered);
    }
  });

});

router.post("/", function (req, res, next) {
  const notification =   {
    "type": req.body.type,
    "read": req.body.read,
    "post": {
      "id": req.body.post.id,
      "title": req.body.post.title
    },
    "user": {
      "id": req.body.user.id,
      "name": req.body.user.name
    }
  };

  const data = fs.readFileSync("./db.json");
  const notifications = JSON.parse(data);
  notifications.push(notification);

  const newData = JSON.stringify(notifications, null, 4);

  fs.writeFile("./db.json", newData, (err) => {
    if (err) {
      throw err;
      res.send("JSON data could not be saved");
    }
    res.send("JSON data is saved");
  });
});

router.patch("/", function (req, res, next) {
  const data = fs.readFileSync("./db.json");
  const notifications = JSON.parse(data);
  const updatedNotifications = notifications.map( (element) => {
    if (element.post.id === req.body.postid && element.user.id === req.body.userid) {
      return {... element, read: true};
    }
    return element;
  });


  const newData = JSON.stringify(updatedNotifications, null, 4);
  //console.log(newData);

  fs.writeFile("./db.json", newData, (err) => {
    if (err) {
      throw err;
      res.send("JSON data could not be saved");
    }
    res.send("JSON data is saved");
  });

});

module.exports = router;
