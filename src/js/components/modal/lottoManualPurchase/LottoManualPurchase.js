import { $eventBindedComponent } from '../../../helper/dom.js';
import {
  purchaseConfirm,
  purchaseCountInput,
  toggleLottoManualPurchaseModal,
} from './LottoManualPurchase.action.js';
import LottoManualPurchaseTemplate from './LottoManualPurchase.template.js';

const LottoManualPurchase = $eventBindedComponent(count => {
  const $template = LottoManualPurchaseTemplate(count);
  const $event = [
    { type: 'click', callback: toggleLottoManualPurchaseModal },
    { type: 'click', callback: purchaseCountInput },
    { type: 'click', callback: purchaseConfirm },
  ];
  return [$template, $event];
});

export default LottoManualPurchase;
