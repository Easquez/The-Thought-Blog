// Insert

const createBlogSchema = {
  schema: {
    description: "Blog schema",
    body: {
      type: "object",
      properties: {
        title: {
          type: "string",
          default: "Blog Title",
          examples: ["My First Blog"],
        },
        body: {
          type: "string",
          default: "Blog Content",
          examples: ["This is my first blog post."],
        },
      },
    },
    response: {
      200: {
        type: "object",
        properties: {
          status: { type: "boolean", default: true, examples: ["true"] },
          message: {
            type: "string",
            default: "Blog created successfully",
            examples: ["Blog created successfully"],
          },
        },
      },
      404: {
        type: "object",
        properties: {
          status: { type: "boolean", default: false, examples: ["false"] },
          message: {
            type: "string",
            default: "Error: Blog not found",
            examples: ["Error: Blog not found"],
          },
        },
      },
    },
  },
};

module.exports = createBlogSchema;

// Delete

const deleteBlogSchema = {
  schema: {
    description: "Blog schema",
    response: {
      200: {
        type: "object",
        properties: {
          status: { type: "boolean", default: true },
          message: {
            type: "string",
            default: "Blog deleted successfully",
            examples: ["Blog deleted successfully"],
          },
        },
      },
      404: {
        type: "object",
        properties: {
          status: { type: "boolean", default: false },
          message: {
            type: "string",
            default: "Error: Blog not found",
            examples: ["Error: Blog not found"],
          },
        },
      },
    },
  },
};

module.exports = deleteBlogSchema;

// Get One

const getOneBlogSchema = {
  schema: {
    description: "Blog schema",
    response: {
      200: {
        type: "object",
        description: "Blog found",
        properties: {
          _id: { type: "string", example: "60f135b00f1c052cd8f3a0cc" },
          title: { type: "string", example: "My First Blog" },
          body: { type: "string", example: "This is my first blog post." },
        },
      },
      404: {
        type: "object",
        description: "Error: Blog not found",
        properties: {
          status: { type: "boolean", example: false },
          message: { type: "string", example: "Error: Blog not found" },
        },
      },
    },
  },
};

module.exports = getOneBlogSchema;

// Get All

const getAllBlogsSchema = {
  response: {
    200: {
      type: "array",
      description: "Blogs found",
      items: {
        type: "object",
        properties: {
          _id: { type: "string", example: "60f135b00f14052cd8f3a0d3" },
          title: { type: "string", example: "My First Blog" },
          body: { type: "string", example: "This is my first blog post." },
        },
      },
    },
    404: {
      type: "object",
      description: "Error: Blogs not found",
      properties: {
        status: { type: "boolean", example: false },
        message: { type: "string", example: "Error: Blogs not found" },
      },
    },
    500: {
      type: "object",
      description: "Error with server",
      properties: {
        status: { type: "boolean", example: false },
        message: { type: "string", example: "Internal server error" },
      },
    },
  },
};

module.exports = getAllBlogsSchema;

// Update

const updateBlogSchema = {
  schema: {
    description: "Blog schema",
    body: {
      type: "object",
      properties: {
        title: {
          type: "string",
          default: "Blog Title",
          examples: ["My Updated Blog"],
        },
        body: {
          type: "string",
          default: "Blog Content",
          examples: ["This is my updated blog post."],
        },
      },
    },
    response: {
      200: {
        type: "object",
        properties: {
          status: { type: "boolean", default: true, examples: ["true"] },
          message: {
            type: "string",
            default: "Blog updated successfully",
            examples: ["Blog updated successfully"],
          },
        },
      },
      500: {
        type: "object",
        properties: {
          status: { type: "boolean", default: false, examples: ["false"] },
          message: {
            type: "string",
            default: "Error: Server error",
            examples: ["Error: Server error"],
          },
        },
      },
    },
  },
};

module.exports = updateBlogSchema;
