---

## 🎯 Current Task & Next Steps

### **Phase 1: API Setup & n8n Integration**

The immediate task is to establish the backend foundation for the contact form functionality.

1.  **Define API Endpoint:** Create a `ContactModule` in NestJS (`apps/api`) with a **POST** endpoint at `/api/contact`.
2.  **Database Connection:** Implement connection to MongoDB via Mongoose within NestJS.
3.  **Core Logic:** This endpoint must perform two critical, professional-level actions:
    * **A. Persistence:** Safely save the submission data to the MongoDB database.
    * **B. Webhook Trigger:** Securely send a POST request (the n8n Webhook) to initiate the automation workflow.

### **Phase 2: Frontend Integration**

1.  **Component Migration:** Migrate existing portfolio UI components from the old codebase into the Next.js `apps/web` structure.
2.  **Form Hookup:** Re-implement the Contact Form component to submit data to the new **NestJS API** endpoint (`/api/contact`).

---

## ⚙️ Local Development Setup

To run both the frontend and backend concurrently:

1.  **Install Dependencies (Root):**
    ```bash
    pnpm install
    ```

2.  **Start the Backend (API):**
    ```bash
    pnpm run --filter api start:dev
    # NestJS starts on http://localhost:3001
    ```

3.  **Start the Frontend (Web):**
    ```bash
    pnpm run --filter web dev
    # Next.js starts on http://localhost:3000
    ```