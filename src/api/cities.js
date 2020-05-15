import { get } from '@/utils/axios';

export function fetchCitiesFromApi() {
  return get('/cities/').then((response) => response.data);
}
