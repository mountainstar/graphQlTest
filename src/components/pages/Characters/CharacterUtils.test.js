import {getComparator, stableSort} from './CharactersUtils';

const createData = (name, calories, fat, carbs, protein) => {
  return {name, calories, fat, carbs, protein};
};

const rows = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0),
];

describe('Sort array', () => {
  it('should reorder array in descending order by name', () => {
    expect(stableSort(rows, getComparator('desc', 'name'))).toStrictEqual([
      {name: 'Oreo', calories: 437, fat: 18, carbs: 63, protein: 4},
      {name: 'Nougat', calories: 360, fat: 19, carbs: 9, protein: 37},
      {name: 'Marshmallow', calories: 318, fat: 0, carbs: 81, protein: 2},
      {name: 'Lollipop', calories: 392, fat: 0.2, carbs: 98, protein: 0},
      {name: 'KitKat', calories: 518, fat: 26, carbs: 65, protein: 7},
      {name: 'Jelly Bean', calories: 375, fat: 0, carbs: 94, protein: 0},
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9,
        carbs: 37,
        protein: 4.3,
      },
      {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
      },
      {
        name: 'Gingerbread',
        calories: 356,
        fat: 16,
        carbs: 49,
        protein: 3.9,
      },
      {
        name: 'Frozen yoghurt',
        calories: 159,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6},
      {name: 'Donut', calories: 452, fat: 25, carbs: 51, protein: 4.9},
      {name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3},
    ]);
  });
  it('should reorder array in ascending order by fat', () => {
    expect(stableSort(rows, getComparator('asc', 'fat'))[0]).toStrictEqual({
      calories: 375,
      carbs: 94,
      fat: 0,
      name: 'Jelly Bean',
      protein: 0,
    });
  });
});
