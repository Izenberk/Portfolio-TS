'use client';

import { useState, useEffect } from 'react';

export default function ExperienceAdminPage() {
    const [experiences, setExperiences] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3001/api/experience')
            .then((res) => res.json())
            .then((data) => {
                setExperiences(data);
                setLoading(false);
            });
    }, []);

    const deleteExperience = async (id: string) => {
        if (!confirm('Are you sure you want to delete this experience?')) return;

        const token = localStorage.getItem('token');
        await fetch(`http://localhost:3001/api/experience/${id}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` },
        });

        setExperiences(experiences.filter((e: any) => e._id !== id));
    };

    if (loading) return <div className="p-8 text-center">Loading experience...</div>;

    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Experience Manager</h1>
                    <a
                        href="/admin/experience/new"
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
                    >
                        + Add Experience
                    </a>
                </div>

                <div className="grid gap-6">
                    {experiences.map((exp: any) => (
                        <div key={exp._id} className="bg-card border border-border rounded-xl p-6 shadow-sm flex justify-between items-start">
                            <div>
                                <h2 className="text-xl font-bold">{exp.role}</h2>
                                <p className="text-lg text-primary mb-1">{exp.company}</p>
                                <p className="text-sm text-muted-foreground mb-2">
                                    {new Date(exp.start).toLocaleDateString()} - {exp.end ? new Date(exp.end).toLocaleDateString() : 'Present'}
                                    {exp.location && <span className="ml-2 text-muted-foreground/70">• {exp.location}</span>}
                                </p>
                                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mb-3">
                                    {(exp.description || []).slice(0, 2).map((desc: string, i: number) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                    {(exp.description || []).length > 2 && <li>...</li>}
                                </ul>
                                <div className="flex flex-wrap gap-1">
                                    {(exp.tags || []).map((tag: string, i: number) => (
                                        <span key={i} className="px-2 py-0.5 bg-muted rounded text-xs text-muted-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <a
                                    href={`/admin/experience/${exp._id}`}
                                    className="px-3 py-1 text-blue-500 hover:bg-blue-50 rounded transition"
                                >
                                    Edit
                                </a>
                                <button
                                    onClick={() => deleteExperience(exp._id)}
                                    className="px-3 py-1 text-red-500 hover:bg-red-50 rounded transition"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}

                    {experiences.length === 0 && (
                        <div className="text-center p-8 text-muted-foreground border border-dashed border-border rounded-xl">
                            No experience entries found. Add your work history!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
