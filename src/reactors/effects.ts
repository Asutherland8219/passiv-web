import {
  loadCurrencies,
  loadCurrencyRates,
  loadBrokerages,
  loadSubscription,
  loadAuthorizations,
  loadAccounts,
  loadGroups,
  loadSettings,
  loadPlans,
  loadHelpArticles,
  loadFeatures,
  reloadEverything,
} from '../actions';
import {
  loadPerformanceAll,
  loadAdjustedCostBasis,
} from '../actions/performance';
import { checkIfOnline } from '../actions/online';
import {
  selectCurrenciesNeedData,
  selectCurrencyRatesNeedData,
  selectBrokeragesNeedData,
  selectAuthorizationsNeedData,
  selectSettingsNeedData,
  selectPlansNeedData,
  selectHelpArticlesNeedData,
  selectFeaturesNeedData,
  selectAppNeedsRefresh,
} from '../selectors';
import { selectAccountsNeedData } from '../selectors/accounts';
import { selectGroupsNeedData } from '../selectors/groups';
import { selectSubscriptionNeedData } from '../selectors/subscription';
import { selectShouldCheckIfOnline } from '../selectors/online';
import {
  selectPerformanceNeedData,
  selectACBNeedData,
} from '../selectors/performance';

export { default as reducer } from '../reducers';

export const effects = [
  {
    selector: selectAppNeedsRefresh,
    actionCreator: reloadEverything,
  },
  {
    selector: selectCurrenciesNeedData,
    actionCreator: loadCurrencies,
  },
  {
    selector: selectFeaturesNeedData,
    actionCreator: loadFeatures,
  },
  {
    selector: selectCurrencyRatesNeedData,
    actionCreator: loadCurrencyRates,
  },
  {
    selector: selectHelpArticlesNeedData,
    actionCreator: loadHelpArticles,
  },
  {
    selector: selectBrokeragesNeedData,
    actionCreator: loadBrokerages,
  },
  {
    selector: selectSubscriptionNeedData,
    actionCreator: loadSubscription,
  },
  {
    selector: selectAuthorizationsNeedData,
    actionCreator: loadAuthorizations,
  },
  {
    selector: selectAccountsNeedData,
    actionCreator: loadAccounts,
  },
  {
    selector: selectGroupsNeedData,
    actionCreator: loadGroups,
  },
  {
    selector: selectSettingsNeedData,
    actionCreator: loadSettings,
  },
  {
    selector: selectPlansNeedData,
    actionCreator: loadPlans,
  },
  {
    selector: selectPerformanceNeedData,
    actionCreator: loadPerformanceAll,
  },
  {
    selector: selectACBNeedData,
    actionCreator: loadAdjustedCostBasis,
  },
  {
    selector: selectShouldCheckIfOnline,
    actionCreator: checkIfOnline,
  },
];
