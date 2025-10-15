export const errorHandler = (err, _req, res, _next) => {
  console.error("❌ Error:", err.message);
  const status = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(status).json({
    message: err.message || "Server Error",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined
  });
};
