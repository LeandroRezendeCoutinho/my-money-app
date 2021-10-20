export function selectTab(tabid) {
  return {
    type: 'TAB_SELECTED',
    payload: tabid
  }
}

export function showTabs(...tabids) {
  const tabsToShow = {}
  tabids.forEach(e => tabsToShow[e] = true)
  return {
    type: 'TAB_SHOWED',
    payload: tabsToShow
  }
}