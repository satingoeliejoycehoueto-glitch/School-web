import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Students() {
  const [students, setStudents] = useState<any[]>([]);
  useEffect(() => {
    axios.get('/api/students').then(r => setStudents(r.data.data || []));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Students</h2>
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="py-2">Name</th>
              <th className="py-2">DOB</th>
            </tr>
          </thead>
          <tbody>
            {students.map(s => (
              <tr key={s.id} className="border-t">
                <td className="py-2">{s.firstName} {s.lastName}</td>
                <td className="py-2">{s.dob ? new Date(s.dob).toLocaleDateString() : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
