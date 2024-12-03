import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const InputWrap = styled.form`
  width: 70%;
  height: 50px;
  border: 1px solid #000;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  input {
    all: unset;
    width: 95%;
    height: 100%;
  }
  button {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: #7874f1;
    color: #fff;
  }
`;

interface OnsubmitType {
  searchWord: string;
}

interface SearchTabPropsType {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchTab = ({
  setSearchValue,
}: SearchTabPropsType): JSX.Element => {
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    setSearchValue(search);
  }, [search]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<OnsubmitType>();

  const onSubmit = (data: OnsubmitType) => {
    setSearch(data.searchWord);
    reset();
  };

  return (
    <InputWrap onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="검색어를 적어주세요"
        {...register("searchWord", { required: "검색어는 필수입니다." })}
      />
      {errors.searchWord && <span>{errors.searchWord.message}</span>}
      <button>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </InputWrap>
  );
};

export default SearchTab;
