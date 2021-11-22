/**
 *
 * InquiryPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectInquiryPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function InquiryPage() {
  useInjectReducer({ key: 'inquiryPage', reducer });
  useInjectSaga({ key: 'inquiryPage', saga });

  return (
    <div>
      <Helmet>
        <title>InquiryPage</title>
        <meta name="description" content="Description of InquiryPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <table>
        <tr>
          <td>1</td>
          <td>1</td>
        </tr>
      </table>
    </div>
  );
}

InquiryPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  inquiryPage: makeSelectInquiryPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(InquiryPage);
