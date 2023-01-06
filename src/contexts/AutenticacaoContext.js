import { createContext, useState } from "react";

export const AutenticacaoContext = createContext({});

export function AutenticacaoProvider({ children }) {
    const [usuario, setUsuario] = useState(null);

    async function login(email, senha){
      if(email === 'luis@gmail.com' && senha === '123'){
          setUsuario({
              nome: 'Luis',
              email: email,
              telefone: '+55 (11) 99999-9999',
              endereco: 'Av. Tudo Certo, 11',
          });
          return 'ok';
      }
      return 'Email ou senha incorretos';
    }

    return (
        <AutenticacaoContext.Provider
            value={{
                usuario,
                login,
            }}
        >
            {children}
        </AutenticacaoContext.Provider>
    );
}