// auth.js

import { supabase } from "./supabase";

export async function garantirUsuarioAnonimo() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return session.user;
  }

  const { data, error } =
    await supabase.auth.signInAnonymously();

  if (error) {
    console.error(
      "Erro ao criar usuário anônimo:",
      error
    );

    throw error;
  }

  return data.user;
}