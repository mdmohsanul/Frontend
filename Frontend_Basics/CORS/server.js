
FE Hosted: http://bookmyshow.com
BE Hosted : http://api.bookmyshow.com

const allowedOrigins = [
  "https://fotive.vercel.app", // Production frontend
  "http://localhost:5173", // Dev frontend
];
origin = protocol/schema - http/ https + host/domain - google.com

  

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Allow cookies
  optionSuccessStatus: 200,
};
// const corsOptions = {
//   origin: "http://localhost:5173",
//   credentials: true, // Allow cookies,
//   optionSuccessStatus: 200,
// };
*
app.use(cors(corsOptions));