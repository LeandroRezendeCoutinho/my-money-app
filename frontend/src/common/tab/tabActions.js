export function selectTab(tabid) {
  console.log(tabid)
  return {
    type: 'TAB_SELECTED',
    payload: tabid
  }
}