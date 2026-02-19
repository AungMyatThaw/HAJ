import { RequestHandler } from "express";
import fs from "fs";
import path from "path";

const postsFile = path.join(process.cwd(), "posts.json");

interface Post {
  id: string;
  image: string;
  text: string;
  timestamp: number;
  createdAt: string;
}

// Ensure posts file exists
function ensurePostsFile() {
  if (!fs.existsSync(postsFile)) {
    fs.writeFileSync(postsFile, JSON.stringify([], null, 2));
  }
}

// Read posts from file
function readPosts(): Post[] {
  ensurePostsFile();
  const data = fs.readFileSync(postsFile, "utf-8");
  return JSON.parse(data);
}

// Write posts to file
function writePosts(posts: Post[]) {
  fs.writeFileSync(postsFile, JSON.stringify(posts, null, 2));
}

// Get all posts
export const getPosts: RequestHandler = (req, res) => {
  try {
    const posts = readPosts();
    // Return posts in reverse order (newest first)
    res.json(posts.reverse());
  } catch (error) {
    console.error("Error reading posts:", error);
    res.status(500).json({ error: "Failed to read posts" });
  }
};

// Create a new post
export const createPost: RequestHandler = (req, res) => {
  try {
    const { image, text } = req.body;

    // Validate input
    if (!image || !text) {
      return res.status(400).json({ error: "Image and text are required" });
    }

    const posts = readPosts();
    const newPost: Post = {
      id: Date.now().toString(),
      image,
      text,
      timestamp: Date.now(),
      createdAt: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    posts.push(newPost);
    writePosts(posts);

    res.json({ success: true, post: newPost });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Failed to create post" });
  }
};

// Delete a post (admin only)
export const deletePost: RequestHandler = (req, res) => {
  try {
    const { id } = req.params;
    const posts = readPosts();
    const filteredPosts = posts.filter((p) => p.id !== id);

    if (filteredPosts.length === posts.length) {
      return res.status(404).json({ error: "Post not found" });
    }

    writePosts(filteredPosts);
    res.json({ success: true });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ error: "Failed to delete post" });
  }
};
