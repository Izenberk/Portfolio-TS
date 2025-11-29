'use client';

import { useState, useEffect } from "react";

export default function ProjectsAdminPage() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3001/api/projects`)
            .then((res) => res.json())
            .then((data) =>{
                setProjects(data);
                setLoading(false);
            });
    }, []);

    const deleteProject = async (id: string) => {
        if (!confirm('Are you sure you want to delete this project?')) return;

        const token = localStorage.getItem('token');
        await fetch(`http://localhost:3001/api/projects/${id}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` },
        });

        // Optimistically remove from UI
        setProjects(projects.filter((p: any) => p._id !== id));
    };

    if (loading) return <div className="p-8 text-center">Loading project...</div>

      return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Projects Manager</h1>
          <a
            href="/admin/projects/new"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
          >
            + Add Project
          </a>
        </div>

        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="p-4 font-medium">Title</th>
                <th className="p-4 font-medium">Slug</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project: any) => (
                <tr key={project._id} className="border-b border-border last:border-0 hover:bg-muted/20">
                  <td className="p-4 font-medium">{project.title}</td>
                  <td className="p-4 text-muted-foreground">{project.slug}</td>
                  <td className="p-4 text-right space-x-2">
                    <a
                      href={`/admin/projects/${project._id}`}
                      className="text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                    <button
                      onClick={() => deleteProject(project._id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {projects.length === 0 && (
            <div className="p-8 text-center text-muted-foreground">
              No projects found. Create one!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}