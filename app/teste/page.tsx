'use client';

import { useState, useEffect } from 'react';

interface User {
  email: string;
  // Adicione mais propriedades conforme necessário
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch('/api/use-auth');
        if (!response.ok) {
          throw new Error('Não autenticado');
        }
        const data = await response.json();
        setUser(data.user);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;
  if (!user) return <p>Por favor, faça login para ver esta página.</p>;

  return (
    <div>
      <h1>Perfil do Usuário</h1>
      <p>Email: {user.email}</p>
      {/* Adicione mais detalhes do usuário conforme necessário */}
    </div>
  );
}