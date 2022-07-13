import { FC, createContext } from 'react';
import { types, Instance } from 'mobx-state-tree';
import { useLocalObservable, enableStaticRendering } from 'mobx-react-lite';
import { ContactStore } from './components/ContactForm';
import makeInspectable from 'mobx-devtools-mst';

enableStaticRendering(typeof window === 'undefined');

const { model } = types;

export const RootStore = model('RootStore', {
  contactStore: ContactStore,
});

export type IRootStore = Instance<typeof RootStore>;

export const RootStoreContext = createContext<IRootStore | null>(null);

export const RootStoreProvider: FC = ({ children }) => {
  const store = useLocalObservable(() =>
    RootStore.create({
      contactStore: {
        form: {
          name: '',
          phone: '',
          text: '',
          department: '',
          email: '',
        },
      },
    })
  );
  makeInspectable(store);
  return <RootStoreContext.Provider value={store}>{children}</RootStoreContext.Provider>;
};
