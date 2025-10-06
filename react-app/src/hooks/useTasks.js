import { useState, useEffect } from 'react';
import { fetchTasks } from '../api/taskApi';

export default function useTasks(params) {
  const [data, setData] = useState({ items: [], total: 0 });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchTasks(params)
      .then((res) => setData(res))
      .catch(() => setData({ items: [], total: 0 }))
      .finally(() => setLoading(false));
  }, [JSON.stringify(params)]);

  return { ...data, loading };
}
