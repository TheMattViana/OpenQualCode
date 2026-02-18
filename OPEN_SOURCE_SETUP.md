# Open Source Setup Guide

This application requires a Firebase project to function. Follow these steps to set up your own backend environment.

## 1. Create a Firebase Project
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click **"Add project"**.
3. Name your project (e.g., `my-qual-coding-app`) and follow the setup steps.
   - Google Analytics is optional but recommended if you want to use the `measurementId`.

## 2. Enable Authentication
1. In the Firebase Console, go to **Build > Authentication**.
2. Click **"Get started"**.
3. Enable **Google** as a Sign-in provider.
4. (Optional) Enable **Email/Password** if you want to support that, but the current UI is optimized for Google Sign-in.

## 3. Set up Firestore Database
1. Go to **Build > Firestore Database**.
2. Click **"Create database"**.
3. Choose a location (e.g., `nam5 (us-central)`).
4. Start in **Production mode**.
5. Once created, go to the **Rules** tab and paste the contents of the `firestore.rules` file from this repository.
   - This ensures your data remains secure and private to your users/projects.

## 4. Register Your App & Get Config
1. In the Project Overview (top left gear icon > Project settings), scroll down to **"Your apps"**.
2. Click the **Web** icon (</>).
3. Register the app (e.g., "QualCodingApp").
4. Copy the `firebaseConfig` values provided.

## 5. Configure Environment Variables
1. Copy the `.env.example` file to a new file named `.env`:
   ```bash
   cp .env.example .env
   ```
2. Open the `.env` file and paste the values from step 4:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

## 6. Run the App
Now you can start the development server:
```bash
npm install
npm run dev
```

## Security Notes
- **Rate Limits**: Firebase has generous free tier limits (Spark Plan).
    - Firestore: 50k reads/day, 20k writes/day.
    - Limits are **per project**. If you have many users, you might hit these limits on the free plan.
- **Data Security**: The `firestore.rules` file included in this repo ensures that:
    - Users can only access projects they are members of.
    - Only project owners can delete projects.
    - User profiles are private.
- **Production**: Before deploying to production, verify your Firebase Security Rules and consider upgrading to the Blaze plan (Pay as you go) to avoid service interruptions if you exceed free limits.
