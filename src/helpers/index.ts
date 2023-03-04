import {Category, User} from 'components/types/index';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const {REACT_APP_DEBUG} = process.env;

export const logger = (...args: any[]) => {
  const isDevEnv = REACT_APP_DEBUG && REACT_APP_DEBUG === 'true' ? true : false;
  const log = isDevEnv ? console.log(...args) : () => {};
  return log;
};

// not exported
const handleSortArray = (arr: any[], option: number) => {
  const optionNew = 1;
  if (option === optionNew) {
    // 1 = 'new'
    return arr.sort((a, b) => {
      const aTimestamp = new Date(a.date_created).getTime();
      const bTimestamp = new Date(b.date_created).getTime();
      return bTimestamp - aTimestamp;
    });
  } else {
    // 2 = 'top'
    return arr.sort((a, b) => b.views - a.views);
  }
};

export const handleFilterAndSort = (
  arr: any[],
  filterOptionOne: number,
  filterOptionTwo: number | null, // forum doesn't need this
  sortOption: number,
  source: string,
  tag: string,
  filters: any
) => {
  const acceptedSources = ['forum', 'animals'];
  if (!acceptedSources.includes(source)) {
    throw new Error('Invalid source provided');
  }

  const optionAll = 1;

  if (
    (source === 'forum' && filterOptionOne === optionAll) ||
    (source === 'animals' && filterOptionOne === optionAll && filterOptionTwo === optionAll)
  ) {
    // all animals/posts, no need to filter
    // sort only
    return handleSortArray(arr, sortOption);
  } else {
    if (source === 'forum') {
      // filter posts by category
      // arr needs to be filtered by category
      const chosenCategory = filters.find((category: any) => category.id === filterOptionOne);
      const filteredArray = arr.filter((post: any) => post.category === chosenCategory.id);
      return handleSortArray(filteredArray, sortOption);
    } else {
      // filter animals by filter option
      // also needs to handle tags

      // filter by status
      const statusMissing = 2;
      const statusFound = 3;
      const filterByOptionOne = (animal: any) =>
        filterOptionOne === statusMissing
          ? !animal.is_found
          : filterOptionOne === statusFound
          ? animal.is_found
          : animal;

      // filter by species
      const chosenFilterType = filters.filter_type.find((f: any) => f.id === filterOptionTwo);
      const filterByOptionTwo = (animal: any) =>
        filterOptionTwo !== optionAll ? animal.species === chosenFilterType.name : animal;

      // needs more work
      const filterByTags = (animal: any) => {
        // animal.tags.forEach((t: any) => {
        //   if (t.label === tag) {
        //     return animal;
        //   }
        // }
        return animal;
      };
      const filteredArray = arr.filter(filterByOptionOne).filter(filterByOptionTwo).filter(filterByTags);
      return handleSortArray(filteredArray, sortOption);
    }
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

export const getDisplayName = (uid: number, usersArr: User[]) => {
  for (let i = 0; i < usersArr.length; i++) {
    if (uid === usersArr[i].id) {
      return usersArr[i].display_name;
    }
  }
};

export const getCategoryName = (cid: number, categoryArr: Category[]) => {
  for (let i = 0; i < categoryArr.length; i++) {
    if (cid === categoryArr[i].id) {
      return categoryArr[i].name;
    }
  }
};
