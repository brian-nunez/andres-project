import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Layout from '../../components/layout';
import {
  dateOfBirthValidation,
  firstNameValidation,
  lastNameValidation,
} from '../../utils/validations';
import { trpc } from '../../utils/trpc';
import { useRouter } from 'next/router';

const validaitons = z.object({
  firstName: firstNameValidation,
  lastName: lastNameValidation,
  dateOfBirth: dateOfBirthValidation,
});

function Apply() {
  const router = useRouter();
  const { mutate } = trpc.formData.savePage2.useMutation({
    onSuccess() {
      router.push(`/apply/page3?id=${router.query?.id}`);
    }
  });
  const {
    handleSubmit,
    register,
    setValue,
  } = useForm({
    mode: 'onTouched',
    defaultValues: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
    },
    resolver: zodResolver(validaitons),
  });

  trpc.formData.getDataById.useQuery({
    id: router.query?.id as string,
  }, {
    onSuccess(data) {
      Object.entries(data as z.infer<typeof validaitons>)
        .forEach(([key, value]) => {
          setValue(key as ('firstName' | 'lastName'), value);
        })
    }
  });

  const onSubmit = (values: z.infer<typeof validaitons>) => {
    mutate({
      id: router.query.id as string,
      ...values,
    });
  };

  return (
    <Layout title="Personal Information">
      <div className="border-2 border-gray-400 rounded-lg p-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 grid grid-cols-6 gap-6"
        >
          <div className="col-span-6">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>

            <input
              type="text"
              id="firstName"
              {...register('firstName')}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>
          <div className="col-span-6">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>

            <input
              type="text"
              id="lastName"
              {...register('lastName')}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>
          <div className="col-span-6">
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>

            <input
              type="date"
              id="dateOfBirth"
              {...register('dateOfBirth')}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Apply;
