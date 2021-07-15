import { firebase } from '../firebase/config';
import { VFC, createContext, useEffect, useState, ReactNode } from 'react';
import Router from 'next/router';

type AuthContextProps = {
  currentUser: firebase.User | null;
};

const AuthContext = createContext<AuthContextProps>({ currentUser: null });

const AuthProvider: VFC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    if (!process.browser) return;
    let unscribe: firebase.Unsubscribe;
    const currentPath = Router.pathname;
    unscribe = firebase.auth().onAuthStateChanged((user) => {
      // ログイン状態が変化すると呼ばれる
      if (!user) {
        Router.push('/');
      } else {
        setCurrentUser(user);
        Router.push(currentPath);
      }
    });

    return () => {
      unscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
