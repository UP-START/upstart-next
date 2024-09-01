import { createClient } from "@/utils/supabase/server";
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  console.log('API Handler iniciado');

  try {
    console.log('Iniciando verificação de autenticação');
    const supabase = createClient();
    console.log('Cliente Supabase criado');
    
    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log('Resposta do Supabase:', { user });

    if (user) {
      console.log('Usuário autenticado:', user.id);
      // Se o usuário estiver autenticado, retorne os dados do usuário
      return NextResponse.json({
        authenticated: true,
        user: {
          id: user.id,
          email: user.email,
          // Adicione outros campos do usuário que você queira retornar
        }
      });
    } else {
      console.log('Nenhum usuário autenticado');
      // Se não houver usuário autenticado
      return NextResponse.json({
        authenticated: false,
        user: null
      });
    }
  } catch (error) {
    console.error('Erro ao verificar autenticação:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}