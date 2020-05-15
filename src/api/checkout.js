import { post } from '@/utils/axios';

export function checkoutApi(phone, payLater) {
  return post('/checkout/takeaway/', { phone, pay_later: payLater}).then((response) => response.data);
}
