import prisma from '../db';

export const getAllUpdates = async (req, res) => {
  const updates = await prisma.update.findMany({
    where: {
      userId: req.userId,
    },
  });

  // const products = await prisma.product.findMany({
  //   where: {
  //     belongsToId: req.user.id
  //   },
  //   include: {
  //     updates: true
  //   }
  // })

  // const updates = products.reduce((allUpdates, product) => {
  //   return [...allUpdates, ...product.updates]
  // }, [])

  res.json({ data: updates });
};

export const getOneUpdate = async (req, res) => {
  const update = await prisma.update.findUnique({
    where: {
      id: req.params.id,
    },
  });
  res.json({ data: update });
};

export const createUpdate = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.body.productId,
    },
  });

  if (!product) {
    // does not belong to user
    return res.json({ message: 'nope' });
  }

  const update = await prisma.update.create({
    data: {
      title: req.body.title,
      body: req.body.body,
      productId: req.body.productId,
      userId: req.user.id,
    },
  });

  res.json({ data: update });
};

export const updateUpdate = async (req, res) => {
  const update = await prisma.update.update({
    where: {
      userProductUpdate: {
        productId: req.body.productId,
        id: req.params.id,
        userId: req.user.id,
      },
    },
    data: {
      ...req.body,
    },
  });

  res.json({ message: 'updated' });
};

export const deleteUpdate = async (req, res) => {
  const update = await prisma.update.delete({
    where: {
      userProductUpdate: {
        productId: req.body.productId,
        id: req.params.id,
        userId: req.user.id,
      },
    },
  });

  res.json({ message: 'deleted' });
};
