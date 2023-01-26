import { z } from 'zod';

const MIN_LENGTH_NAME = 12;
const MIN_LENGTH_PASSWORD = 6;

const User = z.object({
  name: z.string().min(MIN_LENGTH_NAME),
  email: z.string().email(),
  password: z.string().min(MIN_LENGTH_PASSWORD),
});

const validationRegister = (dataUser) => {
  const result = User.safeParse(dataUser);
  return result.success;
};

export default validationRegister;
