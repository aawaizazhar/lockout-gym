"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ padding: "40px", fontFamily: "sans-serif", background: "#0b0c0d", color: "#f4f1ea" }}>
        <h2>Something went wrong!</h2>
        <button
          onClick={() => reset()}
          style={{
            marginTop: "16px",
            padding: "8px 16px",
            background: "#ffe600",
            color: "#0b0c0d",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
