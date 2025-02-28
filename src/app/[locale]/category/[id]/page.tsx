"use client"
import React, { useEffect } from 'react';
import {  useParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import useCategoryStore from '@/store/categoryStore';

export default function CategoryDetailPage() {
  const { categoryDetail,fetchCategoryDetail } = useCategoryStore();
  const { id } = useParams();
  const categoryId = Number(id);
    useEffect(() => {
    if (categoryId) {
        fetchCategoryDetail(categoryId);
    }
    }, [categoryId,fetchCategoryDetail]);


  return (
    <div className="flex justify-center items-center min-h-screen p-6">
        {categoryDetail && (
            <Card className="p-6 max-w-lg w-full shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">{categoryDetail.title}</h2>
            <p className="text-sm text-gray-500">ID: {categoryDetail.id}</p>
            <p className="text-sm text-gray-500">User ID: {categoryDetail.userId}</p>
            <p className="text-sm text-gray-500">Trạng thái: {categoryDetail.completed ? 'Hoàn thành' : 'Chưa hoàn thành'}</p>
          </Card>
        )}
     
    </div>
  );
}