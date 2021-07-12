import getters from '@/store/getters';
import cats from '@/data/cats';
import dogs from '@/data/dogs';

describe('Getters', () => {
  it('should return the count of total animalz', () => {
    const state = {
      cats,
      dogs
    };
    const expectedLength = cats.length + dogs.length;

    expect(getters.animalsCount(state)).toBe(expectedLength);
  });
});
