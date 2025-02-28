"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Table } from '@/components/ui/table';
import useCategoryStore from '@/store/categoryStore';

export default function Category() {
  const { categories } = useCategoryStore();
  const router = useRouter();

  const handleRowClick = (id:number) => {
    router.push(`/category/${id}`);
  };

  return (
    <Card className="p-6 m-5">
      <h2 className="text-xl font-semibold mb-4">Danh Mục</h2>
      <Table>
        <thead>
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">User ID</th>
            <th className="p-2 border">Tiêu đề</th>
            <th className="p-2 border">Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item) => (
            <tr key={item.id} onClick={() => handleRowClick(item.id)} className="cursor-pointer hover:bg-gray-100">
              <td className="p-2 border">{item.id}</td>
              <td className="p-2 border">{item.userId}</td>
              <td className="p-2 border">{item.title}</td>
              <td className="p-2 border">{item.completed}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}
