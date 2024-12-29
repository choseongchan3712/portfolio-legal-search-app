import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const InputWrap = styled.form`
  width: 70%;
  height: 50px;
  border: none;
  border-radius: 25px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: #f5f5f7;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:focus-within {
    box-shadow: 0 4px 12px rgba(120, 116, 241, 0.15);
    background-color: #fff;
  }

  @media (max-width: 768px) {
    width: 85%;
    height: 45px;
  }

  @media (max-width: 480px) {
    width: 92%;
    height: 42px;
    padding: 5px 15px;
  }

  input {
    all: unset;
    width: calc(100% - 45px);
    height: 100%;
    color: #333;
    font-size: 15px;

    &::placeholder {
      color: #999;
      transition: color 0.3s ease;
    }

    &:focus::placeholder {
      color: #bbb;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  button {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #7874f1;
    color: #fff;
    transition: all 0.3s ease;

    &:hover {
      background-color: #6562d8;
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }

    @media (max-width: 768px) {
      width: 32px;
      height: 32px;
    }

    @media (max-width: 480px) {
      width: 30px;
      height: 30px;
    }
  }

  span {
    position: absolute;
    bottom: -22px;
    left: 20px;
    color: #ff4d4f;
    font-size: 12px;
    font-weight: 500;
    opacity: 0;
    animation: fadeIn 0.3s ease forwards;

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-5px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 480px) {
      font-size: 11px;
      bottom: -20px;
      left: 15px;
    }
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
