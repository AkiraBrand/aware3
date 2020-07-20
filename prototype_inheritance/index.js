//prototypical inheritence for ministry

const ADULT_LEADER = {
  adultLeader: 1
};

const YOUTH_LEADER = {
  youthLeader: 1
};

const CHILDCARE = {
  childcare: 1
};

const MEMBER_SERVICES = {
  memberServices: 1
};

const NON_MEMBER_SERVICES = {
  nonMemberServices: 1
};

const SOUP_KITCHEN = {
  soupKitchen: 1
};

const YOUTH_MINISTRY = (options) => {
  return Object.assign({}, YOUTH_LEADER, MEMBER_SERVICES);
};

const ADULT_MINISTRY = (options) => {
  return Object.assign({}, ADULT_LEADER, CHILDCARE, MEMBER_SERVICES);
};

const OUTREACH_MINISTRY = (options) => {
  return Object.assign({}, ADULT_LEADER, SOUP_KITCHEN, NON_MEMBER_SERVICES);
};

console.log(YOUTH_MINISTRY, ADULT_MINISTRY, OUTREACH_MINISTRY);
