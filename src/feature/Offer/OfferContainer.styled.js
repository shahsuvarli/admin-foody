import styled from "styled-components";
import TablePagination from '@mui/material/TablePagination';

export const OffersStyled = styled.div`
   margin-bottom: 50px;
   padding-left: 30px;
`
export const OffersDiv = styled.div`
   background-color: rgba(39, 40, 60, 1);
   width: 99%;
   border-radius: 14px;
   padding: 18px 21px;
   margin-bottom: 40px;
   display: flex; 
   justify-content: space-between;
`

export const OffersSpan = styled.span`
    font-weight: 500;
    font-size: 20px;
    color: rgba(242, 242, 242, 0.87);
`

export const DeleteImage = styled.img`
   cursor: pointer;
`

export const TablePaginationStyle = styled(TablePagination)`
  background-color: #1E1E30;
  color: #fff !important;
`

export const LoadingImage = styled.img`
   width: 50px;
   position: absolute;
   top: 50%;
   left: 60%;
   transform: translate(-50%, -50%);
`