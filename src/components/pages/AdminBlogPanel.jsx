import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { getAllPosts, deletePost, createPost, updatePost } from '../../services/blogServices';

function AdminBlogPanel() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [form, setForm] = useState({
    title: '',
    author: '',
    slug: '',
    content_md: '',
    summary: '',
    read_time: 3,
    cover_image: '',
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await getAllPosts(1, 100); // fetch many for admin
    setPosts(res.blogs);
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    fetchPosts();
  };



  const handleEdit = (post) => {
    setEditingPost(post.id);
    setForm({
      title: post.title,
      slug: post.slug, // ✅ add this
      author: post.author,
      content_md: post.content_md,
      summary: post.summary,
      read_time: post.read_time,
      cover_image: post.cover_img
    });
  };

  const handleSubmit = async () => {
    if (editingPost) {
      await updatePost(editingPost, form);
    } else {
      await createPost(form);
    }
    setForm({ title: '', author: '', content_md: '', summary: '', read_time: 3, cover_image: '' });
    setEditingPost(null);
    fetchPosts();
  };

  return (
    <div className="p-6 bg-[#f8f8f8] min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Admin Blog Panel</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        <div>
          <input
            type="text"
            placeholder="Title"
            className="w-full p-2 mb-2 border"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Author"
            className="w-full p-2 mb-2 border"
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
          />
          <input
            type="text"
            placeholder="Summary"
            className="w-full p-2 mb-2 border"
            value={form.summary}
            onChange={(e) => setForm({ ...form, summary: e.target.value })}
          />
          <input
            type="text"
            placeholder="Cover Image URL"
            className="w-full p-2 mb-2 border"
            value={form.cover_image}
            onChange={(e) => setForm({ ...form, cover_image: e.target.value })}
          />
          <input
            type="text"
            placeholder="Slug (e.g. eco-renovation-guide)"
            className="w-full p-2 mb-2 border"
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
          />
          <input
            type="number"
            placeholder="Read Time (min)"
            className="w-full p-2 mb-2 border"
            value={form.read_time}
            onChange={(e) => setForm({ ...form, read_time: e.target.value })}
          />
          <textarea
            rows="10"
            placeholder="Markdown Content"
            className="w-full p-2 mb-2 border"
            value={form.content_md}
            onChange={(e) => setForm({ ...form, content_md: e.target.value })}
          />
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-4 py-2 mt-2 rounded hover:bg-green-700"
          >
            {editingPost ? 'Update Post' : 'Create Post'}
          </button>
        </div>

        {/* Markdown Preview */}
        <div className="p-4 border rounded bg-white overflow-auto">
          <h2 className="text-xl font-semibold mb-2">Markdown Preview</h2>
          <ReactMarkdown>{form.content_md}</ReactMarkdown>
        </div>
      </div>

      {/* Post List */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Existing Posts</h2>
        <div className="grid grid-cols-1 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="border p-4 bg-white rounded shadow-sm flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-600">By {post.author}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(post)}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminBlogPanel;
