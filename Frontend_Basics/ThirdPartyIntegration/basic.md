# What is third party integrations?
- It means connecting our application from the external service , tools, or API that someone else builts. Instead of building features or services from scratch we just use what already exists

# Why do we use Third-Party Integrations?

- Saves Development Time
- Reliability
- Maintained by truested companies
- faster to companies

# Some third-party services are 
| Use Case        | Integration / Service              |
| --------------- | ---------------------------------- |
| Authentication  | Google OAuth, Auth0, Firebase Auth |
| Payments        | Razorpay, Stripe, PayPal           |
| SMS / OTP       | Twilio, Fast2SMS                   |
| File Storage    | AWS S3, Cloudinary                 |
| Emails          | SendGrid, Mailgun, Nodemailer      |
| Maps / Location | Google Maps API                    |
| AI              | OpenAI, Gemini APIs                |

# How It Works (General Flow)

- Sign up for the service → get API keys.
- Install SDK / Client library or call via REST API.
- Make requests using the API key.
- Handle responses (success / error).
- Store config in .env for security.

# Security Best Practices

✅ Store API keys in .env, not in code
✅ Validate & sanitize user input
✅ Test integrations in sandbox mode
✅ Use appropriate error handling

# Payment Flow (High Level)

Frontend (React / Next.js)
  ↓   creates order request
Backend (Node.js / Express)
  ↓   creates real payment order using payment gateway API
Gateway Page (Stripe / Razorpay UI)
  ↓   User Pays
Gateway → Backend → Verify Payment Signature
  ↓
Your DB updates Order Status = "Paid"
