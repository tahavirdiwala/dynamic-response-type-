function selfResolved<T>(val: T) {
  return Promise.resolve(val);
}

const d = selfResolved({
  id: 2,
  name: 'taha',
  description: {
    nestedKey: {
      nestedKey2: {
        nested3: {
          hello: 'hi',
        },
      },
    },
  },
});

d.then((resp) => {
  // all keys are infer dynamically
  console.log(resp.description.nestedKey.nestedKey2.nested3.hello);
});
