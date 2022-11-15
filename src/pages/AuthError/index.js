import ImageAuth from '../../Image/components/error.jpg';
import { ImgAuth, BtnAuth, ErrorDiv } from "./PageAuth.styled.js";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const Page404 = () => {
    const { t } = useTranslation();

    return (
        <ErrorDiv>
            <Link to="/login"><BtnAuth>{t('back')}</BtnAuth></Link>
            <ImgAuth src={ImageAuth} alt="404" />
        </ErrorDiv>
    )
}

export default Page404;