import React, { useState } from "react";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogInput, setBlogInput] = useState({
    title: "",
    content: "",
    writer: "",
    image: null,
  });
  const [editingIndex, setEditingIndex] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogInput({ ...blogInput, [name]: value });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBlogInput({ ...blogInput, image: URL.createObjectURL(file) });
    }
  };

  // Add or update blog
  const handleSave = () => {
    if (!blogInput.title || !blogInput.content || !blogInput.writer) {
      alert("Please fill in all fields.");
      return;
    }

    if (editingIndex !== null) {
      const updatedBlogs = [...blogs];
      updatedBlogs[editingIndex] = blogInput;
      setBlogs(updatedBlogs);
      setEditingIndex(null);
    } else {
      setBlogs([...blogs, blogInput]);
    }
    setBlogInput({ title: "", content: "", writer: "", image: null });
  };

  // Edit blog
  const handleEdit = (index) => {
    setBlogInput(blogs[index]);
    setEditingIndex(index);
  };

  // Delete blog
  const handleDelete = (index) => {
    const updatedBlogs = blogs.filter((_, i) => i !== index);
    setBlogs(updatedBlogs);
  };

  // Remove image
  const handleRemoveImage = () => {
    setBlogInput({ ...blogInput, image: null });
  };

  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-r from-purple-50 via-white to-purple-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="mb-8 text-4xl font-bold text-center text-purple-800">
          User Blogs
        </h1>

        {/* Blog Form */}
        <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            {editingIndex !== null ? "Edit Blog" : "Create a Blog"}
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              name="writer"
              placeholder="Writer Name"
              value={blogInput.writer}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <input
              type="text"
              name="title"
              placeholder="Blog Title"
              value={blogInput.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <textarea
              name="content"
              rows="4"
              placeholder="Blog Content"
              value={blogInput.content}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            ></textarea>
            <div className="space-y-2">
              {blogInput.image ? (
                <div className="relative w-full max-w-sm">
                  <img
                    src={blogInput.image}
                    alt="Uploaded"
                    className="w-full h-auto rounded-lg"
                  />
                  <button
                    onClick={handleRemoveImage}
                    className="absolute px-2 py-1 text-sm text-white bg-red-500 rounded top-2 right-2 hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              )}
            </div>
            <button
              onClick={handleSave}
              className="px-6 py-2 font-semibold text-white bg-purple-500 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {editingIndex !== null ? "Update Blog" : "Save Blog"}
            </button>
          </div>
        </div>

        {/* Blog List */}
        <div className="space-y-6">
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div
                key={index}
                className="relative p-6 bg-white rounded-lg shadow-md"
              >
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  {blog.title}
                </h3>
                <p className="mb-4 text-gray-600">{blog.content}</p>
                <p className="text-sm italic text-gray-500">
                  Written by: {blog.writer}
                </p>
                {blog.image && (
                  <img
                    src={blog.image}
                    alt="Blog"
                    className="w-full h-auto mt-4 rounded-lg"
                  />
                )}
                <div className="absolute flex space-x-2 top-4 right-4">
                  <button
                    onClick={() => handleEdit(index)}
                    className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No blogs yet. Start writing!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
