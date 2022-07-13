import { StylesConfig } from 'react-select';

interface IOption {
  value: string;
  label: string;
}

export const customStyles: StylesConfig<IOption, false | true> = {
  option: (provided) => ({
    ...provided,
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
  }),
  control: (provided) => ({
    ...provided,
    maxWidth: '565px',
    width: '100%',
    display: 'flex',
    marginBottom: 20,
    cursor: 'pointer',
    paddingLeft: 22,
    '@media (max-width: 957px)': {
      maxWidth: 'initial ',
    },
  }),
  container: (provided) => ({
    ...provided,
    width: '100%',
    paddingTop: 12,
  }),
  menu: (provided) => ({
    ...provided,
    position: 'absolute',
    top: 50,
    left: 0,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return { ...provided, opacity, transition };
  },
};
