import styled from "styled-components";

export const ModalDiv = styled.div`
  padding: 6px 44px 14px 9px;
  height: 100%;
  overflow: hidden;
  @media (max-width: 992px) {
        overflow-y: auto;
    }
`

export const ImageDiv = styled.div`
  display: flex;
  @media (max-width: 992px) {
    display: block;
  }
`;
export const ImageTitle = styled.div`
  flex: 4;
  padding-right: 40px;
  @media (max-width: 992px) {
    flex: 10;
    margin-bottom: 10px;
    display: block;
    padding-right: 0;
  }
`;

export const ImageTitleText = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: rgba(199, 199, 199, 1);
`;

export const ImagePreview = styled.img`
  border-radius: 10px;
  display: block;
  margin-top: 20px;
  height: 60px;
`;

export const DataTitle = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: rgba(199, 199, 199, 1);
  flex: 4;
  padding-right: 40px;
  @media (max-width: 992px) {
    flex: 10;
    margin-bottom: 10px;
    display: block;
    padding-right: 0;
  }
`;
export const ImageUpload = styled.div`
  background-color: rgba(67, 68, 90, 1);
  border-radius: 14px;
  height: 120px;
  padding-right: 15px;
  flex: 6;
  position: relative;
  cursor: pointer;
  @media (max-width: 992px) {
    flex: 10;
  }
`;
export const ImageInput = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
  z-index: 9;
`;
export const ImageIconSection = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const ImageSpan = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  display: block;
  text-align: center;
`;

export const DataDiv = styled.div`
  display: flex;
  margin-top: 50px;
  @media (max-width: 992px) {
    display: block;
  }
`;

export const AddData = styled.div`
  background-color: rgba(67, 68, 90, 1);
  border-radius: 14px;
  flex: 6;
  padding: 27px 0;
  padding-right: 10px;
  @media (max-width: 992px) {
    flex: 10;
  }
`;

export const DataScroll = styled.div`
  overflow-y: auto;
  max-height: 260px;
`;

export const DataLabel = styled.label`
  font-weight: 500;
  font-size: 16px;
  color: rgba(199, 199, 199, 1);
  line-height: 24px;
  margin-bottom: 8px;
  display: block;
  margin: 0 22px 8px 22px;
`;
export const DataInput = styled.input`
  font-weight: 500;
  font-size: 16px;
  color: rgba(199, 199, 199, 1);
  line-height: 30px;
  background-color: rgba(90, 91, 112, 1);
  border-radius: 14px;
  margin: 0 22px 16px 22px;
  width: calc(100% - 44px);
  border: none;
  padding: 8px 18px;
  &::placeholder {
    color: rgba(199, 199, 199, 1);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 10px 0 rgba(236, 92, 248, 1);
  }
`;
export const DataSelect = styled.select`
  font-weight: 500;
  font-size: 16px;
  color: rgba(199, 199, 199, 1);
  line-height: 30px;
  background-color: rgba(90, 91, 112, 1);
  border-radius: 14px;
  margin: 0 22px 16px 22px;
  width: calc(100% - 44px);
  border: none;
  padding: 8px 18px;
  &::placeholder {
    color: rgba(199, 199, 199, 1);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 10px 0 rgba(236, 92, 248, 1);
  }
`;

export const BtnDiv = styled.div`
  border-top: 1px solid rgba(67, 68, 90, 1);
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 13px 44px 13px 24px;
  @media (max-width: 992px) {
    padding: 13px 60px 13px 24px;
    margin-top: 30px;
    position: static;
  }
  @media (max-width: 576px) {
    padding: 12px;
  }
`;
export const CancelBtn = styled.button`
  background-color: #43445a;
  border-radius: 14px;
  text-align: center;
  padding: 14px 0 8px 0;
  border: 2px solid rgba(56, 57, 78, 1);
  box-shadow: 0 4px 4px 0 rgba(39, 174, 96, 0.2);
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #fff;
  width: 47%;
  transition: 0.3s all ease-in-out;
  &:hover {
    background-color: rgba(67, 68, 90, 0.5);
  }
  @media (max-width: 576px) {
    padding: 10px 0 8px 0;
    font-size: 12px;
  }
`;
export const CreateBtn = styled.button`
  background-color: rgba(192, 53, 162, 1);
  border-radius: 14px;
  text-align: center;
  padding: 14px 0 8px 0;
  border: 2px solid rgba(192, 53, 162, 1);
  box-shadow: 0 4px 4px 0 rgba(39, 174, 96, 0.2);
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #fff;
  width: 47%;
  transition: 0.3s all ease-in-out;
  &:hover {
    background-color: rgba(192, 53, 162, 0.8);
  }
  @media (max-width: 576px) {
    padding: 10px 0 8px 0;
    font-size: 12px;
  }
`;

export const ErrorText = styled.div`
  font-size: 13px;
  color: red;
  margin-top: -15px;
  margin-left: 20px;
`;
export const ImageText = styled.div`
  font-size: 13px;
  color: red;
  margin-top: 10px;
  margin-left: 20px;
`;
