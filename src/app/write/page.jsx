"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState(""); // uploaded media URL
  const [catSlug, setCatSlug] = useState("travel");
  const [uploading, setUploading] = useState(false);
  const { status } = useSession();
  const router = useRouter();

  // Redirect unauthenticated users
  useEffect(() => {
    if (status === "unauthenticated") router.push("/");
  }, [status, router]);

  // Convert file to base64
  const convertToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });

  // Handle file upload to Cloudinary
const handleFileUpload = async (file) => {
  try {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Upload failed");

    setMedia(data.url);
    console.log("Uploaded media URL:", data.url);
  } catch (err) {
    console.error("Upload error:", err);
    alert("Upload failed. Please try again.");
  } finally {
    setUploading(false);
  }
};


  useEffect(() => {
    if (file) handleFileUpload(file);
  }, [file]);

  if (status === "loading") return <div>Loading...</div>;

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    if (!title || !value ) {
      alert("Please fill all fields and upload an image/video");
      return;
    }


    try {
      const plainDesc = value.replace(/<[^>]+>/g, ""); 
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          desc: plainDesc,
          img: media,
          slug: slugify(title),
          catSlug,
        }),
      });

      const text = await res.text();
      if (!text) throw new Error("Empty response from posts API");

      const data = JSON.parse(text);
      if (!res.ok) throw new Error(data.error || "Post creation failed");

      console.log("Post created successfully:", data);
      router.push("/");
    } catch (err) {
      console.error("Post submission error:", err);
      alert("Failed to submit post. Try again.");
    }
  };

  return (
    <div className="w-full">
      <div className="mt-10 mb-32 max-w-[1500px] mx-auto w-full h-full px-4 sm:px-6">
        <div className="relative flex flex-col gap-6">
          <input
            type="text"
            placeholder="Title"
            className="w-full text-4xl sm:text-7xl font-semibold bg-transparent border-none outline-none"
            onChange={(e) => setTitle(e.target.value)}
          />
        
          <select
            className="mb-12 bg-gray-200 text-xl font-bold text-black cursor-pointer px-5 py-2.5 w-max"
            value={catSlug}
            onChange={(e) => setCatSlug(e.target.value)}
          >
            <option value="style">style</option>
            <option value="fashion">fashion</option>
            <option value="food">food</option>
            <option value="culture">culture</option>
            <option value="travel">travel</option>
            <option value="coding">coding</option>
          </select>

          <div className="flex flex-wrap items-center gap-4 mt-2 relative">
            <button
              onClick={() => setOpen(!open)}
              className="w-12 h-12 cursor-pointer rounded-full border border-gray-500 flex items-center justify-center transition"
            >
              <Image src="/plus.png" alt="Add" width={20} height={20} />
            </button>

            {open && (
              <div className="flex gap-3 sm:gap-4">
                <input
                  type="file"
                  id="image"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
                <label
                  htmlFor="image"
                  className="w-10 cursor-pointer h-10 sm:w-12 sm:h-12 rounded-full border border-green-600 flex items-center justify-center transition"
                >
                  <Image src="/image.png" alt="Image" width={20} height={20} />
                </label>
              </div>
            )}
          </div>

          {/* Preview uploaded media */}
          {media && (
            <div className="my-4">
              <img src={media} alt="Uploaded media" className="w-[600px] h-[400px] object-cover" />
            </div>
          )}

          {/* Content Editor */}
          <div className="w-full min-h-[600px] rounded-2xl text-4xl">
            <ReactQuill
              className="w-full text-4xl"
              theme="bubble"
              value={value}
              onChange={setValue}
              placeholder="Tell your story..."
            />
          </div>

          {/* Publish Button */}
          <button
            onClick={handleSubmit}
            disabled={!title || !value || uploading}
            className="absolute top-7 right-5 px-4 py-4 bg-teal-700 text-white rounded-full text-lg font-semibold border-none disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
          >
            {uploading ? "Uploading..." : "Publish"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WritePage;
