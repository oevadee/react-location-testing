import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';
import { User } from '../api/auth/types';

export interface Lyric {
  imagePath: string;
  name: string;
  quote: string;
  song: string;
  album: string;
}

export interface AppStore {
  user: number | null;
  setUser: Dispatch<SetStateAction<number | null>>;
  lyric: Lyric | null;
  setLyric: Dispatch<SetStateAction<Lyric | null>>;
}

export const AppContext = createContext<AppStore | null>(null);

export const useApp = () => useContext(AppContext) as AppStore;

interface Props {
  children: ReactNode;
}

const App = ({ children }: Props) => {
  const [user, setUser] = useState<number | null>(null);
  const [lyric, setLyric] = useState<Lyric | null>(null);

  const appStore = useMemo<AppStore>(
    () => ({
      user,
      setUser,
      lyric,
      setLyric,
    }),
    [user, setUser, lyric, setLyric],
  );

  return <AppContext.Provider value={appStore}>{children}</AppContext.Provider>;
};

export default App;
