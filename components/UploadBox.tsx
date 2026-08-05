"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import LoadingCard from "./LoadingCard";

export default function UploadBox() {
  const [file, setFile] = useState<File | null>(null);
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      setNotes("");
      setError("");
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: false,
    accept: {
      "application/pdf": [".pdf"],
    },
    onDrop,
  });

  const handleSummarize = async () => {
    if (!file || loading) return;

    setLoading(true);
    setNotes("");
    setError("");

    try {
      const formData = new FormData();
      formData.append("pdf", file);

      const response = await fetch("/api/summarize", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setNotes(data.notes || "");
    } catch (err) {
      console.error("SUMMARY ERROR:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Failed to generate Smart Notes."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-5xl mx-auto mt-10 px-4">

      {/* ================= UPLOAD BOX ================= */}

      <div
        {...getRootProps()}
        className={`rounded-3xl border p-10 cursor-pointer transition-all duration-300 backdrop-blur-xl
        ${
          isDragActive
            ? "border-green-400 bg-green-500/10 scale-[1.02]"
            : "border-green-500/20 bg-zinc-900/60 hover:border-green-400"
        }`}
      >
        <input {...getInputProps()} />

        <div className="flex flex-col items-center text-center">

          <div className="w-24 h-24 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-5xl">
            📚
          </div>

          <h2 className="mt-8 text-3xl font-bold text-white">
            Upload Study Material
          </h2>

          <p className="mt-3 text-zinc-400">
            Drag & Drop your PDF here or click to browse
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">

            <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-sm">
              PDF
            </span>

            <span className="px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 text-sm">
              DOCX (Soon)
            </span>

            <span className="px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 text-sm">
              PPTX (Soon)
            </span>

          </div>

          <button
            type="button"
            className="mt-8 px-8 py-3 rounded-xl bg-green-600 hover:bg-green-700 transition font-semibold shadow-xl shadow-green-900/40"
          >
            Choose File
          </button>

        </div>
      </div>

      {/* ================= SELECTED FILE ================= */}

      {file && !loading && (
        <div className="mt-8 rounded-3xl border border-green-500/20 bg-zinc-900/70 backdrop-blur-xl p-6">

          <div className="flex items-center justify-between gap-4">

            <div>
              <h3 className="font-semibold text-white break-all">
                📄 {file.name}
              </h3>

              <p className="text-zinc-400 mt-2">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setFile(null);
                setNotes("");
                setError("");
              }}
              className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 transition"
            >
              Remove
            </button>

          </div>

          {/* Generate Button */}

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleSummarize();
            }}
            disabled={loading}
            className="w-full mt-6 rounded-xl bg-green-600 hover:bg-green-700 py-3 font-semibold transition"
          >
            ✨ Generate Smart Notes
          </button>

        </div>
      )}

      {/* ================= LOADING CARD ================= */}

      {loading && (
        <div className="mt-10">
          <LoadingCard />
        </div>
      )}

      {/* ================= ERROR ================= */}

      {error && !loading && (
        <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-5 text-red-300">
          ❌ {error}
        </div>
      )}

      {/* ================= AI NOTES ================= */}

      {notes && !loading && (
        <div className="mt-10 rounded-3xl border border-green-500/20 bg-zinc-900/80 backdrop-blur-xl p-6 md:p-8">

          <div className="flex items-center justify-between gap-4 mb-6">

            <div>
              <p className="text-green-400 text-sm font-semibold">
                ✨ AI GENERATED
              </p>

              <h2 className="text-3xl font-bold text-white mt-1">
                Smart Study Notes
              </h2>
            </div>

            <button
              type="button"
              onClick={() => navigator.clipboard.writeText(notes)}
              className="px-4 py-2 rounded-xl border border-green-500/30 bg-green-500/10 text-green-300 hover:bg-green-500/20 transition"
            >
              📋 Copy
            </button>

          </div>

          <div className="border-t border-zinc-800 pt-6">
  <div className="rounded-2xl border border-green-500/10 bg-black/20 p-5 md:p-7 overflow-hidden">
    <pre className="whitespace-pre-wrap break-words font-sans text-zinc-300 leading-7 text-sm md:text-[15px]">
      {notes}
    </pre>
  </div>
</div>

        </div>
      )}

    </section>
  );
}
