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

const Search = () => {
  const handleSearch = (value) => {
      console.log(value)
    const api = `https://source.unsplash.com/search/photos?page=1&query=${value}`;
    fetch(api,
        {})
      .then(images => {
        
      })
  }
  return (
      <div>
        <RSearchGroup>
            <FaSearch/>
            <RSearch 
                placeholder="Search for photo" 
                onChange={(e) => handleSearch(e.target.value)} 
            />
        </RSearchGroup>
    </div>
  )
}

export default Search;