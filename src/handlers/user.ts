import prisma from '../db';
import { comparePasswords, createJWT, hashPassword } from '../modules/auth';

export const createNewUser = async (req, res) => {
  const hash = await hashPassword(req.body.password);
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: hash,
    },
  });

  const token = createJWT(user);
  res.json({ token });
};

export const signIn = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });

  if (!user) {
    res.status(401);
    res.send({
      message: 'username or password Invalid',
    });
    return;
  }

  const isValid = await comparePasswords(user.password, req.body.password);

  if (!isValid) {
    res.status(401);
    res.send({
      message: 'username or password Invalid',
    });
    return;
  }

  const token = createJWT(user);
  res.send({ token });
};