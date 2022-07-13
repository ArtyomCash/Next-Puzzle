import { types, Instance, flow } from 'mobx-state-tree';
import axios from 'axios';
const { model, frozen } = types;

export interface IContactForm {
  name: string;
  phone: string | null;
  text: string | null;
  email: string | null;
  department: string | null;
}
export const ContactStore = model('ContactStore', {
  form: frozen<IContactForm>(),
})
  .actions((self) => ({
    updateValue(key: string, value: string) {
      self.form = { ...self.form, [key]: value };
      return self.form;
    },
  }))
  .actions((self) => ({
    send: flow(function* (data) {
      yield axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/contacts`, {
        ...data,
        published_at: new Date().toISOString(),
        created_by: '',
        updated_by: '',
      });
      return self;
    }),
  }));

export type IContactStore = Instance<typeof ContactStore>;
