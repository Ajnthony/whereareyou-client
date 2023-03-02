import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const {REACT_APP_DEBUG} = process.env;

export const logger = (...args: any[]) => {
  const isDevEnv = REACT_APP_DEBUG && REACT_APP_DEBUG === 'true' ? true : false;
  const log = isDevEnv ? console.log(...args) : () => {};
  return log;
};

// not exported
const handleSortArray = (arr: any[], option: number) => {
  if (option === 1) {
    // 'new'
    return arr.sort((a, b) => {
      const aTimestamp = new Date(a.date_created).getTime();
      const bTimestamp = new Date(b.date_created).getTime();
      return bTimestamp - aTimestamp;
    });
  } else {
    // 'top
    return arr.sort((a, b) => b.views - a.views);
  }
};

export const handleFilterAndSort = (arr: any[], category: number, sortOption: number) => {
  if (category === 1) {
    // all posts, no need to filter
    // sort only
    return handleSortArray(arr, sortOption);
  } else {
    // arr needs to be filtered by category
    const filteredArray = arr.filter((item: any) => item.category === category);
    return handleSortArray(filteredArray, sortOption);
  }
};

export const displayDate = (date: string) => {
  return formatDistanceToNow(new Date(date));
};

export const subText = (text: string) => {
  if (text.length > 200) {
    return text.substring(0, 200) + '...';
  }
  return text;
};

export const getDisplayName = (uid: number, usersArr: any[]) => {
  for (let i = 0; i < usersArr.length; i++) {
    if (uid === usersArr[i].id) {
      return usersArr[i].display_name;
    }
  }
};

export const getCategoryName = (cid: number, categoryArr: any[]) => {
  for (let i = 0; i < categoryArr.length; i++) {
    if (cid === categoryArr[i].id) {
      return categoryArr[i].name;
    }
  }
};
