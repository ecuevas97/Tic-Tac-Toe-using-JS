# 📝 Vite + TypeScript CRD App

## 🧾 1. Project Description

This is a simple Create-Read-Delete (CRD) task app built with **Vite** and **TypeScript**.  
It connects to a mock backend powered by **JSON Server** and is organized using modern frontend best practices like modular files and static typing.

This project is perfect for developers practicing RESTful API interaction, working with TypeScript, and learning how to structure scalable frontend apps.

---

## 🌐  Live Demo URL

🔗 https://www.youtube.com/watch?v=02sl7F5TfLg

---

## 🧰  Technologies Used

- TypeScript
- Vite
- JSON Server
- HTML/CSS
- Visual Studio Code

---

## 💡  Favorite Features

- 🔄 Realtime list updates after creating or deleting an item  
- 📦 Modular file structure using `main.ts`, `constants.ts`, and others  
- 🔐 Type safety with TypeScript to prevent runtime bugs  
- ⚡ Fast local development using Vite’s dev server  
- 🧹 Clean and minimal UI powered by plain HTML and CSS

---

## 🧑‍💻 Code Snippets

```ts
// Delete an item and refresh the list
async function deleteItem(id: number): Promise<void> {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
  fetchItems()
}

// Type definition for an item
type Item = {
  id: number
  name: string
}

🛠️  Installation & Usage

    Clone the repo:

git clone https://github.com/your-username/your-repo-name.git

Install dependencies:

npm install

Start the backend (in one terminal tab):

npx json-server --watch db.json

Start the frontend app (in a second terminal tab):

    npm run dev

    Open your browser to:
    👉 http://localhost:5173

🤝  Contributing

Pull requests are welcome!
Please open an issue first to discuss changes.
For major updates, start by opening a proposal.
📄  License

MIT License
📬  Contact Info

    GitHub: @ecuevas97

    Email: cuevas.elena97@gmail.com

    LinkedIn: linkedin.com/in/elena-cuevas-28b65aa4/

