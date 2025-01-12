'use client'
import { useParams } from 'next/navigation';
import Product from '@/app/components/Product/Product';

export default function ProjectPage() {
  const params = useParams();
  return <Product initialProjectId={parseInt(params.id)} />;
}