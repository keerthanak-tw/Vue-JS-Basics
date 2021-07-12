import mutations from '@/store/mutations'
import cats from '@/data/cats';
import dogs from '@/data/dogs';

describe('Mutations', ()=> {
  it('should append pet of particular species to state', () => {
    const state = {
        cats,
        dogs
    };
    const payload = {
        species: 'cats',
        pet: {
        name: 'Bosco',
        age: '2'
        }
    };
    
    mutations.appendPet(state, payload);
    expect(state.cats.length).toBe(5);
  })
})
