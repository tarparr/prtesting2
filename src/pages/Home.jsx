import React, { useState, useEffect } from "react";

function Home() {
  const [notes, setNotes] = useState([]);
  const [showNotes, setShowNotes] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Load from localStorage when page loads
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  // Save to localStorage when notes change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleAddOrUpdate = () => {
    if (editingId !== null) {
      const updated = notes.map((note) =>
        note.id === editingId ? { ...note, title, description } : note
      );
      setNotes(updated);
      setEditingId(null);
    } else {
      const newNote = {
        id: Date.now(),
        title,
        description,
      };
      setNotes([...notes, newNote]);
    }
    setTitle("");
    setDescription("");
  };

  const handleEdit = (note) => {
    setTitle(note.title);
    setDescription(note.description);
    setEditingId(note.id);
  };

  const handleDelete = (id) => {
    const filtered = notes.filter((note) => note.id !== id);
    setNotes(filtered);
  };

  return (
    <>
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>📒 My Notes</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /><br /><br />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="3"
      /><br /><br />

      <button onClick={handleAddOrUpdate}>
        {editingId ? "Update Note" : "Add Note"}
      </button>
      <button onClick={() => setShowNotes(!showNotes)} style={{ marginLeft: "10px" }}>
        {showNotes ? "Hide Notes" : "Show Notes"}
      </button>

      {showNotes &&
        notes.map((note) => (
          <div key={note.id} style={{ border: "1px solid #aaa", padding: "10px", marginTop: "10px" }}>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            <button onClick={() => handleEdit(note)}>Edit</button>
            <button onClick={() => handleDelete(note.id)} style={{ marginLeft: "10px" }}>
              Delete
            </button>
          </div>
        ))}
    </div>
    </>
  );
}

export default Home;














