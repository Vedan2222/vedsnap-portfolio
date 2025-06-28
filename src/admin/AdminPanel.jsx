import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function AdminPanel() {
  const handleLogout = () => {
    signOut(auth);
  };

  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  const [category, setCategory] = useState("Project");
  const [mediaList, setMediaList] = useState([]);
  const [issuer, setIssuer] = useState("");
  const [date, setDate] = useState("");

  const categories = ["Project", "Skills", "Certifications"];

  useEffect(() => {
    const storedMedia =
      JSON.parse(localStorage.getItem("portfolioMedia")) || [];
    setMediaList(storedMedia);
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");
    if (category === "Project" && !description.trim())
      return alert("Please enter a description");
    if (category === "Certifications" && (!issuer.trim() || !date))
      return alert("Please enter issuer and date");

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Upload failed");
      }

      const existingMedia =
        JSON.parse(localStorage.getItem("portfolioMedia")) || [];

      let newMedia;

      if (category === "Skills") {
        const fileName = file.name.split(".")[0];
        newMedia = {
          name: fileName,
          img: data.url,
          category: "Skills",
        };

        const filtered = existingMedia.filter(
          (media) => !(media.category === "Skills" && media.name === fileName)
        );
        const updatedMedia = [...filtered, newMedia];
        localStorage.setItem("portfolioMedia", JSON.stringify(updatedMedia));
        setMediaList(updatedMedia);
      } else if (category === "Certifications") {
        newMedia = {
          url: data.url,
          name: data.name,
          type: data.type.startsWith("video") ? "video" : "image",
          description: description.trim(),
          issuer: issuer.trim(),
          date: date,
          category,
          createdAt: new Date().toISOString(),
        };

        const updatedMedia = [...existingMedia, newMedia];
        localStorage.setItem("portfolioMedia", JSON.stringify(updatedMedia));
        setMediaList(updatedMedia);
      } else {
        newMedia = {
          url: data.url,
          name: data.name,
          type: data.type.startsWith("video") ? "video" : "image",
          description: description.trim(),
          category,
          createdAt: new Date().toISOString(),
        };

        const updatedMedia = [...existingMedia, newMedia];
        localStorage.setItem("portfolioMedia", JSON.stringify(updatedMedia));
        setMediaList(updatedMedia);
      }

      alert("Upload successful!");
      setFile(null);
      setDescription("");
      setIssuer("");
      setDate("");
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed. Check console.");
    }

    setUploading(false);
  };

  const handleDelete = (name) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this?"
    );
    if (!confirmDelete) return;

    const existingMedia =
      JSON.parse(localStorage.getItem("portfolioMedia")) || [];
    const updatedMedia = existingMedia.filter((media) => media.name !== name);

    localStorage.setItem("portfolioMedia", JSON.stringify(updatedMedia));
    setMediaList(updatedMedia);
    alert("Deleted successfully!");
  };

  return (
    <div className="min-h-screen p-8 bg-black text-white">
      <h1 className="text-3xl font-bold mb-6">
        Admin Panel - Manage Portfolio
      </h1>

      <div className="mb-10">
        {/* Category Selector */}
        <div className="mb-4">
          <label className="mr-2 text-gray-300">Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-black border border-white text-gray-300 px-4 py-2 rounded-md"
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* File Picker */}
        <div className="mb-4">
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-500 h-40 w-64 cursor-pointer rounded-lg">
            <span className="text-4xl text-gray-400">+</span>
            <span className="text-sm text-gray-400">Choose file</span>
            <input
              type="file"
              accept="image/*,video/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
          {file && <p className="mt-2 text-sm">{file.name}</p>}
        </div>

        {/* Description Field */}
        {category !== "Project" || "Certifications" && (
          <div className="mb-4">
            <label className="block text-sm mb-1 text-gray-300">
              Description:
            </label>
            <textarea
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full max-w-md px-4 py-2 bg-black border border-white text-white rounded-md resize-none"
              placeholder="Enter a short description for this media..."
            />
          </div>
        )}

        {/* Certification-specific fields */}
        {category === "Certifications" && (
          <>
            <div className="mb-4">
              <label className="block text-sm mb-1 text-gray-300">Issuer:</label>
              <input
                type="text"
                value={issuer}
                onChange={(e) => setIssuer(e.target.value)}
                className="w-full max-w-md px-4 py-2 bg-black border border-white text-white rounded-md"
                placeholder="Enter issuer name (e.g., Coursera)"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-1 text-gray-300">
                Issue Date:
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full max-w-md px-4 py-2 bg-black border border-white text-white rounded-md"
              />
            </div>
          </>
        )}

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          disabled={uploading}
          className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded text-white"
        >
          {uploading ? "Uploading..." : "Upload Media"}
        </button>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Uploaded Media</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {mediaList.map((media) => (
          <div
            key={media.name}
            className="relative border border-gray-700 rounded overflow-hidden"
          >
            {media.type === "video" ? (
              <video
                src={media.url}
                controls
                className="w-full h-48 object-cover"
              />
            ) : media.img ? (
              <img
                src={media.img}
                alt={media.name}
                className="w-full h-48 object-cover"
              />
            ) : (
              <img
                src={media.url}
                alt={media.category}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 text-center text-xs bg-black bg-opacity-50 text-gray-300 py-1">
              {media.category}
            </div>
            <button
              onClick={() => handleDelete(media.name)}
              className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white text-xs px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}

        <div>
          <button
            onClick={handleLogout}
            className="bg-orange-500/90 backdrop-blur-lg text-white px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300 shadow-xl"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
