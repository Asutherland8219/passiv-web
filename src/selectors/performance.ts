import { createSelector } from 'reselect';
import { AppState } from '../store';
import { PastValue, Contributions } from '../types/performance';
import { selectState } from '.';

export const selectSelectedTimeframe = (state: AppState) =>
  state.selectedTimeframe;

export const selectPerformanceAll = (state: AppState) =>
  state.performanceAll.data;

export const selectTotalEquityTimeframe = createSelector<
  AppState,
  AppState,
  string,
  PastValue[] | undefined
>(selectState, selectSelectedTimeframe, (state, timeframe) => {
  if (timeframe === '1Y') {
    return state.performanceAll?.data?.totalEquityTimeframe1Y;
  } else if (timeframe === 'YTD') {
    return state.performanceAll?.data?.totalEquityTimeframeYTD;
  } else if (timeframe === 'ALL') {
    return state.performanceAll?.data?.totalEquityTimeframeALL;
  } else {
    return state.performanceAll?.data?.totalEquityTimeframe1Y;
  }
});

export const selectContributionTimeframe = createSelector<
  AppState,
  AppState,
  string,
  PastValue[] | undefined
>(selectState, selectSelectedTimeframe, (state, timeframe) => {
  if (timeframe === '1Y') {
    return state.performanceAll?.data?.contributionTimeframe1Y;
  } else if (timeframe === 'YTD') {
    return state.performanceAll?.data?.contributionTimeframeYTD;
  } else if (timeframe === 'ALL') {
    return state.performanceAll?.data?.contributionTimeframeALL;
  } else {
    return state.performanceAll?.data?.contributionTimeframe1Y;
  }
});

export const selectWithdrawalTimeframe = createSelector<
  AppState,
  AppState,
  string,
  PastValue[] | undefined
>(selectState, selectSelectedTimeframe, (state, timeframe) => {
  if (timeframe === '1Y') {
    return state.performanceAll?.data?.withdrawalTimeframe1Y;
  } else if (timeframe === 'YTD') {
    return state.performanceAll?.data?.withdrawalTimeframeYTD;
  } else if (timeframe === 'ALL') {
    return state.performanceAll?.data?.withdrawalTimeframeALL;
  } else {
    return state.performanceAll?.data?.withdrawalTimeframe1Y;
  }
});

export const selectContributions = createSelector<
  AppState,
  AppState,
  string,
  Contributions | undefined
>(selectState, selectSelectedTimeframe, (state, timeframe) => {
  if (timeframe === '1Y') {
    return state.performanceAll?.data?.contributions1Y;
  } else if (timeframe === 'YTD') {
    return state.performanceAll?.data?.contributionsYTD;
  } else if (timeframe === 'ALL') {
    return state.performanceAll?.data?.contributionsALL;
  } else {
    return state.performanceAll?.data?.contributions1Y;
  }
});

export const selectContributionStreak = createSelector<
  AppState,
  AppState,
  string,
  number | undefined
>(selectState, selectSelectedTimeframe, (state, timeframe) => {
  if (timeframe === '1Y') {
    return state.performanceAll?.data?.contributionStreak1Y;
  } else if (timeframe === 'YTD') {
    return state.performanceAll?.data?.contributionStreakYTD;
  } else if (timeframe === 'ALL') {
    return state.performanceAll?.data?.contributionStreakALL;
  } else {
    return state.performanceAll?.data?.contributionStreak1Y;
  }
});

export const selectContributionMonthsContributed = createSelector<
  AppState,
  AppState,
  string,
  number | undefined
>(selectState, selectSelectedTimeframe, (state, timeframe) => {
  if (timeframe === '1Y') {
    return state.performanceAll?.data?.contributionMonthsContributed1Y;
  } else if (timeframe === 'YTD') {
    return state.performanceAll?.data?.contributionMonthsContributedYTD;
  } else if (timeframe === 'ALL') {
    return state.performanceAll?.data?.contributionMonthsContributedALL;
  } else {
    return state.performanceAll?.data?.contributionMonthsContributed1Y;
  }
});

export const selectContributionMonthsTotal = createSelector<
  AppState,
  AppState,
  string,
  number | undefined
>(selectState, selectSelectedTimeframe, (state, timeframe) => {
  if (timeframe === '1Y') {
    return state.performanceAll?.data?.contributionTotalMonths1Y;
  } else if (timeframe === 'YTD') {
    return state.performanceAll?.data?.contributionTotalMonthsYTD;
  } else if (timeframe === 'ALL') {
    return state.performanceAll?.data?.contributionTotalMonthsALL;
  } else {
    return state.performanceAll?.data?.contributionTotalMonths1Y;
  }
});
