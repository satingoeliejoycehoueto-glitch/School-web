import React from 'react';
import StatCard from '../components/StatCard';

export default function Dashboard() {
  // In real app fetch these from /api/dashboard/overview
  const stats = {
    students: 1247,
    classes: 64,
    absentToday: 12,
    averageGrade: 'B+'
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Students" value={stats.students} delta={`+23 this month`} />
        <StatCard label="Active Classes" value={stats.classes} />
        <StatCard label="Absent Today" value={stats.absentToday} />
        <StatCard label="Average Grade" value={stats.averageGrade} />
      </div>
    </div>
  );
}
