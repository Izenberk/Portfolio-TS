'use client';

import { useState } from 'react';

export default function NewSkillPage() {
    const [title, setTitle] = useState('');
    const [items, setItems] = useState<any[]>([{ name: '', level: 'Intermediate', icon: '', description: '' }]);

    const addItem = () => {
        setItems([...items, { name: '', level: 'Intermediate', icon: '', description: '' }]);
    };

    const removeItem = (index: number) => {
        setItems(items.filter((_, i) => i !== index));
    };

    const updateItem = (index: number, field: 'name' | 'level' | 'icon' | 'description', value: string) => {
        const newItems = [...items];
        newItems[index] = { ...newItems[index], [field]: value };
        setItems(newItems);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        const res = await fetch('http://localhost:3001/api/skills', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ title, items }),
        });

        if (res.ok) {
            window.location.href = '/admin/skills';
        } else {
            alert('Failed to create skill category');
        }
    };

    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-2xl mx-auto bg-card border border-border rounded-xl p-8 shadow-sm">
                <h1 className="text-2xl font-bold mb-6">Add Skill Category</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-1">Category Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="e.g. Frontend, Backend, Tools"
                            className="w-full px-4 py-2 rounded-lg border border-border bg-background"
                            required
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-medium">Skills</label>
                            <button
                                type="button"
                                onClick={addItem}
                                className="text-sm text-primary hover:underline"
                            >
                                + Add Item
                            </button>
                        </div>

                        <div className="space-y-4">
                            {items.map((item, index) => (
                                <div key={index} className="p-4 border border-border rounded-lg bg-muted/30 space-y-3">
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value={item.name}
                                            onChange={(e) => updateItem(index, 'name', e.target.value)}
                                            placeholder="Skill Name"
                                            className="flex-1 px-3 py-2 rounded-lg border border-border bg-background"
                                            required
                                        />
                                        <select
                                            value={item.level}
                                            onChange={(e) => updateItem(index, 'level', e.target.value)}
                                            className="px-3 py-2 rounded-lg border border-border bg-background"
                                        >
                                            <option value="Beginner">Beginner</option>
                                            <option value="Intermediate">Intermediate</option>
                                            <option value="Advanced">Advanced</option>
                                            <option value="Expert">Expert</option>
                                        </select>
                                        <button
                                            type="button"
                                            onClick={() => removeItem(index)}
                                            className="px-3 py-2 text-red-500 hover:bg-red-50 rounded-lg"
                                            disabled={items.length === 1}
                                        >
                                            ✕
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="space-y-2">
                                            <input
                                                type="text"
                                                value={item.icon || ''}
                                                onChange={(e) => updateItem(index, 'icon', e.target.value)}
                                                placeholder="Icon URL (e.g. /icons/react.svg)"
                                                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
                                            />
                                            <textarea
                                                value={item.description || ''}
                                                onChange={(e) => updateItem(index, 'description', e.target.value)}
                                                placeholder="Description (Markdown supported)"
                                                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm min-h-[100px] resize-y"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-4 flex gap-4">
                        <button
                            type="submit"
                            className="flex-1 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
                        >
                            Create Category
                        </button>
                        <a
                            href="/admin/skills"
                            className="px-6 py-2 border border-border rounded-lg font-medium hover:bg-muted transition"
                        >
                            Cancel
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}
