import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import cls from './ArticleEditPage.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = memo(
    (props: ArticleEditPageProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const { id } = useParams<{ id: string }>();
        const isEdit = Boolean(id);

        return (
            <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
                {isEdit ? t('Редактировать') + id : t('Создать')}
            </Page>
        );
    }
);

export default ArticleEditPage;
