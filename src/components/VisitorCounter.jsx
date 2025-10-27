'use client';
import { useEffect, useState } from 'react';

const VisitorCounter=()=> {
  const [count, setCount] = useState(0);

    useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_VIEW_COUNT);
        const data = await res.json();
        // Handle different possible keys safely
        setCount(data?.value ?? data?.count ?? 0);
      } catch (err) {
        console.error('❌ Error fetching count:', err);
      }
    };

    fetchCount();
  }, []);
  return (
    <div className="text-sm text-gray-500 text-center mt-4">
      {count !== null ? `👀 ${count} visitors` : 'Loading visits...'}
    </div>
  );
}
export default VisitorCounter