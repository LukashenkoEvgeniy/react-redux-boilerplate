import * as types from './types';

// TODO
const initialState = {
  items: [
    {
      slug: 'kyiv',
      name: 'Київ',
      categories: [
        {
          slug: 'kyiv-food-market',
          name: 'Kyiv Food Market',
          city: '59f0b9ce-25b3-47ce-bd91-3f4b1a143698',
          preview: 'KYIV FOOD MARKET - це головна їжа міста.',
          image: {
            1300: 'http://menu.fitel.io/media/__sized__/category/2020/04/29/image_7-thumbnail-1300x1300.png',
            800: 'http://menu.fitel.io/media/__sized__/category/2020/04/29/image_7-thumbnail-800x800.png',
            1900: 'http://menu.fitel.io/media/__sized__/category/2020/04/29/image_7-thumbnail-1900x1900.png',
            400: 'http://menu.fitel.io/media/__sized__/category/2020/04/29/image_7-thumbnail-400x400.png',
            3600: 'http://menu.fitel.io/media/__sized__/category/2020/04/29/image_7-thumbnail-3600x3600.png',
          },
        },
      ],
    },
    {
      slug: 'odessa',
      name: 'Одесса',
      categories: [],
    },
  ],
  currentCity: 'kyiv',
};

export default function cities(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_CITIES:
      return {
        ...state,
        error: null,
        loading: true,
      };

    case types.RECEIVE_CITIES:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };

    case types.FAILURE_CITIES:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
