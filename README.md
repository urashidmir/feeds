# How to run

Clone the repository.

Open the feeds folder.

Run "npm Install".

Run "node index.js".
 

# Get feeds for a post

Open the web browser.

Copy post id to get feeds related a particular post in the URL:
http://localhost:3001/feeds/{post-id}


# Post a new feed

Send a POST request to the URL:
http://localhost:3001/feeds/

The body may contain data e.g.

  {
    "type": "Like",
    "read": false,
    "post": {
      "id": "b1638f970c3ddd528671df76c4dcf12f",
      "title": "Excellent work"
    },
    "user": {
      "id": "403f220c3d413fe9cb0b36142ebfb35t",
      "name": "Umar"
    }
  }

If the feed is successfully saved, the message appears in the response.

# Modify the read status of a feed

Send a PATCH request to the URL:
http://localhost:3001/feeds/

The body may contain data e.g.
{
    "postid": "b1638f970c3ddd528671df76c4dcf12f",
    "userid": "403f220c3d413fe9cb0b36142ebfb35t"
}

If the read status is successfully changed, the message appears in the response.
