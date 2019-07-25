import React from "react";
import styled from "styled-components";
import { FaSearch } from 'react-icons/fa';

const RSearch = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 600;
  line-height: 30px;
  width: 100%;
  color: #6E7B90;
  ::placeholder {
      color: #6E7B90;
  }
`

const RSearchGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  background: white;
  svg {
    margin-right: 20px;
    color: #DDE2E9;
  }
`

const Search = ({ setImages, setIsLoading, setResult }) => {
  const handleSearch = async (value) => {
    console.log(value)
    const api = `https://api.unsplash.com/search/photos?client_id=7d00dac39ad904ca430ef93913e550192f1a70a80f00e3598a100c147591d0b7&query=${value}&per_page=7`;
    const fetchData = () => fetch(api);
    const res = await fetchData();
    const images = await res.json();
    setImages(images.results);
    setIsLoading();
  }
  return (
      <div>
        <RSearchGroup>
            <FaSearch />
            <RSearch 
                placeholder="Search for photo" 
                onKeyUp={(e) => {
                    e.keyCode === 13 && handleSearch(e.target.value)
                    e.keyCode === 13 && setIsLoading(e.target.value)
                    e.keyCode === 13 && setResult(e.target.value)
                }} 
            />
        </RSearchGroup>
    </div>
  )
}

export default Search;