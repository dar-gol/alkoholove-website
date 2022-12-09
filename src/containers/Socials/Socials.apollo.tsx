import React, {useEffect, useState, useCallback} from 'react';
import {useMutation} from "@tanstack/react-query";
import { debounce } from "lodash";
import {IPageInfo} from '../../@types/pagination';
import useQueryParams from '../../utils/hooks/useQueryParams';
import SocialsLogic from './Socials.logic';
import {UsersSearchResult} from "../../@types/user";
import {searchUsers} from "../../utils/requests/get";


export type SocialSearchOption = {
  value: string,
  label: string
}

const options: SocialSearchOption[] = [
  { value: 'followers', label: 'obserwujący' },
  { value: 'following', label: 'obserwowani' },
  { value: 'all', label: 'wszyscy' },
]

const SocialsApollo = () => {
  const [users, setUsers] = useState<UsersSearchResult>([]);
  const [page, setPage] = useState<IPageInfo>();
  const [filters, setFilters] = useState<{
    searchType: SocialSearchOption;
    searchPhrase: string;
  }>();
  const {query} = useQueryParams();

  const searchUsersMutation = useMutation({
    mutationFn: searchUsers,
    onSuccess(data) {
      setUsers(data.data.users || []);
      setPage(data.data.page_info);
    },
  });

  const searchForUsers = useCallback(
      debounce(args => {
            searchUsersMutation.mutate(args)
          }
      , 250),
      []
  );

  useEffect(() => {
    const {searchPhrase, searchType} = query;
    const selectedOption = options.find((it) => it.value === searchType)!
    const phraseFilter = (searchPhrase === "undefined" || !searchPhrase) ? "" : searchPhrase
    setFilters({searchType: selectedOption, searchPhrase: phraseFilter});
    if (typeof(searchType) !== "undefined") {
      const search = (phraseFilter.length >= 3) ? `&phrase=${phraseFilter}` : '';
      searchForUsers({queryKey: [query.limit || '10', search, searchType]})
    }
  }, [JSON.stringify(query)]);

  return <SocialsLogic phrase={filters?.searchPhrase} selectedOption={filters?.searchType} users={users} page={page} options={options} />;
};

export default SocialsApollo;
