import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const getProfile = async (id: number): Promise<string> => {
  try {
    return `Helloworld ${id}`;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error('Error encounterd');
    return 'error';
  }
};
export type ProfileBody = {
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  email: string | null;
  password: string | null;
};
export const createProfile = async (profileBody: ProfileBody): Promise<ProfileBody | string> => {
  try {
    const { firstName, email, lastName, password, phone } = profileBody;
    const entry = await prisma.user.create({
      data: {
        firstName,
        email,
        lastName,
        password,
        phone,
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...entryWithoutId } = entry;
    return entryWithoutId;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error('Error encounterd');
    return 'error';
  }
};
