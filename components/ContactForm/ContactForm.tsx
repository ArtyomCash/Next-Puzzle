import { NextPage } from 'next';
import styles from './contactForm.module.scss';
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { useStore } from '../../hooks/useRootStore';
import { IContactForm } from '../ContactForm';
import Select from 'react-select';
import { customStyles } from './selectStyle';

const options = [
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'ceo', label: 'CEO' },
];

const ContactForm: NextPage = () => {
  const { contactStore } = useStore();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IContactForm>();

  const send = useMutation((data: IContactForm) => contactStore.send(data), {
    onSuccess: () => {
      history.push('/');
      reset();
    },
    onError: () => {
      reset();
    },
  });

  const onSubmit = (data: IContactForm) => send.mutate(data);
  const history = useRouter();

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {errors.name ? <span className={styles.errorName}>Your name *</span> : null}
      <input type='text' className={styles.input} placeholder='Your name' {...register('name', { required: true })} />
      <div className={styles.phoneBox}>
        {errors.phone ? <span className={styles.errorPhone}>Your phone *</span> : null}
        <input
          type='text'
          className={styles.input}
          // placeholder='Your phone'
          placeholder='+1 973 123 4567'
          {...register('phone', {
            required: true,
            minLength: 12,
            maxLength: 15,
            pattern: /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/,
          })}
        />
      </div>
      <Controller
        control={control}
        name='department'
        rules={{ required: true }}
        render={({ field: { onChange }, fieldState: { error } }) => (
          <>
            {error ? <span className={styles.errorSelect}>Select department *</span> : null}
            <Select
              onChange={onChange}
              options={options}
              styles={customStyles}
              id='selectbox'
              instanceId='selectbox'
              placeholder='Select department'
            />
          </>
        )}
      />
      {errors.text ? <span className={styles.errorTextarea}>Your textarea *</span> : null}
      <textarea
        className={styles.textarea}
        placeholder='Your text'
        {...register('text', { required: true, minLength: 1, maxLength: 200 })}
      />
      <button className={styles.button} type='submit'>
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
