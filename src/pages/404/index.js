import Image404 from '../../Image/components/404.png';
import { Img404, Btn404 } from "./Page404.styled.js";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const Page404 = () => {
    const { t } = useTranslation();

    return (
        <div className='container d-flex justify-content-center'>
            <Link to="/panel/dashboard"><Btn404>{t('back')}</Btn404></Link>
            <Img404 src={Image404} alt="404" />
        </div>
    )
}

export default Page404;