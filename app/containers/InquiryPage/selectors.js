import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the inquiryPage state domain
 */

const selectInquiryPageDomain = state => state.inquiryPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by InquiryPage
 */

const makeSelectInquiryPage = () =>
  createSelector(
    selectInquiryPageDomain,
    substate => substate,
  );

export default makeSelectInquiryPage;
export { selectInquiryPageDomain };
