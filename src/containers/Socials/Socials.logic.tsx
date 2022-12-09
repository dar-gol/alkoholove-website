import React from 'react';
import {createSearchParams, useNavigate} from 'react-router-dom';
import {IPageInfo} from '../../@types/pagination';
import useQueryParams from '../../utils/hooks/useQueryParams';
import SocialsView from './Socials.view';
import {SocialSearchOption} from "./Socials.apollo";
import {UsersSearchResult} from "../../@types/user";

interface Props {
  users: UsersSearchResult;
  phrase?: string;
  selectedOption?: SocialSearchOption;
  page: IPageInfo | undefined;
  options: SocialSearchOption[];
}

const SocialsLogic = ({users, phrase, selectedOption, page, options}: Props) => {
  const {query} = useQueryParams();
  const navigate = useNavigate();

  const handleOptionsChange = (searchOption: SocialSearchOption) => {
    const {searchPhrase} = query;
    const params = createSearchParams({searchPhrase, searchType: searchOption.value});
    navigate(`/social?${params}`);
  }

  const handlePhraseChange = (searchPhrase: string) => {
    const {searchType} = query;
    const params = createSearchParams({searchPhrase, searchType});
    navigate(`/social?${params}`);
  }

  const setLimit = () => {
    const {searchPhrase, searchType} = query;
    const limit = query.limit ? Number(query.limit) + 10 : 20;

    const params = createSearchParams({
      searchPhrase,
      searchType,
      limit: limit.toString(),
    });

    navigate(`/social?${params}`);
  };

  return (
    <SocialsView
      phrase={phrase}
      users={users}
      onOptionsChange={handleOptionsChange}
      onPhraseChange={handlePhraseChange}
      setLimit={setLimit}
      page={page}
      options={options}
      selectedOption={selectedOption}
    />
  );
};

export default SocialsLogic;
