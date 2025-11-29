'use client';

import { useState, useEffect } from 'react';

export default function SkillsAdminPage() {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3001/api/skills')
            .then((res) => res.json())
            .then((data) => {
                setSkills(data);
                setLoading(false);
            });
    }, []);

    const deleteSkill = async (id: string) => {
        if (!confirm('Are you sure you want to delete this category?')) return;

        const token = localStorage.getItem('token');
        await fetch(`http://localhost:3001/api/skills/${id}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` },
        });

        setSkills(skills.filter((s: any) => s._id !== id));
    };

    if (loading) return <div className="p-8 text-center">Loading skills...</div>;

    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Skills Manager</h1>
                    <a
                        href="/admin/skills/new"
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
                    >
                        + Add Category
                    </a>
                </div>

                <div className="grid gap-6">
                    {skills.map((skill: any) => (
                        <div key={skill._id} className="bg-card border border-border rounded-xl p-6 shadow-sm flex justify-between items-start">
                            <div>
                                <h2 className="text-xl font-bold mb-2">{skill.title}</h2>
                                <div className="flex flex-wrap gap-2">
                                    {skill.items.map((item: any, idx: number) => (
                                        <span key={idx} className="px-2 py-1 bg-muted rounded text-sm">
                                            {item.name} <span className="text-muted-foreground text-xs">({item.level})</span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <a
                                    href={`/admin/skills/${skill._id}`}
                                    className="px-3 py-1 text-blue-500 hover:bg-blue-50 rounded transition"
                                >
                                    Edit
                                </a>
                                <button
                                    onClick={() => deleteSkill(skill._id)}
                                    className="px-3 py-1 text-red-500 hover:bg-red-50 rounded transition"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}

                    {skills.length === 0 && (
                        <div className="text-center p-8 text-muted-foreground border border-dashed border-border rounded-xl">
                            No skill categories found. Create one!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
