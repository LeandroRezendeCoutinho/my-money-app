export function selectTab(tabid) {
  return {
    type: 'TAB_SELECTED',
    payload: tabid
  }
}