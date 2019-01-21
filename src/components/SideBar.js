import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { selectGroups, selectIsDemoMode } from '../selectors';
import { toggleDemoMode } from '../actions';
import SideBarLink from './SideBarLink';
import { selectLoggedIn } from '../selectors';

import styled from '@emotion/styled';

const StyledAside = styled.aside`
  background-color: var(--brand-grey);
  color: #fff;
  padding-top: 30px;
`;

const SideBar = (props) => {
  let groups = <FontAwesomeIcon icon={faSpinner} spin />;
  if (props.groups) {
    groups = props.groups.map((group) => (
      <SideBarLink
        key={group.id}
        name={group.name}
        linkPath={`/app/group/${group.id}`}
      />
    ));
  }
  if (props.loggedIn) {
  return (
    <StyledAside>
      <SideBarLink
        name="Dashboard"
        linkPath="/app/dashboard"
      />
      {groups}
      <SideBarLink
        name="Settings"
        linkPath="/app/settings"
      />

      {/*<button
        onClick={props.toggleDemo}
      >
        Demo Mode&nbsp;
        {props.demoMode && <FontAwesomeIcon icon={faToggleOn} />}
        {!props.demoMode && <FontAwesomeIcon icon={faToggleOff} />}
      </button> */}
    </StyledAside>
  );
  }
  return (
    <StyledAside>
      <SideBarLink
        name="Sign Up"
        linkPath="/app/register"
      />
      <SideBarLink
        name="Reset Password"
        linkPath="/app/reset-password"
      />
      <SideBarLink
        name="FAQ"
        linkPath="/app/faq"
      />
      <SideBarLink
        name="Contact Us"
        linkPath="/app/contact"
      />
    </StyledAside>
  );
}

const select = state => ({
  loggedIn: selectLoggedIn(state),
  groups: selectGroups(state),
  demoMode:  selectIsDemoMode(state),
});

const actions = { toggleDemo: toggleDemoMode };

export default connect(select, actions)(SideBar);
