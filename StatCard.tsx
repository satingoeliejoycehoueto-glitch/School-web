import React from 'react';

type Props = { label: string; value: string | number; delta?: string; };
export default function StatCard({ label, value, delta }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
        </div>
      </div>
      {delta && <div className="mt-3 text-sm text-green-600">{delta}</div>}
    </div>
  );
}
